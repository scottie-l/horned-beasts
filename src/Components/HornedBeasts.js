import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/beastCard.css';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: 0
        }
    }

    handleFavsClick = () => {
        this.setState({
            favs: this.state.favs + 1
        });
    }

    handleClick = () => {
        this.props.updateBeast(this.props.beast);
    }

    render() {
        return (
            <Card id='beastCard' style={{ width: '20rem' }}>
                <Card.Img variant='top' onClick={this.handleClick} src={this.props.beast.image_url} alt={this.props.beast.description} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant='primary' onClick={this.handleFavsClick}>{'❤️ '}{this.state.favs}</Button>
                    {/* <Button variant = 'primary' onClick = {this.handleClick}></Button> */}
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;
