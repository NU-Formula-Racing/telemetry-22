import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import VertIndicator from './VertIndicator';

import { Context } from './Context';

export default function DndList(props) {
  let context = useContext(Context);

  const [proppedChildren, setChildren] = useState(props.children)

  // Assigns Dnd Props to Children
  useEffect(() => {
    setChildren(addProps(props.children));
  }, [props.children]);

  const addProps = (initProps) => {
    const updatedChildren = initProps.map((child, index) => {
      return React.cloneElement(child, {
        sendIndex: () => handleHover(index),
        remove: () => handleExit(),
      })
    })

    return updatedChildren;
  }

  const handleHover = (i) => {
    if (!context.dragging) {
      console.log(i);
    }
  }

  const handleExit = () => {
    if (!context.dragging) {
      console.log(-1);
    }
  }

  return (
    <FlexTray
    >
      {proppedChildren}
    </FlexTray>
  );
}

const FlexTray = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;