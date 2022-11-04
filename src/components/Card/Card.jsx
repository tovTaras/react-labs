import cardData from "../Data/myData";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import MoreInfo from "../ListPage/StravaInfo/MoreInfo";
import { useState } from "react";

const Cards = (props) => {
    const [Visiable, setVisiable] = useState(false);

    return (
        <>
            <Card style={{ width: '17rem', backgroundImage: 'linear-gradient(to bottom right, rgb(141, 234, 84), rgb(135, 218, 84))', borderRadius: "20px" }}>
                <Card.Img variant="top" src={props.src} style={{ borderRadius: "20px", border: "5px solid white", height: "230px" }} />
                <Card.Body>
                    <Card.Title style={{ color: "white" }}>{props.title}</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                        {props.text}
                    </Card.Text>

                    <Button variant="success" onClick={() => setVisiable(!Visiable)} style={{ border: "1px solid white" }}>{!Visiable ? "Read more" : "Less info"}</Button>
                    {Visiable &&
                        <MoreInfo calories = {props.calories} ingredients ={props.ingredients} price = {props.price} />
                    }
                </Card.Body >
            </Card>
        </>
    );
}

export default Cards