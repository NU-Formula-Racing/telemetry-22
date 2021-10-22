import { MultiSelect } from "@progress/kendo-react-dropdowns";  
import { useState } from "react";  


/*
npm install --save @progress/kendo-react-dropdowns @progress/kendo-react-treeview 
@progress/kendo-react-animation @progress/kendo-react-intl @progress/kendo-react-data-tools 
@progress/kendo-react-common @progress/kendo-data-query @progress/kendo-react-buttons 
@progress/kendo-react-dateinputs @progress/kendo-react-inputs @progress/kendo-drawing
@progress/kendo-licensing @progress/kendo-theme-default 
*/

const groups = [
    "Saftey Sensors",
    "Chasis Sensors",
    "Aero Sensors",
    "Suspension Sensors",
    "Powertrain Sensors"
];

export default function Dropdown(){
    const [selectedTags, setSelectedTags] = useState([]);  
    const onChange = event => setSelectedTags([...event.value]);  

    return(
        <div>
            <MultiSelect data={groups} value={selectedTags} onChange={onChange}/>
        </div>  
    );
};