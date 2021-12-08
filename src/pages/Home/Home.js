import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "./DynamicTyping";
import About from "./About";
import configData from "../../resources/configData";

import "./Home.css"

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row>
                    <Col className="home-header">
                        <div>
                            {configData.home.greeting}
                    </div>
                        <div style={{padding: 50, textAlign: "left"}}>
                            <DynamicTyping/>
                        </div>
                        <div>
                            <About/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>)

}

export default Home