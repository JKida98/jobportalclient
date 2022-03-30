import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { initialOfferValues, IOfferForCreation } from '../../dtos/IOfferDto';
import * as jsonpatch from 'fast-json-patch';
import { AppState } from '../../redux/reducers';
import OfferForm from './OfferForm';
import { createOffer, updateOffer } from '../../redux/actions/offers/offerActions';

interface IOfferModalProps {
    showModal: boolean;
    edit: boolean;
    toggle: any;
}

const OfferModal: React.FC<IOfferModalProps> = ({ showModal, edit, toggle }) => {
    const formikRef = useRef({ handleSubmit: () => {} });
    const dispatch = useDispatch();
    const offerToEdit = useSelector((state: AppState) => state.offerReducer.offer);

    const handleSubmit = (values: IOfferForCreation) => {
        edit ? handleUpdate(values) : handleAdd(values);
    };

    const handleUpdate = (values: IOfferForCreation) => {
        var diff = jsonpatch.compare(offerToEdit, values);
        dispatch(updateOffer(offerToEdit.id, diff));
    };

    const handleAdd = (values: IOfferForCreation) => {
        dispatch(createOffer(values));
    };

    const initialValues = edit ? offerToEdit : initialOfferValues;

    return (
        <Modal isOpen={showModal} toggle={() => toggle()}>
            <ModalHeader>{edit ? 'Editing offer' : 'Adding a new offer'}</ModalHeader>

            <ModalBody>
                <OfferForm
                    externalRef={formikRef}
                    initialValues={initialValues}
                    externalSubmit={(values: IOfferForCreation) => handleSubmit(values)}
                />
            </ModalBody>
            <ModalFooter>
                <Row className="w-100 m-0">
                    <Col className="spaceBetween m-0 p-0">
                        <Button color="secondary" outline onClick={() => toggle()}>
                            Cancel
                        </Button>
                        <Button onClick={() => formikRef.current.handleSubmit()} color="primary">
                            {edit ? 'Save' : 'Add offer'}
                        </Button>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
};

export default OfferModal;
