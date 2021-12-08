import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "./DynamicTyping";
import About from "./About";
import homeConfig from "../../resources/configs/homeConfig";

import "./Home.css"

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row>
                    <Col className="home-header">
                        <div>
                            {homeConfig.greeting}
                    </div>
                        <div style={{textAlign: "center"}}>
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