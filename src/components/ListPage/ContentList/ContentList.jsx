import {Button, Carousel, Col, Container, Row} from "react-bootstrap";
import Cards from "../../Card/Card";
import  "./ContentList.css"

const ContentList = (props) =>{
    let stravy = props.filteredData.map(element => <Cards
        id = {element.id}
        src = {element.src}
        title={element.title}
        text={element.text}
        calories={element.calories}
        ingredients={element.ingredients}
        price ={element.price}/>)
    let threeElemData = []
    for (let i = 0; i < stravy.length; i += 3) {
        threeElemData.push(<Carousel.Item><Container><Row>{stravy.slice(i, i + 3).map(item => (
            <Col>{item}</Col>))} </Row></Container></Carousel.Item>);
    }
    return (
        <div>
            <Carousel interval = {null}>
                {threeElemData} 
            </Carousel>
        </div>
    )
}
export default ContentList
