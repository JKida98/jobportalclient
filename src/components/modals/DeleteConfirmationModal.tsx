import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

interface IDeleteConfirmationModal {
    showModal: boolean;
    action: any;
    toggle: any;
}

const DeleteConfirmationModal: React.FC<IDeleteConfirmationModal> = ({ showModal, action, toggle }) => {
    return (
        <Modal fade isOpen={showModal}>
            <ModalHeader>Remove offer</ModalHeader>
            <ModalBody>
                <p>Do you want to remove selected offer?</p>
            </ModalBody>
            <ModalFooter>
                <Row>
                    <Col className="spaceAround">
                        <Button onClick={() => toggle()}>Cancel</Button>
                        <Button onClick={() => action()}>Delete</Button>
                    </Col>
                </Row>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteConfirmationModal;
