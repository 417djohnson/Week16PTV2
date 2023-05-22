import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import "./read.css";
import './detail.css';
import logo from "../images/logo.png";

export default function Read() {
    const getData = () => {
        axios.get(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants/`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const onDelete = (id) => {
        axios.delete(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants/${id}`)
        .then(() => {
            getData();
        })
    }
    
    const setData = (data) => {
        let { id, therapistName, therapistLicense, therapistEmail } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Therapist Name', therapistName);
        localStorage.setItem('Therapist License', therapistLicense);
        localStorage.setItem('Therapist Email', therapistEmail)
    }
    
    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants`)
            .then((response) => {
                setAPIData(response.data);
            })
        }, [])

        return (
            <div className='container col-md-8 my-5'>
                <div className='card Read'>
                    <div className='row justify-content-center'>
                        <div className='col-11 col-lg-8'>
                        {APIData.map((data) => (
                            <div className='therapist-detail-card card mt-5'>
                                <img className='card-img-top mx-auto my-2' src={logo} alt='Precision Wellness' />
                                <div className="card-header">
                                    <h2 className='card-title text-center'>Thank you!</h2>  
                                </div>
                                <div className='card-body'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item'><strong>First & Last Name:</strong> {data.therapistName}</li>
                                        <li className='list-group-item'><strong>License Number:</strong> {data.therapistLicense}</li>
                                        <li className='list-group-item'><strong>Email:</strong> {data.therapistEmail}</li>
                                    </ul>
                                    <div className='card-body'>
                                        <p>Thank you so much for your entry.  We're looking forward to 
                                            meeting you and will be in touch soon!</p>
                                        <div className='card-body'>
                                            <div className='row mx-auto'>
                                            <Link to='/therapists'>
                                                <Button>Back to Home</Button>
                                            </Link>
                                            &nbsp; &nbsp;
                                            <Link to='/update'>
                                                <Button onClick={() => setData(data)}>Update</Button>
                                            </Link>
                                            &nbsp; &nbsp;
                                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        );
}