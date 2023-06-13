import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {API_LINKS} from '../utils/apiLinks'
import axios from 'axios';
import './Login.css'
export default function Login(props){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
    const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value

        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();



        try {
          setErrorMessage('');
          const response = await axios.post(API_LINKS.postLogin,formData);

          const data = response.data;
          // Handle the response data
          
          if (response.status === 200 )


          // Reset the form
          setFormData({
            username: '',
            password: ''
          });
        } catch (error) {
            console.log(`error : ${error}`);

            // Login failed
            if (error.response.status === 401) {
              setErrorMessage('Invalid credentials');
            } else {
              setErrorMessage('An error occurred');
            }
        }
      };
    
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit}  id = "login-form">
              <Form.Group className='mb-3'>
                <Form.Label>
                      Name:
                  </Form.Label>

                      <Form.Control
                      type="text"
                      name="username"

                      value={formData.username}
                      onChange={handleChange}
                      />
              </Form.Group>
              <Form.Group className='mb-3'>
                <label>
                      Password:
                  </label>

                    <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
              </Form.Group>
              <Form.Group className='text-center mb-3'>

                <label className="text-sm error-message">{errorMessage}</label>

                


              </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="submit" size="lg">Submit</Button>
                </div>
            </Form>
        </div>
        
      );
}