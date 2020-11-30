import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import { FaTwitter as Twitter, FaSpotify as Spotify, FaInstagram as Instagram, FaGooglePlay as GooglePlay } from 'react-icons/fa'
import { SiApplemusic as AppleMusic } from 'react-icons/si'
import { Container, Col, Row, Navbar} from 'react-bootstrap'


const Footer = class extends React.Component {
  render() {
    return (


    <Navbar fixed="bottom" className="footer-nav">
      <Container>
        <Row>
          <Col>
              <a title="spotify" href="https://spotify.com">
                <Spotify />
              </a>
          </Col>
          <Col>
            <a title="applemusic" href="https://music.apple.com">
              <AppleMusic />
            </a>
          </Col>
          <Col>
            <a title="googleplay" href="https://play.google.com">
              <GooglePlay />
            </a>
          </Col>
          <Col>
            <a title="instagram" href="https://instagram.com">
              <Instagram />
            </a>
          </Col>
          <Col>
            <a title="twitter" href="https://twitter.com">
              <Twitter />
            </a>
          </Col>
        </Row>
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright <a href="https://mdbootstrap.com/">Hannah Stone</a>
        </div>
      </Container>


    </Navbar>
    )
  }
}

export default Footer
