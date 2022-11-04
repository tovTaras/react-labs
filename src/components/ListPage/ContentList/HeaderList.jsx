import { Form } from "react-bootstrap"
import style from "./HeaderList.module.css"
import ContentList from "./ContentList";
// import { ChangeEvent } from "react";
import InputForm from "./InputForm";
import { useState } from "react";
import MoreOrLess from "./MoreOrLess";


const HeaderList = ({cardData}) => {
    const [array, setFilter] = useState(cardData);
    const inputReader = (event) => {
        const resultName = event.target.value;
        const filteredArray = array.filter(e => e.title.toLowerCase().includes(resultName.toLowerCase()));
        setFilter(filteredArray)
        if (resultName === "") {
            setFilter(cardData)
        }
    }
    const filterData = (param, option, input) => {
        returnOfficialData()
        console.log(param, option, input,array)
        let result = []
        if (param === "Parameter" || option === "Filter" || input === 0) {
            setFilter(cardData)
        } else {
            if (option === ">") {
                result = cardData.filter(e => e[param] >= input)
            } else if (option === "<") {
                result = cardData.filter(e => e[param] <= input)
            }
        }
        debugger;
        console.log(result)
        setFilter(result)
        console.log(array)
    }

    const returnOfficialData = () =>{
        setFilter(cardData)
    }

    return (
        <div className={style.big} >
            <div className={style.header}>
                <div className={style.listPageFilter}>
                    <div className={style.filter}>
                        <MoreOrLess filterData={filterData} returnOfficialData={returnOfficialData}/>
                        <InputForm inputReader={inputReader} />
                    </div>

                
                <div className={style.inputSearch}>

                    
                </div>
            </div>



                <ContentList cardData={array} />
            
            </div>
        </div>

    );
}
export default HeaderList