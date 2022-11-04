import HeaderList from "./ContentList/HeaderList"
import MoreInfo from "./StravaInfo/MoreInfo"

const ListPage = (props) => {

    return (
        <div>
            <HeaderList cardData={props.cardData} />
           

        </div>

    )
}
export default ListPage