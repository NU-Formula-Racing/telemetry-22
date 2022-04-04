import styled from 'styled-components';
    
    // <Zone
    //   height={props.h}
    //   type={props.type}
    //   onMouseEnter={() => props.handleEnter()}
    //   onMouseLeave={() => props.handleLeave()}
    // />

export default function ScrollZone(props) {
  return(
    <Zone />
  )
}

const Zone = styled.div`
  height: 20px;
  width: 100%;
  position: sticky;
  left: 0;
  top: ${props => (props.bottom ? 0 : 0)};
  background: red;
`;