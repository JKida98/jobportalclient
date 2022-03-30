import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

interface IDeleteConfirmationModalProps {
    showModal: boolean;
    action: any;
    toggle: any;
    title: string;
    confirmationText: string;
}

const DeleteConfirmationModal: React.FC<IDeleteConfirmationModalProps> = ({
    showModal,
    action,
    toggle,
    title,
    confirmationText
}) => {
    return (
        <Modal fade isOpen={showModal}>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
                <p>{confirmationText}</p>
            </ModalBody>
            <ModalFooter>
                <Row className="w-100 m-0">
                    <Col className="spaceBetween m-0 p-0">
                        <Button color="secondary" outline onClick={() => toggle()}>
                            Cancel
                        </Button>
                        <Button color="primary" onClick={() => action()}>
                            Delete
                        </Button>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteConfirmationModal;
