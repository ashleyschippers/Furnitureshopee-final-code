
import React from 'react';
import "../styles/home.css";
import { Container, Row} from 'reactstrap';

import finance from '../assets/images/Finance Options.jpg';

const Paymentpage = () => {
  return (
    <Container className="Payment_options">
  <Row>     
                        <div className="hero__img">
                            <img src={finance} alt="hero" />
                        </div>
                       
            </Row>
            <Row>ß
      <h1>Finance Now: Quick and Easy Finance</h1>
      <p>
        Finance Now makes it easy to secure personal finance to buy the fancy
        furniture you want.
      </p>

      <h2>Why choose Finance Now?</h2>
      <ul>
        <li>No deposit finance available</li>
        <li>Flexible payment terms from 6 to 36 months</li>
        <li>Enjoy Payment Holidays up to 12 months</li>
        <li>Instant online finance available (in-store only, but will be available online soon)</li>
        <li>Competitive interest rates and fees</li>
      </ul>

      <h2>Initial Application Criteria</h2>
      <ul>
        <li>Minimum order of $500</li>
        <li>You must be a NZ Citizen/Resident and currently living in New Zealand</li>
        <li>You must be older than 18 years of age</li>
        <li>Proof of identity by means of a photo identification document (NZ Drivers Licence or NZ Passport)</li>
        <li>Finance Now lending criteria apply</li>
      </ul>

      <h2>All Finance contracts incur:</h2>
      <ul>
        <li>Establish Fee: $55.00</li>
        <li>Interest Rate: 19.75%</li>
        <li>Monthly Account Fee: $1.80/month</li>
        <li>Consumer Protection Insurance Premium (Optional)</li>
      </ul>

      <h2>How to apply?</h2>
      <p>
        <strong>Instore Application:</strong> Come to any of our stores, choose items you want to buy, and ask our staff to place an order. Our staff will fill in an online application form to Finance Now together with you. If you meet the criteria of Finance Now, the application will be approved in seconds.
      </p>
      <p>
        <strong>Apply Online:</strong> Yes, you can apply online before visiting us.
      </p>
  
    
      </Row>
      </Container>
  );
};

export default Paymentpage;
