import {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends Component {

    handleClose = () => {
        this.props.closeModal();
    }

    render() {
        return (
            <Modal show = {this.props.show} onHide = {this.handleClose}>
                <Modal.Header closeButton>
                    <h1>{this.props.featuredBeast.title}</h1>
                        <description>{this.props.featuredBeast.description}</description>                      
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src = {this.props.featuredBeast.image_url} alt = {this.props.description}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = 'secondary' onClick = {this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast
