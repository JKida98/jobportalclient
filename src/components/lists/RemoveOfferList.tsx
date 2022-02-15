import React, { useState } from 'react';
import { Trash } from 'react-feather';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { IOfferDto } from '../../dtos/IOfferDto';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import './lists.css';

interface IOffersList {
    list: IOfferDto[];
    action?: any;
    removeAction: any;
}

const RemoveOfferList: React.FC<IOffersList> = ({ list, action, removeAction }) => {
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

    const renderList = () => {
        return list?.map((x) => {
            return (
                <Row className="rowAlignCenter mb-4" key={x.id} onClick={() => action(x)}>
                    <Col xs="11">
                        <p className="m-0">{x.title}</p>
                        <p className="m-0 secondaryBlackText">Price pr. hour: {x.hourlyPrice}</p>
                        <p className="m-0 secondaryText maxThreeLines">{x.description}</p>
                    </Col>
                    <Col xs="1 spaceAround">
                        <Trash onClick={(e) => handleTrashClicked(e, x.id)} />
                    </Col>
                </Row>
            );
        });
    };

    return (
        <>
            {renderList()}
            <DeleteConfirmationModal
                showModal={showDeleteModal}
                action={() => handleDeleteOffer()}
                toggle={() => setShowDeleteModal(!showDeleteModal)}
            />
        </>
    );
};

export default RemoveOfferList;
