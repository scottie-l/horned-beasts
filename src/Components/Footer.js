import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/footer.css';

class Footer extends Component {
    render() {
        return(
            <Container>
                <p>Created by: Scott Lease</p>
            </Container>
        )
    }
}

export default Footer;
