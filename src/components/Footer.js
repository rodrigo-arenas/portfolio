import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import FooterItems from "./FooterItems";
import "./Footer.css"

const Footer = () => {

    return (
        <Container fluid className={"footer"}>
            <Row>
                <Col className={"footer-body"}>
                    <FooterItems/>
                </Col>
            </Row>
        </Container>

    )

}

export default Footer