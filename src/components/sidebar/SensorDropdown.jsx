import React, {Component} from 'react';
import styled from 'styled-components';
import Select from 'react-select'


// https://wdeva22.medium.com/implement-multi-select-box-in-reactjs-6fa222ccd9f9

export default class SensorDropdown extends Component{
    constructor(props){
        super(props)
        // the current selected drop down group
        this.state = {selectedGroup: this.props.selectedGroup}
        // all available sensor options
        this.options = []
        // only sensors selected by user from available options
        this.selected = []
    }

    componentDidUpdate(prevProps) {                                           
        if (prevProps.selectedGroup !== this.props.selectedGroup) {
            this.updateSelectedGroup(this.props.selectedGroup)
            this.updateOptions(this.props.selectedGroup)
            this.selected = []
        }
    }
    updateSelectedGroup(newSelectedGroup) {
        this.setState({selectedGroup: newSelectedGroup}) 
    }
    updateOptions(newSelectedGroup) {
        this.options = ExampleSensorsByGroups.map((e1) => (e1.group === newSelectedGroup? e1.sensors.map((e2) => ({value: e2, label: e2})) : [])).flat()
        console.log(this.options)
    }
    updateSelected(values){
        this.selected = values
    }

    render() {
        return (

            <>
                <Select
                placeholder={"Select " + this.props.selectedGroup + "..."}
                isMulti={true}
                options={this.options}
                onChange={(x) => this.updateSelected(x)}
                />
                {this.selected.map((x) => (<p>{x.label}</p>))}
            </>



        )
    }
}

//ExampleSensorsByGroups.map((e1) => (e1.group === newSelectedGroup? e1.sensors.map((e2) => ({sensor: e2})) : []))
//THis styles the multiselect
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

let ExampleSensorsByGroups = [
    {group:"Saftey Sensors", sensors: ["Sensor A", "Sensor B", "Sensor C", "Sensor Q", "Sensor R", "Sensor S", "Sensor T", "Sensor U", "Sensor V"]},
    {group:"Chasis Sensors", sensors: ["Sensor D", "Sensor E", "Sensor F"]},
    {group:"Aero Sensors", sensors: ["Sensor G", "Sensor H", "Sensor I"]},
    {group:"Suspension Sensors", sensors: ["Sensor J", "Sensor K", "Sensor L"]},
    {group:"Powertrain Sensors", sensors: ["Sensor M", "Sensor N", "Sensor O"]}
  ];
