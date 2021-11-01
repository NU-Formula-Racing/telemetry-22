import styled from 'styled-components';

import Number from "./Number";

export default function Numbers() {
  let data = new Array(11).fill(null).map((_,i) =>
    <Number
      value={Math.random()*30}
      percentage={Math.random()}
      unit={'m/s'}
      label={'Wheel Speed'}
      key={i}
    />
  );

  return(
    <NumberTray>
      {data}
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