import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from './components/HomePage/Intro';
import cardData from "./components/Data/myData";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from './components/ListPage/ListPage';


function App(props) {
	return (
		<BrowserRouter>
				<div className="app">
					<Header/>
						<Routes>
						<Route path='/home' element={<Intro cardData = {cardData}/>}/>
                        <Route path="/list" element={<ListPage cardData = {cardData}/>}/>
						</Routes>
					<Footer/>
				</div>
			
		</BrowserRouter>
	);
}

export default App;
