import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';
import Dropdown from './Dropdown';

export default function SensorSelector() {
  let [sensorGroup, setSensorGroup] = useState({});

  return(
    <SelectorContainer>
      <BasicContainer>
        <Dropdown setSensorGroup={(next) => setSensorGroup(next)} />
      </BasicContainer>
      <VertSpacer />
      <BasicContainer expand>
        <div>** SENSORS PLACEHOLDER **</div>{/* pass sensors sensorGroup */}
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