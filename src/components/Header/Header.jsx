import style from "./Header.module.css"
import App from "../../App";

const Header = () => {
	return (
		<div className={style.header_body}>
			<div className={style.header}>
				<div className={style.header_section}>
					<div><a className={style.item}>Home</a></div>
					<div><a className={style.item}>List</a></div>
					<div><a className={style.item}>Card</a></div>
				</div>
			</div>
		</div>
	);
}

export default Header
