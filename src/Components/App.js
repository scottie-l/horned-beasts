import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormOnChange from './FormOnChange.js'; // added
import FormOnSubmit from './FormOnSubmit.js'; //added
import SelectedBeast from './SelectedBeast.js';
import beasts from '../data.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from './HornedBeasts.js';

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

  handleChange = (event) => {
    let selection = event.target.value;
    let hornSelect;

    if (selection === 1) {
      hornSelect = HornedBeasts.filter(num => num === 1);
      this.setState({featuredBeast: hornSelect})
    } 
      if (selection === 2) { 
        hornSelect = HornedBeasts.filter(num => num === 2);
        this.setState({featuredBeast: hornSelect})
    }
      if (selection === 3) { 
        hornSelect = HornedBeasts.filter(num => num === 3);
        this.setState({featuredBeast: hornSelect}) 
    } 
      else (selection === 100) {
        hornSelect = HornedBeasts.filter(num => num === 100);
        this.setState({featuredBeast: hornSelect})
    }
  }

  render() {
    return (
      <Container>
        <Header FormOnChange></Header>
        <Header FormOnSubmit></Header>
        <div>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Select>
        </div>  
        <Main updateBeast = {this.updateBeast} beasts = {beasts}/>
        <Footer/>
        <SelectedBeast featuredBeast = {this.state.featuredBeast} closeModal = {this.closeModal} show = {this.state.show}/>     
      </Container>
    );
  }
}

