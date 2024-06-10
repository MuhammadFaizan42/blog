import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className='Container bg-dark'>
        <Row>
            <Col> 
            <h4>About us</h4>
            <p className='footer_text ms-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam </p>
             </Col>
            <Col> <h4>Quick Link </h4> </Col>
            <Col> <h4>Category </h4> </Col>
            <Col>News Letter</Col>
        </Row>


    </div>
  )
}

export default Footer