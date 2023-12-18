import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../styles/home.css";
import Privacyp from '../assets/images/Privacypolicy.jpeg';
import "../styles/home.css";

const Privacy = () => {

    return (
<Container className="p_container">

<div className="Privacy">
   <img src={Privacyp} alt="Privacy_policy" />
</div>
                
               <div >
                <p > 
<strong>We collect personal information from you, including information about your: </strong></p>
<p>name</p>
<p>contact information</p>
 
<p><strong>We collect your personal information in order to:</strong></p>
<p>to Reach prospect clients with the latest promotions</p>
 <p>
 
You have the right to ask for a copy of any personal information we hold about you,
and to ask for it to be corrected if you think it is wrong. 
If you’d like to ask for a copy of your information, or to have it corrected, 
please contact us at , or 022 063 7040, or shop C2, 459 Rose, Common Rd, Clendon Park, Auckland, 2103.
                        </p>
                        </div>
                
                </Container>

   
    )
};
export default Privacy