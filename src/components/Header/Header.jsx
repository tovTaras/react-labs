import style from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className={style.header_body}>
			<div className={style.header}>
				<div className={style.header_section}>
					<div><NavLink to = "/home" className={style.item}>Home</NavLink></div>
					<div><NavLink to ="/list" className={style.item}>List</NavLink></div>
					{/* <div><a className={style.item}>Card</a></div> */}
				</div>
			</div>
		</div>
	);
}

export default Header
