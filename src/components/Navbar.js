import React, { setState } from 'react'
import { Link } from 'gatsby'
import { Navbar as Nav, Container, Col, Row} from 'react-bootstrap'


const Navbar = () => {
  
  return (
  <Nav className="header-nav" variant="dark">
    <Container className="justify-content-center header-nav" fluid>
      <Row>
        <Col md={12}>
          <h1 className="title">Hannah Stone Music</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to='/music'>
            Music
          </Link>
        </Col>

        <Col>
          <Link to='/about'>
            About
          </Link>
        </Col>
        <Col>
          <Link to='/contact'>
            Contact
          </Link>
        </Col>
      </Row>
    </Container>
  </Nav>
)}

export default Navbar
