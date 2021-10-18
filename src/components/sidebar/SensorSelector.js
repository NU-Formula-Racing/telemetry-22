import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';

export default function SensorSelector() {
  return(
    <SelectorContainer>
      <BasicContainer content={
        <div>** DROPDOWN PLACEHOLDER **</div>
      }/>
      <VertSpacer />
      <BasicContainer expand content={
        <div>** SENSORS PLACEHOLDER **</div>
      }/>
    </SelectorContainer>
  );
}

const SelectorContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;