import styled from 'styled-components';

import Number from "./Number";

export default function Numbers(props) {
  return(
    <NumberTray>
      {props.sensors.map((_,i) =>{
        let val = Math.random();
        return(
          <Number
            value={val*30}
            percentage={val}
            unit={'m/s'}
            label={'Wheel Speed'}
            key={i}
          />  
        )
      })}
    </NumberTray>
  );
}

const NumberTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: -12px;
  > * {
    margin-top: 12px;
  }
`;