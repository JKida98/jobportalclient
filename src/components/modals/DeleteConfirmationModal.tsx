import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

interface IDeleteConfirmationModalProps {
    showModal: boolean;
    action: any;
    toggle: any;
}

const DeleteConfirmationModal: React.FC<IDeleteConfirmationModalProps> = ({ showModal, action, toggle }) => {
    return (
        <Modal fade isOpen={showModal}>
            <ModalHeader>Remove offer</ModalHeader>
            <ModalBody>
                <p>Do you want to remove selected offer?</p>
            </ModalBody>
            <ModalFooter>
                <Row className="w-100 m-0">
                    <Col className="spaceBetween m-0 p-0">
                        <Button outline onClick={() => toggle()}>
                            Cancel
                        </Button>
                        <Button onClick={() => action()}>Delete</Button>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteConfirmationModal;
