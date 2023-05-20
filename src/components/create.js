import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react'
import "./Members.css";

export default function Create() {
    let history = useHistory();
    const [therapistName, setTherapistName] = useState('');
    const [therapistAbout, setTherapistAbout] = useState('');
    const [therapistEmail, setTherapistEmail] = useState('');
    
    const postData = () => {
        axios.post(`https://6469454503bb12ac2089a02b.mockapi.io/AlsoApplicants`, {
            therapistName,
            therapistAbout,
            therapistEmail
        }).then(() => {
            history.push('/read')
        })
    }   

    return (
        <>
        <div class='container col-md-8 my-5'>
            <div className="card Apply">
                <div class='card-header'>
                    <h2>Apply</h2>
                </div>
                    <div class='card-body'>
                        <Form className="create-form">
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Your Name</label>
                                <input placeholder='Janice Smith' onChange={(e) => setTherapistName(e.target.value)}/>
                            </Form.Field>
                            </Form.Group>
                            <Form.Field>
                                <label>About</label>
                                    <input placeholder='Include graduation year, school of study, specialities' onChange={(e) => setTherapistAbout(e.target.value)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='jsmith@mymail.com' onChange={(e) => setTherapistEmail(e.target.value)}/>
                            </Form.Field>
                            <Button onClick={postData} type='submit'>Submit</Button>
                        </Form>
                    </div>
            </div>
        </div>
        </>
    )
}
  
  