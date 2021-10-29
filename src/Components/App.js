import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import SelectedBeast from './SelectedBeast.js';
import beasts from '../data.json';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featuredBeast: {},
      newBeastArr: beasts
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
    let hornSelect = beasts

    if (selection !== 'all') {
      hornSelect = beasts.filter(beast => beast.horns === parseInt(selection));
    } 
      this.setState({newBeastArr: hornSelect})
  }

  render() {
    return (
      <Container>
        <Header FormOnChange></Header>
        <div>
          <Form.Select onChange = {this.handleChange} aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
            <option value="all">All Beasts</option>
          </Form.Select>
        </div>  
        <Main updateBeast = {this.updateBeast} beasts = {this.state.newBeastArr}/>
        <Footer/>
        <SelectedBeast featuredBeast = {this.state.featuredBeast} closeModal = {this.closeModal} show = {this.state.show}/>     
      </Container>
    );
  }
}
