import React, { Component } from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import "./App.css";
import buster from "./images/buster.jpg";
import ella from "./images/ella.jpg";
import bonnie from "./images/bonnie.jpg";
import coming from "./images/candles.png";

 
export default class App extends Component {
  static defaultProps =  {
    therapists: [
    {
        name: "Bonnie",
        src: bonnie,
        about: "Specializes in deep tissue and neuromuscular therapy."
    },
    {
        name: "Buster",
        src: buster,
        about: "Specializes in Cranial Sacrial and Lomi Lomi."
    },
    {
        name: "Ella",
        src: ella,
        about: "Specializes in Swedish and Pre-Natal therapy."
    }, 
    {
      name: "Coming Soon!",
      src: coming,
      about: "You could work here! Click Apply!"
  }, 
        
        ]
  }
  render() {   
    return (
      <div>
          <Navbar therapists={this.props.therapists} />
          <div className='App'>
          <Routes therapists={this.props.therapists} />
          </div>
      </div>
    );
  }
}
