import React from 'react';
import { Col, Row, Container } from "react-bootstrap"
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <Container >
                    <Row>
                        <Col>
                            <h3>Thông tin liên hệ</h3>
                        </Col>
                        <Col>
                            <h3>Gioi thiệu</h3>
                        </Col>
                        <Col>
                            <h3>Liên hệ</h3>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </div>
    );
};

export default Footer;