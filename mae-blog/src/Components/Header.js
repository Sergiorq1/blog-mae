import React, { useEffect, useState } from "react";
import './Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}


function Header() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);

    return (
            <div class="container-fluid">
                <Row>
                    <Col>
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
                        <Row>
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Loading…' : 'Click to load'}
                        </Button>
                            <p>
                                or
                            </p>
                        <Button
                            variant="primary"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}>
                            {isLoading ? 'Loading…' : 'Click to load'}
                        </Button>
                        </Row>
                    </Col>
                </Row>
            </div>

    )
}

export default Header