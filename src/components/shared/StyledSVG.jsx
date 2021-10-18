import styled from "styled-components";

export default function ButtonTray(props) {
  return(
    <StyledSVG src={props.src} alt={props.alt} />
  );
}

const StyledSVG = styled.img`
  filter: invert(1) brightness(0.45);
`;