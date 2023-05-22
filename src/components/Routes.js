import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Therapists from './Therapists';
import Create from './create';
import Read from './read';
import Update from './update';
import Detail from './detail';
import "./Therapists.css";


export default class Routes extends Component {
    render() {
        const getTherapist = props => {
            let name = props.match.params.name;
            let currentTherapist = this.props.therapists.find(
      //toLowerCase allows for the URL to have caps        
            therapist => therapist.name.toLowerCase() === name.toLowerCase() 
            );
            return <Detail {...props} therapist={currentTherapist} />;
          };
        return (
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/therapists' render={() => <Therapists therapists={this.props.therapists} />} />
                <Route exact path='/therapists/:name' render={getTherapist} />
                <Route exact path='/create' render={() => <Create />} />
                <Route exact path='/read' render={() => <Read />} />
                <Route path='/update' render={() => <Update />} />
                <Redirect to='/' />
            </Switch>
        )
    }
}