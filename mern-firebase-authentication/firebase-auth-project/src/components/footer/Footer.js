import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
            return(
                <footer className="bg-dark text-white py-2">
                    <Container>
                        <Row className="align-items-center">
                            <Col className="text-center  ">
                             <p className="mb-0"> &copy;  {new Date().getFullYear()} Fixware Academy</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            )
}

export default Footer;