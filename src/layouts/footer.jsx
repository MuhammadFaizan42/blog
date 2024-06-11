import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (

    <div className='bg-dark text-white'>
        <Container>
          <Row>
            <Col> 
            <h6> About</h6>
            <p className='footer_text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis cupiditate animi neque pariatur modi ullam, vol</p>
            <h6 className='text-white'> Email:
              <small className='footer_text'>Info@gmail.com</small>
            </h6>
            <h6 className='text-white'> Phone:
              <small className='footer_text'>880 123 456 789</small>
            </h6>
             </Col>
            <Col> 
            <ul className="navbar-nav m-auto">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul> 
            </Col>
            <Col> 3 </Col>
            <Col> 4 </Col>
        </Row>
        <Row>
        <Col> 2 </Col>
        </Row>
        </Container>
              
    </div>
          
    

  )
}

export default Footer