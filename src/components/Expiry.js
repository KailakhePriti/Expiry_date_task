import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
export default function Expiry() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <Jumbotron>
            <h1 className="display-3" style={{color: 'white'}}>Opps this course is expired..</h1>
            <p className="lead" style={{color: 'white'}}>After the expiration date, you would need to pay and upgrade to the verified certificate track to regain access in this session, or enroll in a future session when the course is offered again.</p>
            <hr className="my-2" />
            <p style={{color: 'white'}}>Upgrading to the verified track will give you access to all materials, including graded assignments, until the course end date. Upgrading will not change or extend the course end date. You’ll still need to pass the course before it ends in order to earn a certificate.</p>
            <p className="lead">
            <Button variant="contained" style={{backgroundColor: '#EE233D ',color: 'black',marginBottom: '20px'}}>Learn More</Button>
            </p>
        </Jumbotron>
        </div>
    )
}
