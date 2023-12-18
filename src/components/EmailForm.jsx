import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";


import { toast } from "react-toastify";




const EmailForm = () => {
    const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_2vfofau';
    const templateId = 'template_1mz6m5i';
    const publicKey = '2SD8863cnoH6-O6EQ';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Furnitureshopee',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        //console.log('Email sent successfully!', response);
        
        setName('');
        setEmail('');
        setMessage('');
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        //console.error('Error sending email:', error);
        toast.success(error.message);
      });
  }

  return <Helmet title="Contact Us">

<section>
        <Container>
          <Row>
          <Col lg="12" className="text-center">
          <h3 className="text-center mb-3">Contact Us</h3>

                <p className="home__subtitle">
                Got a question or need assistance? We're here for you! Contact us using the information below, and let's make your furniture dreams a reality. Your satisfaction is our top priority, and we can't wait to assist you in finding the perfect pieces for your home. Thanks for choosing Furnitureshopee—we're excited to hear from you!.</p>

            </Col>

          </Row>
        </Container>
      </section>
  <section>
      <container>

          <Row>
              {
                  loading ? <Col lg= '12' className='text-centre'><h5
                  className='fw-bold'>Loading........</h5></Col> :
                  <Col lg="6" className='m-auto text centre'>
                  <h3 className='fw-bold mb-1'> </h3>

                  <form  className='form__group' onSubmit={handleSubmit}>
                      <FormGroup className='form__group' >
                          <input type="text" placeholder='Your Name'
                          value={name}
                          onChange={(e) => setName(e.target.value)}/>
                      </FormGroup>
                      <FormGroup className='form__group' >
                          <input type="email" placeholder='Enter your Email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                      </FormGroup>
                      <Col lg="12" className='m-auto text centre'>
                      <h3 className='fw-bold mb-4'> </h3>
                      <textarea placeholder='    Enter your message 'lg="12" className='m-auto text centre' cols="45"
                      rows="10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      >

                      </textarea>
                      </Col>
                      
                      <button type="submit" className="buy__btn">
                          Send Email
                      </button>
                      
                      {/* <p>Don't have an account? <Link to="/Signup">Sign Up</Link>
                      </p>*/}
                  </form>
              </Col>
              }

          </Row>
      </container>


  </section>
</Helmet>
};

  {/*return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      >
      </textarea>
      <button type="submit">Send Email</button>
    </form>
  )
}
*/}

export default EmailForm
