import styled from 'styled-components';

export default function BasicContainer(props) {
  return (
    <Container isFlex={props.flex} expand={props.expand} scroll={props.scroll}>
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
  display: ${props => (props.isFlex ? 'flex' : 'auto')};
  align-items: center;
  justify-content: center;
`;