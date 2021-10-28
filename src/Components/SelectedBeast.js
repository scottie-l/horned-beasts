import {Modal} from 'react-bootstrap';
import {Component} from 'react';
import {Button, Figure} from 'react-bootstrap';

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show = {this.props.beast} onHide = {this.props.handleHide}>
                <Modal.Header><h1>{this.props.beast ? this.props.beast.animalName: ''}</h1></Modal.Header>
                <Modal.body>
                    <Figure>
                        <Figure.Image src = {this.props.beast ? this.props.beast.imageURL: ''}></Figure.Image>
                        <Figure.Caption>{this.props.beast ? this.props.beast.description: ''}</Figure.Caption>                        
                    </Figure>
                    <Button variant = 'primary' onClick = {this.props.handleHide}>Close</Button>
                </Modal.body>
            </Modal>
        )
    }
}

export default SelectedBeast
