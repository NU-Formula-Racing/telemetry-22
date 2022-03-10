import { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import Number from './Number';
import VertIndicator from '../../shared/VertIndicator';

import { Context } from '../../shared/Context';

export default function DndFlex(props) {
  let context = useContext(Context);

  const [proppedChildren, setChildren] = useState(props.items)
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
      console.log(dndRect);
      let ranges = getRanges();
      setxRanges(ranges[0]);
      setyRanges(ranges[1]);
    }
  }, [dndRect, props]);

  useEffect(() => {
    setChildren(addProps(props.items));
  }, [props.items]);

  useEffect(() => {
    let x = context.mouseX;
    let y = context.mouseY;
    console.log(y);

    if (!context.dragging) {
      let temp = props.sensors[startInd];
      props.sensors.splice(startInd, 1);
      props.sensors.splice(hoverInd, 0, temp);
      props.setCurrentSensors(props.sensors);
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
        sendIndex: handleHover(index),
        spacing: magicNumbers[+ (index >= (magicNumbers[2] * magicNumbers[3]))]
      })
    })
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
    let fullRows = Math.floor(props.sensors.length / itemsPerRow);

    let extraItems = props.sensors.length % itemsPerRow;
    let extraSize = (dndRect.width - (extraItems * props.itemWidth)) / (2 * extraItems);

    setMagic([spaceSize, extraSize, fullRows, itemsPerRow, extraItems]);

    let tempX = Array(((itemsPerRow * fullRows) + extraItems));
    let tempY = Array(((itemsPerRow * fullRows) + extraItems));
    let tempE = Array(((itemsPerRow * fullRows) + extraItems));
    for (let i = 0; i < itemsPerRow; i++) {
      let x = dndRect.x +  (spaceSize + (props.itemWidth / 2)) + (i * (props.itemWidth + (2 * spaceSize)));
      for (let j = 0; j < fullRows; j++) {
        let ind = i + (j * itemsPerRow);
        tempX[ind] = x;

        let y = j * (props.itemHeight + props.vSpace + 2) + dndRect.y + props.vSpace + 1;
        tempY[ind] = y - props.scrollHeight;

        if (i === 0 || i === itemsPerRow - 1) {
          tempE[ind] = 1;
        } else {
          tempE[ind] = 0;
        }
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
          x={xRanges[hoverInd] + ((2 * (xRanges[hoverInd] > xRanges[startInd]) * (yRanges[hoverInd] === yRanges[startInd])) - 1)*((props.itemWidth / 2) + magicNumbers[+ (hoverInd > (magicNumbers[2] * magicNumbers[3]))] + 1)}
          y={yRanges[hoverInd] - props.vSpace}
        />
      }
      {props.sensors.map((e, index) => {
        let val = Math.random();
        return (
          <Number
            value={val*30}
            percentage={val}
            unit={'m/s'}
            label={e.label}
            key={index}

            isDragging={index === startInd && context.dragging}
            hovering={index === hoverInd && context.dragging}
            sendIndex={() => {handleHover(index)}}
            spacing={magicNumbers[+ (index >= (magicNumbers[2] * magicNumbers[3]))]}
          />
        );
      })}
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
  margin-top: -${props.vSpace}px;
  > * {
    margin-top: ${props.vSpace}px;
  }
`;