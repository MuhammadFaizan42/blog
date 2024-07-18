import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" >
    <Container >
      <Navbar.Brand href="#home">
      <img src={Logo} alt="" />     
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <Nav.Link href="#link">Single Post</Nav.Link>
          <Nav.Link href="/page">Pages</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header