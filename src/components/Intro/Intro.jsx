import style from "./Intro.module.css"
import {Button} from "react-bootstrap";
import Cards from "./Card/Card";


const Intro = () => {
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
                    <Cards
                        src="https://www.simplyrecipes.com/thmb/j1WtO-KNzo7D7e3j5skU2CIQGk4=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__09__caesar-salad-horiz-a-1800-4a465eb53456465091e34138675259c2.jpg"
                        title="Ceasar salad"
                        text="One of the tastiest and most famous salad in the world, make it quick and easy..."/>
                    <Cards
                        src="https://www.simplyrecipes.com/thmb/au60mVTA5EPLLknjdtQ9BYO0OC4=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg"
                        title="Greek salad"
                        text="One of the oldest salads in the world, it looks as good as i tastes, recipe and history of this sald..."/>
                    <Cards
                        src="https://img.taste.com.au/IMskOnHw/taste/2016/11/asian-style-chopped-salad-83466-1.jpeg"
                        title="Asian-styled slaw"
                        text="Quick and easy to make asian salad, quite filling and tasty as well... "/>
                    <Cards
                        src="https://www.milkandhoneynutrition.com/wp-content/uploads/2020/02/Heart-Healthy-Blueberry-Apple-Salad.jpeg"
                        title="Fuji-apple salad"
                        text="Salad that make your tongue combine sweet and sour in a perfact mix, of new feelings... "/>                
                </div>
                <div className={style.buttom}>
                    <Button variant="success" className={style.viewmore}>VIEW ALL</Button>
                </div>
            </div>
        </div>
    );
}
export default Intro