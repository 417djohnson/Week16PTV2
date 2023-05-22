import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import "./Therapists.css";
import '../App.css'

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState('');
    const [therapistName, setTherapistName] = useState('');
    const [therapistLicense, setTherapistLicense] = useState('');
    const [therapistEmail, setTherapistEmail] = useState('');

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTherapistName(localStorage.getItem('Your Name'));
        setTherapistLicense(localStorage.getItem('Your License Number'))
        setTherapistEmail(localStorage.getItem('Email'))
}, []);


const updateAPIData = () => {
    axios.put(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants/${id}`, {
        therapistName,
        therapistLicense,
        therapistEmail
	}).then(() => {
        history.push('/read')
    })
}

    return (
        <>
        <div className='container col-md-8 my-5'>
            <div className='card Update'>
                <div className='card-header'>
                    <h2>Update Your Entry</h2>
                </div>
                <div className="container">
                    <div className="card-body mb-3">
                        <Form className="create-form">
                            <Form.Group widths='equal'>
                                
                                <Form.Field>
                                    <label>First and Last Name</label>
                                    <input placeholder='As It Appears On Your MO License' value={therapistName} onChange={(e) => setTherapistName(e.target.value)}/>
                                </Form.Field>
                            
                                <Form.Field>
                                    <label>MO License Number</label>
                                    <input placeholder='200112345678' value={therapistLicense} onChange={(e) => setTherapistLicense(e.target.value)}/>
                                </Form.Field>
                                                            
                                <Form.Field>
                                    <label>Your Email</label>
                                    <input placeholder='jsmith@myemail.com' value={therapistEmail} onChange={(e) => setTherapistEmail(e.target.value)}/>
                                </Form.Field>
                            </Form.Group>
                                    
                                    <Button type='submit' onClick={updateAPIData}>Update</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
