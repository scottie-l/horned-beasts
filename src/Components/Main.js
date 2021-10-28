import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastData from '../data.json';
import HornedBeasts from './HornedBeasts.js';
import '../css/main.css';

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

// import the data.json file into app componenet and send that data inot the main  component
// function to allow user to update state in the app
// create 'selectedBeast' component and include in your app
// use the state in the app to render an indivdual beast in the modal selectedBeast component using react bootstrap

export default Main;
