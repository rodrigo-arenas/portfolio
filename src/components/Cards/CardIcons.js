import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import {SiMedium} from "react-icons/si";
import "./CardItem.css"

const CardIcons = (props) => {
    const hasGithub = (props.item.github !== ""  && props.item.hasOwnProperty( "github"))
    return (

    <ul className={"card__footer"}>
        <li key={props.item.id + "git"}>
            {hasGithub ?
            <a className={"card__btn"}
               href={props.item.github}
               target={props.item.target}
               rel={"noopener noreferrer"}>
                <AiFillGithub/>
            </a>:
            <div className={"card__btn_empty"}/>
            }

        </li>
        <li key={props.item.id +"fork"}>
            {hasGithub ?
            <a className={"card__btn"}
               href={props.item.github + "/fork"}
               target={props.item.target}
               rel={"noopener noreferrer"}>
                <BiGitRepoForked/>
            </a>:
            <div className={"card__btn_empty"}/>
        }
        </li>
        <li key={props.item.id +"watch"}>
            {hasGithub ?
                <a className={"card__btn"}
                   href={props.item.github + "/subscription"}
                   target={props.item.target}
                   rel={"noopener noreferrer"}>
                    <AiFillEye/>
                </a>:
                <div className={"card__btn_empty"}/>
            }
        </li>
        <li key={props.item.id +"docs"}>
            {props.item.documentation !== "" && props.item.hasOwnProperty("documentation")?
                <a className={"card__btn"}
                   href={props.item.documentation}
                   target={props.item.target}
                   rel={"noopener noreferrer"}>
                    <ImBook/>
                </a>:
                <div className={"card__btn_empty"}/>
            }
        </li>
        <li key={props.item.id +"article"}>
            {props.item.article !== "" && props.item.hasOwnProperty("article")?
                <a className={"card__btn"}
                   href={props.item.article}
                   target={props.item.target}
                   rel={"noopener noreferrer"}>
                    <SiMedium/>
                </a>:
                <div className={"card__btn_empty"}/>
            }
        </li>
    </ul>
)

}

export default CardIcons