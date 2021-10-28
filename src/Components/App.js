import React, {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast.js';
import beasts from '../data.json';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featuredBeast: {}
    }
  }

  closeModal = () => {
    this.setState({show: false});
  }

  openModal = () => {
    this.setState({show: true});
  }

  updateBeast = (beast) => {
    this.setState({featuredBeast: beast});
    this.openModal();
  }

  render() {
    return (
      <Container>
        <Header/>
        <Main updateBeast = {this.updateBeast} beasts = {beasts}/>
        <Footer/>
        <SelectedBeast featuredBeast = {this.state.featuredBeast} closeModal = {this.closeModal} show = {this.state.show}/>     
      </Container>
    );
  }
}

