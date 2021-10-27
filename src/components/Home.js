import React from 'react'
import '../css/Home.css'
import {Link} from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col,Jumbotron,Container} from 'reactstrap';
import lappy from '../images/lappy.jpg'
import book from '../images/book.jpeg'
import laptop from '../images/laptop.jpg'
export default function Home() {
    return (
        <div>
            <div className="nav_bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/expiry">Services</Link></li>
                    <li><Link to="/">Courses</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
    <Row style={{marginTop: '50px'}}>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <img width="100%" src={book} alt="Card image cap" />
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button variant="contained" style={{backgroundColor: 'black'}}>Explore More</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <img width="100%" src={laptop} alt="Card image cap" />
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button variant="contained" style={{backgroundColor: 'black'}}>Explore More</Button>
        </Card>
      </Col>
    </Row>
    
    <Jumbotron fluid>
        <Container fluid>
            <div className="heading">
            <h1 className="lead" style={{fontWeight: '900',border: '4px solid black',padding: '20px',textAlign: 'justify',backgroundColor: "lightblue"}}>After the expiration date, you would need to pay and upgrade to the verified certificate track to regain access in this session, or enroll in a future session when the course is offered again.
            
Upgrading to the verified track will give you access to all materials, including graded assignments, until the course end date. Upgrading will not change or extend the course end date. You’ll still need to pass the course before it ends in order to earn a certificate.

After the course end date, as a verified learner, you will have access to archived course content and materials, as long it exists on edX. 

</h1>
            </div>
        
          <img src={lappy} alt="" style={{height: '400px',width: '100%'}}/>
          
        </Container>
      </Jumbotron>
    </div>
    )
}
