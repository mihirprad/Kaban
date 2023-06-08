import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Login.css'
export default function Login(props){
    const [formData, setFormData] = useState({
        name: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();



        try {
          const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          const data = await response.json();
          // Handle the response data
          console.log(data);
          // Reset the form
          setFormData({
            name: '',
            password: ''
          });
        } catch (error) {
          // Handle any errors
          console.error(error);
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
                      name="name"
                      value={formData.name}
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
                
                <div className="d-grid gap-2">
                  <Button type="submit" size="lg">Submit</Button>
                </div>
            </Form>
        </div>
        
      );
}