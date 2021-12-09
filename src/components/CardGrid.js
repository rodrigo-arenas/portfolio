import React from "react";
import {Card, CardGroup, Button} from "react-bootstrap";
import "./CardGrid.css"

const CardGrid = (props) => {

    return (
        <CardGroup>
            {props.items.map((item) => (
                <Card className={"card-grid"} key={item.id}>
                    <Card.Img className={"card-img"} variant="bottom" src={item.image}/>
                    <Card.Body>
                        <Card.Title><strong>{item.title}</strong></Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary"
                                href={item.url}
                                target={item.target}
                                rel={"noopener noreferrer"}>
                            Learn More
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    )

}

export default CardGrid
