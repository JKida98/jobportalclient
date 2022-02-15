import React, { useState } from 'react';
import { Edit, Plus, Trash } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { IOfferDto } from '../../dtos/IOfferDto';
import OfferModal from '../../pages/offersOverview/OfferModal';
import { getOfferWithoutSpinner, removeOffer } from '../../redux/actions/offers/offerActions';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import './lists.css';

interface IOffersList {
    list: IOfferDto[];
    action: any;
}

const CrudOfferList: React.FC<IOffersList> = ({ list, action }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingOffer, setEditingOffer] = useState(false);
    const [showOfferModal, setShowOfferModal] = useState(false);

    const handleDeleteOffer = () => {
        dispatch(removeOffer(id));
    };

    const handleEditClicked = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setShowOfferModal(true);
        setEditingOffer(true);
        dispatch(getOfferWithoutSpinner(id));
    };

    const handleTrashClicked = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setShowDeleteModal(!showDeleteModal);
        setId(id);
    };

    const handlePlusClicked = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowOfferModal(true);
        setEditingOffer(false);
    };

    const renderList = () => {
        return list?.map((x) => {
            return (
                <Row className="rowAlignCenter mb-4" key={x.id} onClick={() => action(x)}>
                    <Col xs="10">
                        <p className="m-0">{x.title}</p>
                        <p className="m-0 secondaryBlackText">Price pr. hour: {x.hourlyPrice}</p>
                        <p className="m-0 secondaryText maxThreeLines">{x.description}</p>
                    </Col>
                    <Col xs="2 spaceAround">
                        <Edit onClick={(e) => handleEditClicked(e, x.id)} />
                        <Trash onClick={(e) => handleTrashClicked(e, x.id)} />
                    </Col>
                </Row>
            );
        });
    };

    return (
        <>
            {renderList()}
            <Row>
                <Col>
                    <Plus onClick={(e) => handlePlusClicked(e)} />
                </Col>
            </Row>
            <DeleteConfirmationModal
                showModal={showDeleteModal}
                action={() => handleDeleteOffer()}
                toggle={() => setShowDeleteModal(!showDeleteModal)}
            />
            {showOfferModal && (
                <OfferModal
                    showModal={showOfferModal}
                    edit={editingOffer}
                    toggle={() => setShowOfferModal(!showOfferModal)}
                />
            )}
        </>
    );
};

export default CrudOfferList;
