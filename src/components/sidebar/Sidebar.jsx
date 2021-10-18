import styled from 'styled-components';

import Toggle from './Toggle';
import SensorSelector from './SensorSelector';
import BasicContainer from '../shared/BasicContainer';
import VertSpacer from '../shared/VertSpacer';

import logo from '../../assets/logo.png';

export default function Sidebar(props) {
  return (
    <SidebarContainer>
      <img src={logo} alt='NU Formula Logo' />
      <VertSpacer />
      <BasicContainer content={
        <Toggle active={props.isLive} handleClick={() => {props.toggleLive(prev => !prev)}} />
      }/>
      <VertSpacer />
      <SensorSelector />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: calc(100vh - 60px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;