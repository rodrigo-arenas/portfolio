import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import projectConfig from "../resources/configs/projectConfig"

const Projects = () => {
    return (
        <div className="wrapper">
            {projectConfig.map((item) => (
                <CardItem item={item}/>
                )
            )}
        </div>)
}

export default Projects