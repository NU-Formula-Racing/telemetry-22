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
<<<<<<< HEAD
             {ExampleGroups.map((e, i) => 
=======
              {ExampleGroups.map((e, i) => 
>>>>>>> searchbar
                (<StyledOption key={i}>{e.group}</StyledOption>))}
            </StyledSelect>
        </>
    )
}

// update so that the selector fills the container
export const StyledSelect = styled.select`
<<<<<<< HEAD
    width: 220px;
    height: 30px;
    font-size: 14px;
    font-family: 'Open Sans';
    cursor: pointer;
`;
export const StyledOption = styled.option`
    font-size: 14px;
    cursor: pointer;
=======
    width: 200px;
    height: 30px;
`;
export const StyledOption = styled.option`
    font-size: 14px;
>>>>>>> searchbar
`;

export const SmallVerticalSpacer = styled.div`
    height: 10px;
`;

let ExampleGroups = [
<<<<<<< HEAD
    {id: 1, group:"Safety Sensors"},
=======
    {id: 1, group:"Saftey Sensors"},
>>>>>>> searchbar
    {id: 2, group:"Chasis Sensors"},
    {id: 3, group:"Aero Sensors"},
    {id: 4, group:"Suspension Sensors"},
    {id: 5, group:"Powertrain Sensors"}
];