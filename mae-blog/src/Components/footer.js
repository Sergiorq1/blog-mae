import React from "react";
import './Footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <div class="container-footer">
            <Row>
                <Col className="footer-logo">
                    <img src="Sample-cloud.png" alt=""></img>
                </Col>
                <Col className="text-footer">
                    <Row className="footer-text">
                    <h3>Community</h3>
                    <p>Github</p>
                    <p>Twitter</p>
                    </Row>
                </Col>
                <Col className="text-footer">
                    <Row className="footer-text">
                    <h3>Help</h3>
                    <p>Contact Us</p>
                    </Row>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            
        </div>
    )
}

export default Footer;