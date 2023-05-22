import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Therapists.css";

export default class Therapists extends Component {    
    render() {
        return (
            <div className='container col-md-8 my-5'>
                <div className='card Therapists'>
                    <div className='card-header'>
                        <h2>Meet Our Current Team</h2>
                    </div>
                        <div className="container">
                            <div className="card-body mb-3">
                                <div className='row'>
                                    {this.props.therapists.map(m => (
                                    <div className='col-xl-4 col-sm-6  text-center cute-therapist mt-4' key={m.name}>
                                        <img src={m.src} alt={m.name} />
                                        <h3 className='name-font'>
                                            <Link to={`/therapists/${m.name}`}>{m.name}</Link>
                                        </h3>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        );
    }
}


