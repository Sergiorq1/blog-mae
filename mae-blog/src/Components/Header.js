import React from "react";
import './Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Header() {
    return (
            <div class="container-fluid">
                <Row>
                    <Col>
                        1 of 3
                    </Col>
                    <Col>
                        <Row>
                        <h1>
                            Expression <br/>Without Limits
                        </h1> 
                        <p>
                            Welcome Back, User12345
                        </p>
                        </Row>
                    </Col>
                    <Col>
                        3 of 3
                    </Col>
                </Row>
            </div>

    )
}

export default Header