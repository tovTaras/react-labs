import {useState} from "react";
import Select from "react-select";

const SortParameter = (props) => {
    const options =
        [
            {
                value: 'Sort by..',
                label: 'Sort by..'

            },
            {
                value: 'calories',
                label: 'calories'
            },
            {
                value: 'price',
                label: 'price'
            }
        ]
    const [parameter, setParameter] = useState(() => "Sort by..")

    const parameterChange = (parameter) => {
        setParameter(parameter.value);
        props.sortItems(parameter.value)
    }
    return (
        <Select
            value={options.find(x => x.value === parameter)}
            onChange={parameterChange}
            options={options}/>
    )
};

export default SortParameter