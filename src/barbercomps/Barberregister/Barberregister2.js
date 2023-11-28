import React from 'react'
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
];

const Barberregister2 = ({ selected, setSelected }) => {


    return (
        <div className="col-md-3">
            <div style={{ color: "White" }}>
                <label htmlFor="workinghours" className="d-flex form-label text-light">Select Working Days</label>
                <div style={{ color: "Black" }}>
                    <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                    />
                </div>
            </div>
        </div>
    );
};



export default Barberregister2