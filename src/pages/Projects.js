import {Container} from "react-bootstrap";
import CardGrid from "../components/CardGrid";
import projectConfig from "../resources/configs/projectConfig"

const Projects = () => {
    return (
        <section>
            <Container fluid className="project-section" id="projects">
                <CardGrid items={projectConfig}/>
            </Container>
        </section>)
}

export default Projects