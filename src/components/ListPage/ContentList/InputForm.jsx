import {Form} from "react-bootstrap"

const InputForm =({inputReader}) => {
    return(
    <div>
        <Form.Control onChange={inputReader} type="text" placeholder="Пошук.." style={{width: "200px",  marginBottom:"50px"}}/>
    </div>
    )
}
export default InputForm