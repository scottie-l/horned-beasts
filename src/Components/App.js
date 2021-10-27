import React, {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js';
import '/home/scottie_l/projects/code301/lab_01/src/CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>        
      </div>
    )
  }
}
