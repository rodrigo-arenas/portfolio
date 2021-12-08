import SkillsItems from "./SkillsItems";
import skillsConfig from "../../resources/configs/skillsConfig";
import "./Skills.css"

const Skills = () => {
    return (
        <section id="skills">
            <div>
            <div className="skills-div">
                <h1 className="skills-h1">
                    <span className="main-skills">Main Skills</span>
                </h1>
                <div className="main-skills">
                    <SkillsItems config={skillsConfig.mainSkills}/>
                </div>
                <h1 className="skills-h1">
                    <span className="main-skills">Complementary Skills</span>
                </h1>
                <div className="complementary-skills">
                    <SkillsItems config={skillsConfig.complementarySkills}/>
                </div>
            </div>
            </div>
        </section>
    )

}
export default Skills