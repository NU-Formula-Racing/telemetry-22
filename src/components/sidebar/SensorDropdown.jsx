import { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import styled from 'styled-components';


// https://wdeva22.medium.com/implement-multi-select-box-in-reactjs-6fa222ccd9f9

<<<<<<< HEAD:src/components/sidebar/SensorDropdown.jsx
export default function Dropdown() {
    const groups = [
        {group:"Saftey Sensors"},
        {group:"Chasis Sensors"},
        {group:"Aero Sensors"},
        {group:"Suspension Sensors"},
        {group:"Powertrain Sensors"}
     ]

     const style = {
         chips: {
             background: "Indigo",
             "font-size": "14px",
         },
         searchBox: {
             border: "none",  
         },
         inputField: {
            "font-size": "16px",
         }
     }



   const [options] = useState(groups);
   return (
        <div>
           <SmallVertSpacer/>
           <Multiselect placeholder="Select Sensor Group" options={options} style = {style} displayValue="group" avoidHighlightFirstOption = "true" showArrow = "true"/>
           <SmallVertSpacer/>
=======
export default function Dropdown(props) {
    const [options] = useState([
        {id:1,group:"Saftey Sensors"},
        {id:2,group:"Chasis Sensors"},
        {id:3,group:"Aero Sensors"},
        {id:4,group:"Suspension Sensors"},
        {id:5,group:"Powertrain Sensors"}
    ]);

    const onSelect = (selectedList) => {
        props.setSensorGroup(selectedList);
    }
    const onRemove = (selectedList) => {
        props.setSensorGroup(selectedList);
    }

    return (
        <div>
            <div>Select Sensor Group:</div>
            <SmallVertSpacer/>
            <Multiselect
                options={options}
                displayValue="group"
                onSelect={onSelect}
                onRemove={onRemove}
            />
            <SmallVertSpacer/>
>>>>>>> ba43ee8f0022edac1f6a8fdafac50017cff23a10:src/components/sidebar/Dropdown.jsx
        </div>
    );
};

const SmallVertSpacer = styled.div`
  height: 5px;
`;






















/* 
import { MultiSelect } from "@progress/kendo-react-dropdowns";  
import { useState } from "react";  



npm install --save @progress/kendo-react-dropdowns @progress/kendo-react-treeview 
@progress/kendo-react-animation @progress/kendo-react-intl @progress/kendo-react-data-tools 
@progress/kendo-react-common @progress/kendo-data-query @progress/kendo-react-buttons 
@progress/kendo-react-dateinputs @progress/kendo-react-inputs @progress/kendo-drawing
@progress/kendo-licensing @progress/kendo-theme-default 


const groups = [
    "Saftey Sensors",
    "Chasis Sensors",
    "Aero Sensors",
    "Suspension Sensors",
    "Powertrain Sensors"
];

export default function Dropdown(){
    const [selectedGroups, setSelectedGroups] = useState([]);  
    const onChange = event => setSelectedGroups([...event.value]);  

    return(
        <div>
            <MultiSelect data={groups} value={selectedGroups} onChange={onChange}/>
        </div>  
    );
};



*/