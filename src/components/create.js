import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import "./Therapists.css";

export default function Create() {
    let history = useHistory();
    const [therapistName, setTherapistName] = useState('');
    const [therapistLicense, setTherapistLicense] = useState('');
    const [therapistEmail, setTherapistEmail] = useState('');
    
    const postData = () => {
        axios.post(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants/`, {
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
            <div className="card Apply">
                <div className='card-header'>
                    <h2>Work With Us</h2>
                </div>
                    <div class='card-body'>
                        <Form className="create-form">
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>First and Last Name</label>
                                <input placeholder='As It Appears On Your MO License' onChange={(e) => setTherapistName(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>MO License Number</label>
                                    <input placeholder='2011123456' onChange={(e) => setTherapistLicense(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='jsmith@mymail.com' onChange={(e) => setTherapistEmail(e.target.value)}/>
                            </Form.Field>
                            </Form.Group>    
                            <Button onClick={postData} type='submit'>Apply</Button>
                        </Form>
                    </div>
            </div>
        </div>
        </>
    )
}
  
  