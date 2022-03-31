import styled from 'styled-components';

export default function ScrollZone(props) {
  return(
    <Zone
      height={props.h}
      type={props.type}
      onMouseEnter={() => props.handleEnter()}
      onMouseLeave={() => props.handleLeave()}
    />
  )
}

const Zone = styled.div`
  height: ${props => props.height}px;
  width: 100%;
  position: absolute;
  left: 0;
  top: ${props => ((props.type === 0) ? 0 : 'auto')};
  bottom: ${props => ((props.type === 1) ? 0 : 'auto')};
  background: red;
`;