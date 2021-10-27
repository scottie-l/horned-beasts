import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastData from '../data.json';
import HornedBeasts from './HornedBeasts.js';
import '/home/scottie_l/projects/code301/lab_01/src/CSS/main.css';


class Main extends Component {
    render() {      
        return(
            <Container id = 'mainCont'>
                <h2>So many horns! So many jokes!</h2>
                <Row xs = {1} sm = {2} md = {3} lg = {4}>
                    {beastData.map((beast, index) => (
                    <HornedBeasts 
                        key={index}
                        animalName={beast.title}
                        imageURL={beast.image_url} 
                        description={beast.description}
                        horns={beast.horns}
                    />
                    ))}
                </Row>    
            </Container>
        )
    }
}

export default Main;
