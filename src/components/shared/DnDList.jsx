import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import VertIndicator from './VertIndicator';

import { Context } from './Context';

export default function DndList(props) {
  let context = useContext(Context);

  const [proppedChildren, setChildren] = useState(props.children)
  const [dndRect, setRect] = useState(0);
  const [yRanges, setyRanges] = useState([]);
  const [startInd, setStartInd] = useState(0);
  const [hoverInd, setHoverInd] = useState(0);
  const dndRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dndRect) {
      setyRanges(getRanges());
    }
  }, [dndRect, props]);

  useEffect(() => {
    setChildren(addProps(props.children));
  }, [props.children]);

  useEffect(() => {
    let x = context.mouseX;
    let y = context.mouseY;

    if (!context.dragging) {
      let temp = props.items[startInd];
      props.items.splice(startInd, 1);
      props.items.splice(hoverInd, 0, temp);
      props.setCurrentItems(props.items);
    } else {
      setStartInd(getItemIndex(y));
      setHoverInd(getItemIndex(y));
    }
  }, [context.dragging]);

  const addProps = (initProps) => {
    const updatedChildren = initProps.map((child, index) => {
      // isDragging={index === startInd && context.dragging}
      // hovering={index === hoverInd && context.dragging}
      // sendIndex={() => {handleHover(index)}}
      // spacing={magicNumbers[+ (index >= (magicNumbers[2] * magicNumbers[3]))]}

      return React.cloneElement(child, {
        isDragging: index === startInd && context.dragging,
        hovering: index === hoverInd && context.dragging,
        sendIndex: () => handleHover(index),
      })
    })

    return updatedChildren;
  }

  const getItemIndex = (y) => {
    if ((dndRect.bottom < y) || (dndRect.top > y)) {
      return startInd;
    }

    for (let j = 0; j < yRanges.length; j++) {
      if (y < (yRanges[j] + props.itemHeight)) {
        return j
      }
    }
  }

  const handleResize = () => {
    if (dndRef.current) {
      setRect(dndRef.current.getBoundingClientRect());
    }
  }

  const getRanges = () => {
    let fullRows = props.items.length;

    let tempY = Array(fullRows);
    for (let j = 0; j < fullRows; j++) {
      let y = j * (props.itemHeight + props.vSpace + 2) + dndRect.y;
      tempY[j] = y - props.scrollHeight;
    }

    return tempY;
  }

  const handleHover = (i) => {
    setHoverInd(i);
    if (!context.dragging) {
      setStartInd(i);
    }
  }

  return (
    <FlexTray
      vSpace={props.vSpace}
      ref={dndRef}
    >
      {
        (hoverInd !== startInd && context.dragging) &&
        <VertIndicator
          height={props.itemHeight}
          y={yRanges[hoverInd] - props.vSpace}
        />
      }
      {proppedChildren}
    </FlexTray>
  );
}

const FlexTray = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: -${props => props.vSpace}px;
  > * {
    margin-top: ${props => props.vSpace}px;
  }
`;