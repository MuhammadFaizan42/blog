import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'


const Footer = () => {
  return (

    <div className='bg-dark text-white'>
        <Container className=''>
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
            <Col className=''>
            <h6 className='text-white'>Quick Link</h6>
            <ul class="list-unstyled">
            <li>
              <a href="#!" className="text-decoration-none footer_text">Home</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">About</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text footer_text">Blog</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Archived</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Author</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Contact</a>
            </li>
          </ul>
            </Col>
            <Col className=''> 
            <h6 className='text-white'>Category</h6>
            <ul class="list-unstyled">
            <li>
              <a href="#!" className="text-decoration-none footer_text">Lifestyle</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Technology</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text footer_text">Travel</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Business</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Economy</a>
            </li>
            <li>
              <a href="#!" className="text-decoration-none footer_text">Sports</a>
            </li>
          </ul>
            </Col>
            <Col> 
            <Card  className='bg-dark text-white' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title className='footer_text'>Weekly Newsletter</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='footer_text'>Get blog articles and offers via email</Form.Label>
                      <Form.Control className='bg-dark text-white' type="email" placeholder="name@example.com" />
                    </Form.Group>
                  </Form>
                  <Button variant="primary" style={{ width: '16rem' }}>Subscribe</Button>
                </Card.Body>
            </Card>

            </Col>
        </Row>
        <Row>
        <Col> 
        <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" >
            <Navbar.Brand href="#home">
            <img src={Logo} alt="" />     
              </Navbar.Brand>
              <Nav className="m-auto">
                <Nav.Link href="#home">Terms of Use</Nav.Link>
                <Nav.Link href="#link">Privacy Policy</Nav.Link>
                <Nav.Link href="#link">Cookie Policy</Nav.Link>
              </Nav>
          </Navbar>
        </Col>
        </Row>
        </Container>
              
    </div>
          
    

  )
}

export default Footer