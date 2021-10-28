import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeasts from './HornedBeasts.js';
import '../css/mainCont.css';

class Main extends Component {
    render() {      
        return(
            <Container id = 'mainCont'>
                <h2>So many horns! So many jokes!</h2>
                <Row xs = {1} sm = {2} md = {3} lg = {4}>
                    {this.props.beasts.map(beast => <HornedBeasts updateBeast = {this.props.updateBeast} beast = {beast}/>)}
                </Row>    
            </Container>
        )
    }
}

export default Main;
