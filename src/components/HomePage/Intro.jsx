import style from "./Intro.module.css"
import {Button} from "react-bootstrap";
import Cards from "../Card/Card";
import { NavLink } from "react-router-dom";


const Intro = (props) => {
    let cardDataFour = props.cardData.slice(0,4);
    let strava = cardDataFour.map(element => <Cards
        id = {element.id}
        src = {element.src}
        title={element.title}
        text={element.text}/>)
    return (
        <div className={style.intro}>
            <div className={style.introduction}>
                <div>
                    <img className={style.photo} src="https://images-platform.99static.com//9amOdOybMhbWjr51zRtuSJWw-w0=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/59/59518/attachment_59518066"/>
                </div>
                <div className={style.text}>
                    <h1 className={style.title}>Your Kitchen</h1>
                    <p className={style.paragraph}>Your kitchen is a perfect solution for everyone whose in hand of cooking tooday. Here you can find tasy recipes in about 5 minutes</p>
                </div>
            </div>

            <div className={style.content}>
                <div className={style.card}>
                    {strava}
                </div>
                <div className={style.buttom}>
                    <NavLink to ={"/list"}><Button variant="success" className={style.viewmore}>VIEW ALL</Button></NavLink>
                </div>
            </div>
        </div>
    );
}
export default Intro