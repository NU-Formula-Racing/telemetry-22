import styled from 'styled-components';

import Toggle from './Toggle';
import SensorSelector from './SensorSelector';
import NameInput from './NameInput';
import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';


import logo from '../../assets/logo.png';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <img src={logo} alt='NU Formula Logo' />
      <VertSpacer />
      <BasicContainer>
        <Toggle />
      </BasicContainer>
      <VertSpacer />
      <NameInput />
      <VertSpacer />
      <SensorSelector />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: calc(100vh - 60px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;