import React from 'react';
import styled from 'styled-components';



export default function GroupDropDown(props){

    const handleOption = (i) => {
        props.setSelectedGroup(i.target.value)
    }


    
    return (
        <>
            <StyledSelect onChange={handleOption}>
              <option value="">Select Sensor Group</option>
              {ExampleGroups.map((e, i) => 
                (<option>{e.group}</option>))}
            </StyledSelect>
        </>
    )
}

// update so that the selector fills the container
export const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
`;



let ExampleGroups = [
    {id: 1, group:"Saftey Sensors"},
    {id: 2, group:"Chasis Sensors"},
    {id: 3, group:"Aero Sensors"},
    {id: 4, group:"Suspension Sensors"},
    {id: 5, group:"Powertrain Sensors"}
  ];



  const DropDownButton = styled.button`
  background: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  width: 200px;
  border: 0px;
  `;
