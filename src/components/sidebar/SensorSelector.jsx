import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';
import Dropdown from './SensorDropdown';

export default function SensorSelector() {
  let [sensorGroup, setSensorGroup] = useState({});

  return(
    <SelectorContainer>
      <BasicContainer>
        <div>** Groups PLACEHOLDER **</div>
      </BasicContainer>
      <VertSpacer />
      <BasicContainer expand>
        <Dropdown/>
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