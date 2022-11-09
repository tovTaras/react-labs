import {Button} from "react-bootstrap";

const ReverseButton = (props) => {
    return (
        <Button style={{marginRight: "20px"}} variant="light" onClick={props.reverse}>reverse</Button>
    )
};
export default ReverseButton