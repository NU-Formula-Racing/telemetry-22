import React, {Component} from 'react';
import Select from 'react-select';
import styled from "styled-components";

export default class SensorDropdown extends Component{
    constructor(props){
        super(props)
        // all available sensor options
        this.options = ExampleSensorsByGroups.map((e1) => (e1.group === this.props.selectedGroup ? e1.sensors.map((e2) => ({value: e2, label: e2})) : [])).flat();

    }

    componentDidUpdate(prevProps) {                                           
        if (prevProps.selectedGroup !== this.props.selectedGroup) {
            this.updateSelectedGroup(this.props.selectedGroup)
            this.updateOptions(this.props.selectedGroup)

        }
    }
    updateSelectedGroup(newSelectedGroup) {
        this.setState({selectedGroup: newSelectedGroup}) 
    }
    updateOptions(newSelectedGroup) {
        this.options = ExampleSensorsByGroups.map((e1) => (e1.group === newSelectedGroup? e1.sensors.map((e2) => ({value: e2, label: e2})) : [])).flat()

    }
    addSelected(value){
        if (value != null && -1 === this.props.selectedSensors.indexOf(value[0])){
          this.props.setCurrentSensors(this.props.selectedSensors.concat(value))
        }
    }

    
    removeSelected(e){
        let previous = this.props.selectedSensors
        this.props.setCurrentSensors(previous.filter((element) => element.label !== e.target.value))
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <Select
                closeMenuOnSelect={false}
                placeholder={"Select from " + this.props.selectedGroup + "..."}
                isMulti={true}
                options={this.options.filter((element) => (this.props.selectedSensors.every((e) => e.label !== element.label)))}
                value={this.props.selectedGroup}
                onChange={(e) => this.addSelected(e)}
                styles={{
                    multiValueLabel: (base) => ({
                      ...base,
                      width:'100px',
                      //height:'50px',
                      'font-size':'16px'
                    }),
                  }}
                />
                <SmallVertSpace/>
                {this.props.selectedSensors.map((e) => (<StyledButton onClick={e => this.removeSelected(e)}
                                                                      value={e.label}>
                                                          {e.label}
                                                        </StyledButton>))}
            </>



        )
    }
}

//{this.selected.map((x) => (<p>{x.label}</p>))}
let ExampleSensorsByGroups = [
    {group:"Saftey Sensors", sensors: ["Sensor A", "Sensor B", "Sensor C", "Sensor Q", "Sensor R", "Sensor S", "Sensor T", "Sensor U", "Sensor V"]},
    {group:"Chasis Sensors", sensors: ["Sensor D", "Sensor E", "Sensor F"]},
    {group:"Aero Sensors", sensors: ["Sensor G", "Sensor H", "Sensor I"]},
    {group:"Suspension Sensors", sensors: ["Sensor J", "Sensor K", "Sensor L"]},
    {group:"Powertrain Sensors", sensors: ["Sensor M", "Sensor N", "Sensor O"]}
  ];



let StyledButton = styled.button`
  width: 200px;
  height: 40px;
  font-size: 16px;
`
let SmallVertSpace = styled.div`
  height: 20px;
`