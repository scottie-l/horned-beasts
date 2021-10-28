import React, {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import Container from 'react-bootstrap/Container';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displayBeast: false};
  }

  showDetails = (beast) => {
    this.setState({displayBeast: beast});
  }

  handleHide = () => {
    this.setState({displayBeast: false});
  }


render() {
    return (
      <Container>
        <Header/>
        <Main beast = {beast} showDetails = {this.showDetails}/>
        <Footer/>
        <selectedBeast beast = {this.state.showBeast} handleHide = {this.handleHide}/>     
      </Container>
    )
  }
}

// create selectedBeast component