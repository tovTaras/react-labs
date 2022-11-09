import Select from "react-select";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const MoreOrLess = ({filterData, returnOfficialData}) => {

    const parameter = [{
        value: 'Parameter',
        label: 'Parameter'
    }, {
        value: 'calories',
        label: 'Calories'
    }, {
        value: 'price',
        label: 'Price'
    }]
    const options = [{value: 'Filter', label: 'Filter'}, {value: '>', label: '>'}, {value: '<', label: '<'}]

    const [param, setParam] = useState(() => "Parameter")
    const [opt, setOpt] = useState(() => "Filter")
    const [input, setInput] = useState(null)

    const parameterChange = (parameter) => {
        setParam(parameter.value);
    }
    const optionChange = (option) => {
        setOpt(option.value);
    }
    const returnData = () =>{
        filterData(param, opt, input)
    }

    return (
        <div style={{marginRight:"50px", display: "flex"}}>
            <Select
                onChange={parameterChange}
                value={parameter.find(x => x.value === param)}
                options={parameter}
            />
            <Select
                onChange={optionChange}
                style={{width: "50px"}}
                value={options.find(x => x.value === opt)}
                options={options}/>
            <Form.Control
                placeholder=" " style={{width: "80px", height:"36px"}}
                onChange={event => setInput(event.target.value)}/>
            <Button onClick={returnData} style={{backgroundColor: "white", color:"black",height:"36px", width:"100px"}}>Submit</Button>
            <Button onClick={returnOfficialData} style={{backgroundColor: "white", color:"black",height:"36px", width:"100px"}}>Cancel</Button>
        </div>
    );
}

export default MoreOrLess