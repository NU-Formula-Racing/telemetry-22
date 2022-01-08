import React from 'react';
import styled from 'styled-components';



export default function GroupDropDown(props){

    const handleOption = (i) => {
        props.setSelectedGroup(i.target.value)
    }
 
    return (
        <>
            <>Select Sensor Group:</>
            <SmallVerticalSpacer></SmallVerticalSpacer>
            <StyledSelect onChange={handleOption}>
              {ExampleGroups.map((e, i) => 
                (<StyledOption key={i}>{e.group}</StyledOption>))}
            </StyledSelect>
        </>
    )
}

// update so that the selector fills the container
export const StyledSelect = styled.select`
    width: 200px;
    height: 30px;
`;
export const StyledOption = styled.option`
    font-size: 14px;
`;

export const SmallVerticalSpacer = styled.div`
    height: 10px;
`;

let ExampleGroups = [
    {id: 1, group:"Safety Sensors"},
    {id: 2, group:"Chasis Sensors"},
    {id: 3, group:"Aero Sensors"},
    {id: 4, group:"Suspension Sensors"},
    {id: 5, group:"Powertrain Sensors"}
];