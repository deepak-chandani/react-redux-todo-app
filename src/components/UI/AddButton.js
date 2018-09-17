import React from 'react';
import Modal from "./DModal";
import Auxi from "./Auxi";

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            showModal:true
        });
    }

    toggle(){
        this.setState({
            showModal: false
        });
    }

    render(){
        return (
            <Auxi>
                <button className="btn btn-success" onClick={this.onClick.bind(this)}>Add ToDo</button>
                <Modal isOpen={this.state.showModal} onClick={this.toggle} />
            </Auxi>
        )
    }
}

export default AddButton;