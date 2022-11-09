
import style from "./HeaderList.module.css"
import ContentList from "./ContentList";
// import { ChangeEvent } from "react";
import InputForm from "./InputForm";
import { useState,useEffect } from "react";
import MoreOrLess from "./MoreOrLess";
import SortParameter from "./SortParameter";
import ReverseButton from "./ReverseButton";
import axios from "axios";
import {ClipLoader} from "react-spinners";

const HeaderList = ({cardData}) => {
    const [array, setArray] = useState(() => []);
    const [currentSortOrder, setCurrentSortOrder] = useState(() => 'asc')
    const [currentSortParameter, setCurrentSortParameter] = useState(() => 'Sort by...')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const getItems = (sortParameters, sortOrder) => {
        axios.get("http://127.0.0.1:5000/stravy?" + sortParameters + sortOrder)
            .then(result => {
                console.log(result.data)
                setArray(result.data)
            }).catch((error) => {
            console.log(error)
        })
        // setLoading(true)
    }

    useEffect(() => {
        getItems("parameter=Sort by...", "&order=asc")
    }, [])

    const inputReader = (event) => {
        const resultName = event.target.value;
        const filteredArray = array.filter(e => e.title.toLowerCase().includes(resultName.toLowerCase()));
        setArray(filteredArray)
        if (resultName === "") {
            setArray(cardData)
        }
    }
    const filterData = (param, option, input) => {
        returnOfficialData()
        let result = []
        if (param === "Parameter" || option === "Filter" || input === 0) {
            setArray(cardData)
        } else {
            if (option === ">") {
                result = cardData.filter(e => e[param] >= input)
            } else if (option === "<") {
                result = cardData.filter(e => e[param] <= input)
            }
        }
        
        setArray(result)
    }

    const returnOfficialData = () =>{
        setArray(cardData)
    }

    const reverseItems = () => {
        setCurrentSortOrder(currentSortOrder === "asc" ? "desc" : "asc")
        getItems("&parameter=" + currentSortParameter,
            "&order=" + (currentSortOrder === "asc" ? "desc" : "asc"))
    }

    const sortItems = (parameter) => {
        setCurrentSortParameter(parameter)
        getItems("&parameter=" + parameter, "&order=" + currentSortOrder)
    }

    return (
        <div className={style.big} >
            <div className={style.header}>
                <div className={style.listPageFilter}>
                    <div className={style.filter}>
                        <SortParameter sortItems = {sortItems} />
                        <ReverseButton reverse = {reverseItems} />
                        <MoreOrLess filterData={filterData} returnOfficialData={returnOfficialData}/>
                        <InputForm inputReader={inputReader} />
                    </div>
            </div>
            {
                loading ? <div className={style.clipLoader}>
                        <ClipLoader size={30} color={"#123abc"}/>
                    </div>
                    :<ContentList filteredData={array} />
            }
            </div>
        </div>

    );
}
export default HeaderList