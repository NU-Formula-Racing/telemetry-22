import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import VertIndicator from './VertIndicator';

import { Context } from './Context';

export default function DndFlex(props) {
  let context = useContext(Context);

  const [proppedChildren, setChildren] = useState(props.children)
  const [dndRect, setRect] = useState(0);
  const [xRanges, setxRanges] = useState([]);
  const [yRanges, setyRanges] = useState([]);
  const [startInd, setStartInd] = useState(0);
  const [hoverInd, setHoverInd] = useState(0);
  const [magicNumbers, setMagic] = useState([0, 0, 0, 0, 0]);
  const dndRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dndRect) {
      let ranges = getRanges();
      setxRanges(ranges[0]);
      setyRanges(ranges[1]);
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
      setStartInd(getItemIndex(x, y));
      setHoverInd(getItemIndex(x, y));
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
        spacing: magicNumbers[+ (index >= (magicNumbers[2] * magicNumbers[3]))]
      })
    })

    return updatedChildren;
  }

  const getItemIndex = (x, y) => {
    let index = 0;
    if ((dndRect.left > x) || (dndRect.right < x) || (dndRect.bottom < y) || (dndRect.top > y)) {
      return startInd;
    }
    for (let i = 0; i < magicNumbers[2]; i++) {
      for (let j = 0; j < magicNumbers[3]; j++) {
        if ((y < (yRanges[index] + props.itemHeight)) && (x < xRanges[index] + (props.itemWidth / 2) + magicNumbers[0])) {
          return index
        }
        index++;
      }
    }
    for (let i = 0; i < magicNumbers[4]; i++) {
      if ((y < (yRanges[index] + props.itemHeight)) && (x < xRanges[index] + (props.itemWidth / 2) + magicNumbers[1])) {
        return index
      }
      index++;
    }
  }

  const handleResize = () => {
    if (dndRef.current) {
      setRect(dndRef.current.getBoundingClientRect());
    }
  }

  const getRanges = () => {
    let itemsPerRow = Math.floor(dndRect.width / props.itemWidth);
    let spaceSize = (dndRect.width - (itemsPerRow * props.itemWidth)) / (2 * itemsPerRow);
    let fullRows = Math.floor(props.items.length / itemsPerRow);

    let extraItems = props.items.length % itemsPerRow;
    let extraSize = (dndRect.width - (extraItems * props.itemWidth)) / (2 * extraItems);

    setMagic([spaceSize, extraSize, fullRows, itemsPerRow, extraItems]);

    let tempX = Array(((itemsPerRow * fullRows) + extraItems));
    let tempY = Array(((itemsPerRow * fullRows) + extraItems));
    for (let i = 0; i < itemsPerRow; i++) {
      let x = dndRect.x +  (spaceSize + (props.itemWidth / 2)) + (i * (props.itemWidth + (2 * spaceSize)));
      for (let j = 0; j < fullRows; j++) {
        let ind = i + (j * itemsPerRow);
        tempX[ind] = x;

        let y = j * (props.itemHeight + props.vSpace + 2) + dndRect.y + props.vSpace + 1;
        tempY[ind] = y - props.scrollHeight;
      }
    }

    for (let i = 0; i < extraItems; i++) {
      let x = dndRect.x + (extraSize + (props.itemWidth / 2)) + (i * (props.itemWidth + (2 * extraSize)));
      tempX[(itemsPerRow * fullRows) + i] = x;
      
      let y = fullRows * (props.itemHeight + props.vSpace + 2) + dndRect.y + props.vSpace + 1;
      tempY[i + (fullRows * itemsPerRow)] = y - props.scrollHeight;
    }

    return [tempX, tempY];
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: -${props => props.vSpace}px;
  > * {
    margin-top: ${props => props.vSpace}px;
  }
`;