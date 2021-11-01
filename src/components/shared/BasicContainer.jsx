import styled from 'styled-components';

export default function BasicContainer(props) {
  return (
    <Container expand={props.expand} scroll={props.scroll}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 18px);
  border: 1px solid #818181;
  border-radius: 9px;
  padding: 8px;
  height: ${props => (props.expand ? '100%' : 'auto')};
  overflow-y: ${props => (props.scroll ? 'scroll' : 'visible')};
`;