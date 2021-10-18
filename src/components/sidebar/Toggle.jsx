import styled from 'styled-components';

export default function Toggle(props) {
  return (
    <Holder>
      <Label>
        Live Data:
      </Label>
      <ToggleButton
        active={props.active}
        onClick={() => {
          props.handleClick()
        }}
      >
        <Circle active={props.active} />
      </ToggleButton>
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.div`
`;

const ToggleButton = styled.div`
  width: 46px;
  height: 24px;
  position: relative;
  background: ${props => (props.active ? '#42D060' : '#ebebeb')};
  transition: background 0.2s ease;
  border-radius: 12px;
`;

const Circle = styled.div`
  position: absolute;
  top: 2px;
  left: ${props => (props.active ? 24 : 2)}px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.2s ease;
`;