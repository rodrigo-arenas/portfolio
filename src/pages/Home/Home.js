import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";

import "./Home.css"

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row>
                    <Col className="home-header" style={{textAlign: "center"}}>
                        <div>
                            {homeConfig.greeting}
                        </div>
                        <div style={{textAlign: "center"}}>
                            <DynamicTyping titles={homeConfig.titles}/>
                        </div>
                        <div>
                            <About about={homeConfig.about}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="resume-content" id="resume">
                <div className="col-md-8 mx-auto">
                    <Timeline items={homeConfig.workTimeline}/>
                </div>
            </Container>
        </section>)

}

export default Home