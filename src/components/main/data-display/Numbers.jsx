import styled from 'styled-components';

import Number from './Number';


export default function Numbers(props) {
  return(
    <NumberTray className="numbers">
      {props.sensors.map((e, index) => {
        let val = Math.random();
        return (
          <Number
            value={val*30}
            percentage={val}
            unit={'m/s'}
            label={e.label}
            key={index}
          />
        );
      })}
    </NumberTray>
  );
}

const NumberTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: -12px;
  > * {
    margin-top: 12px;
  }
`;