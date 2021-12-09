import CardIcons from "./CardIcons";
import "./CardItem.css"

const CardItem = (props) => {

    return (
        <div className={"card"} key={props.item.id}>
            <img src={props.item.image} className="card__img" alt={props.item.title}/>
            <div className={"card__body"}>
                <h2 className={"card__title"}><strong>{props.item.title}</strong></h2>
                <p className={"card__description"}>{props.item.description}</p>
                <CardIcons item={props.item}/>
            </div>
        </div>
    );
}

export default CardItem