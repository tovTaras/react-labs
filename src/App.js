import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from './components/HomePage/Intro';
import { useState, useEffect } from 'react';
// import cardData from "./components/Data/myData";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from './components/ListPage/ListPage';
import axios from "axios"


function App(props) {
	const [array, setArray] = useState(() => []);
    const [allItemsMap, setAllItemsMap] = useState(() => {
        return {}
    })

    const getItems = () => {
        axios.get("http://127.0.0.1:5000/stravy")
            .then(res => {
                const allItems = res.data
                setArray(allItems)
                for (const item of allItems) {
                    setAllItemsMap(prev => {
                        let tmp = prev
                        tmp[item.id] = item
                        return tmp
                    })
                }
            })
    }

    useEffect(() => {
        getItems()
    }, [])
	return (
		<BrowserRouter>
				<div className="app">
					<Header/>
						<Routes>
						<Route path='/home' element={<Intro cardData = {array}/>}/>
                        <Route path="/list" element={<ListPage cardData = {array}/>}/>
						</Routes>
					<Footer/>
				</div>
			
		</BrowserRouter>
	);
}

export default App;
