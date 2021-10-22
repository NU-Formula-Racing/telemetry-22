import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';
import Dropdown from './Dropdown';

export default function SensorSelector() {
  return(
    <SelectorContainer>
      <BasicContainer>
        <Dropdown/>
      </BasicContainer>
      <VertSpacer />
      <BasicContainer expand>
        <div>** SENSORS PLACEHOLDER **</div>
      </BasicContainer>
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