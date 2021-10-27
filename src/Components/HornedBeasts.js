import {Component} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeasts extends Component {
    constructor(props) {
    super(props);
    this.state = {
        favs: 0
    }
}
    handleClick = () => {
        this.setState({
            favs: this.state.favs +1
            // console.log('clicked')
        });
    }

    render() {
        return(
            <Card id = 'beastCard' style = {{width: '20rem'}}>
                <Card.Img varient = 'top' src = {this.props.imageURL} alt = {this.props.description} />
                <Card.Body>
                    <Card.Title>{this.props.animalName}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant = 'primary' onClick = {this.handleClick}>{'❤️ '}{this.state.favs}</Button>
                </Card.Body>
            </Card>  
        )
    }
}

export default HornedBeasts;
