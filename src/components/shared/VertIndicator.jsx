import styled from 'styled-components';

export default function VertIndicator(props) {
  return(
    <Line height={props.height} x={props.x} y={props.y} />
  )
}

const Line = styled.div`
  height: ${props => props.height}px;
  border-left: 2px solid black;
  position: fixed;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`;