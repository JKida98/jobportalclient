import React, { useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { IOfferDto } from '../../dtos/IOfferDto';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import './_lists.css';

interface IRemoveOffersListProps {
    list: IOfferDto[];
    action?: any;
    removeAction: any;
}

const RemoveOfferList: React.FC<IRemoveOffersListProps> = ({ list, action, removeAction }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteOffer = () => {
        dispatch(removeAction(id));
        setShowDeleteModal(!showDeleteModal);
    };

    const handleTrashClicked = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setShowDeleteModal(!showDeleteModal);
        setId(id);
    };

    return (
        <>
            {list?.map((x) => (
                <Row className="rowAlignCenter mb-4" key={x.id} onClick={() => action(x)}>
                    <Col xs="11">
                        <p className="m-0">{x.title}</p>
                        <p className="m-0 secondaryTextBlack">Price pr. hour: {x.hourlyPrice}</p>
                        <p className="m-0 secondaryText maxThreeLines">{x.description}</p>
                    </Col>
                    <Col xs="1 spaceAround">
                        <FiTrash onClick={(e) => handleTrashClicked(e, x.id)} />
                    </Col>
                </Row>
            ))}
            <DeleteConfirmationModal
                showModal={showDeleteModal}
                title="Remove from shopping card"
                confirmationText="Would you like to remove the offer from the shopping card?"
                action={() => handleDeleteOffer()}
                toggle={() => setShowDeleteModal(!showDeleteModal)}
            />
        </>
    );
};

export default RemoveOfferList;
