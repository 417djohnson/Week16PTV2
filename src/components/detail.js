import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./detail.css";

export default class Detail extends Component {
    render() {
        let { therapist } = this.props;
        return (
            <div className="container">
                <div className='cute-therapist row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='therapist-detail-card TherapistDetails-card card'>
                            <img className='card-img-top mt-2 mx-auto' src={therapist.src} alt={therapist.name} />
                            <div className='card-body'>
                                <h2 className='card-title text-center'>{therapist.name}</h2>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'><strong>About:</strong> {therapist.about}</li>
                                </ul>
                                <div className='card-body'>
                                    <Link to='/therapist' className='btn btn-light'>Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}