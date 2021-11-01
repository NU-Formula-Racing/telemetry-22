import { useState } from 'react';
import styled from 'styled-components';

import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';
import SensorDropdown from './SensorDropdown';
import GroupDropDown from './GroupDropDown';

export default function SensorSelector() {
  let [selectedGroup, setSelectedGroup] = useState("")
  let [selectedSensors, setSelectedSensors] = useState([])

  return(
    <SelectorContainer>
      <BasicContainer>
        <GroupDropDown 
        selectedGroup={selectedGroup}
        setSelectedGroup={(newState) => setSelectedGroup(newState)}
        />
      </BasicContainer>
      <VertSpacer />
      <BasicContainer expand>
        <SensorDropdown 
        selectedGroup={selectedGroup}
        selectedSensors={selectedSensors}
        setSelectedSensors={(newState) => setSelectedSensors(newState)}
        />
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


