import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddToDoForm from '../AddToDoForm';

class DModal extends Component {

    render(){
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add ToDo Item</ModalHeader>
                <ModalBody>
                    <AddToDoForm onSubmit={this.props.onClick} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default DModal;
