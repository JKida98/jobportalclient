import { useRef } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { IOfferForCreaton } from '../../dtos/IOfferDto';
import OfferForm from './OfferForm';

interface IOfferModalProps {
    showModal: boolean;
    edit: boolean;
    toggle: any;
}

const OfferModal: React.FC<IOfferModalProps> = ({ showModal, edit, toggle }) => {
    const initialValues: IOfferForCreaton = {
        title: '',
        description: '',
        hourlyPrice: 0
    };

    const handleSubmit = (values: IOfferForCreaton) => {
        console.log(values);
    };

    const formikRef = useRef({ handleSubmit: () => {} });

    return (
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader>{edit ? 'Editing offer' : 'Adding a new offer'}</ModalHeader>
            <ModalBody>
                <OfferForm externalRef={formikRef} initialValues={initialValues} externalSubmit={(values: IOfferForCreaton) => handleSubmit(values)} />
            </ModalBody>
            <ModalFooter>
                <Row className="w-100 m-0">
                    <Col className="spaceBetween m-0 p-0">
                        <Button outline onClick={() => toggle()}>
                            Cancel
                        </Button>
                        <Button onClick={() => formikRef.current.handleSubmit()} color="info">
                            {edit ? 'Save' : 'Add offer'}
                        </Button>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
};

export default OfferModal;
