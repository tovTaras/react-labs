import style from "./Footer.module.css"

const Footer = () =>{
    return(
        <div className={style.footer}>
            <div className={style.name}>Kinethic Kitchen</div>
            <div className={style.social}>
                <a><img className={style.soc} src="https://img.icons8.com/material/480/instagram-new--v1.png"/></a>
                <a><img className={style.soc} src="https://img.icons8.com/material-two-tone/452/facebook-f--v2.png"/></a>
            </div>
            <div className={style.Copyright}>Taste better, make quicker</div>
        </div>
    );
}
export default Footer