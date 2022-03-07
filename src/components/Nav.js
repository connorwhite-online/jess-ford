import React from 'react'
import 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

import { Link, Links } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Link className="navLink" to="/About">About</Link>
            <Link className="navLink" to="/Services">Services</Link>
            <Link className="navLink" to="/Testimonials">Testimonials</Link>
            <Link className="navLink" to="/Contact">Contact</Link>
          </Col>
          <Col>
            <Link to="/"><h1 className="title">JESS FORD CARE</h1></Link>
          </Col>
        </Row>  
      </Container> 
    </div>
  )
}

