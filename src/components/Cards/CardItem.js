import CardIcons from "./CardIcons";
import "./CardItem.css"

const CardItem = (props) => {
    let mainUrl = "#/"

    if (props.item.article !== "" && props.item.hasOwnProperty("article")) {
        mainUrl = props.item.article
    } else if (props.item.github !== "" && props.item.hasOwnProperty("github")) {
        mainUrl = props.item.github
    }

    return (

        <div className={"card"} key={props.item.id}>
            <a style={{display: "flex"}} href={mainUrl}>
                <img src={props.item.image} className="card__img" alt={props.item.title}/>
            </a>
            <div className={"card__body"}>
                <h2 className={"card__title"}><strong>{props.item.title}</strong></h2>
                <p className={"card__description"}>{props.item.description}</p>
                <hr className={"card__line"}/>
                <CardIcons item={props.item}/>
            </div>
        </div>


    );
}

export default CardItem