import React, { useState } from 'react';
import { FiEdit, FiTrash, FiPlusSquare } from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { IOfferDto } from '../../dtos/IOfferDto';
import OfferModal from '../../pages/offersOverview/OfferModal';
import { getOfferWithoutSpinner, removeOffer } from '../../redux/actions/offers/offerActions';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import './_lists.css';

interface ICrudOffersList {
    list: IOfferDto[];
    action: any;
}

const CrudOfferList: React.FC<ICrudOffersList> = ({ list, action }) => {
    const dispatch = useDispatch();
    const [selectedOffer, setSelectedOffer] = useState<IOfferDto | undefined>(undefined);
    // const [id, setId] = useState<string | undefined>(undefined);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [editingOffer, setEditingOffer] = useState<boolean>(false);
    const [showOfferModal, setShowOfferModal] = useState<boolean>(false);

    const handleDeleteOffer = () => {
        if (selectedOffer !== undefined) {
            dispatch(removeOffer(selectedOffer.id));
        }
    };

    const handleEditClicked = (e: React.MouseEvent, offer: IOfferDto) => {
        e.stopPropagation();
        setShowOfferModal(true);
        setEditingOffer(true);
        dispatch(getOfferWithoutSpinner(offer.id));
    };

    const handleTrashClicked = (e: React.MouseEvent, offer: IOfferDto) => {
        e.stopPropagation();
        setShowDeleteModal(!showDeleteModal);
        setSelectedOffer(offer);
    };

    const handlePlusClicked = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowOfferModal(true);
        setEditingOffer(false);
    };

    return (
        <>
            {list?.map((x) => (
                <Row className="rowAlignCenter mb-4" key={x.id} onClick={() => action(x)}>
                    <Col xs="10">
                        <p className="m-0">{x.title}</p>
                        <p className="m-0 secondaryTextBlack">Price per hour: {x.hourlyPrice}</p>
                        <p className="m-0 secondaryText maxThreeLines">{x.description}</p>
                    </Col>
                    <Col xs="2 spaceAround">
                        <FiEdit size={20} onClick={(e) => handleEditClicked(e, x)} />
                        <FiTrash size={20} onClick={(e) => handleTrashClicked(e, x)} />
                    </Col>
                </Row>
            ))}
            <Row>
                <Col>
                    <FiPlusSquare size={22} onClick={(e) => handlePlusClicked(e)} />
                </Col>
            </Row>
            <DeleteConfirmationModal
                showModal={showDeleteModal}
                title={`Remove ${selectedOffer?.title}`}
                confirmationText="Do you want to remove selected offer?"
                action={() => handleDeleteOffer()}
                toggle={() => setShowDeleteModal(!showDeleteModal)}
            />
            <OfferModal
                showModal={showOfferModal}
                edit={editingOffer}
                toggle={() => setShowOfferModal(!showOfferModal)}
            />
        </>
    );
};

export default CrudOfferList;
