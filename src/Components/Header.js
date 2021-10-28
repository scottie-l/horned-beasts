import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';


class Header extends Component {
    render() {
        return (
            <Container>
                <h1>Horned Beasts</h1>
            </Container>
        )
    }
}

export default Header;
