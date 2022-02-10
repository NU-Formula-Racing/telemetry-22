import { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import Number from './Number';

import { Context } from '../../shared/Context';

export default function Numbers(props) {
  let context = useContext(Context);

  const [dndRect, setRect] = useState(0);
  const [xRanges, setxRanges] = useState([]);
  const [yRanges, setyRanges] = useState([]);
  const [edges, setEdges] = useState([]);
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
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
    //console.log(dndRect);
  }, [dndRect, props]);

  useEffect(() => {
    // console.log(xRanges);
    // console.log(yRanges);
  }, [xRanges, yRanges]);

  useEffect(() => {

    if (!context.dragging) {
      console.log(xRanges);
      console.log(yRanges);
      console.log(`${context.mouseX} ${context.mouseY}`);
      let y = context.mouseY;
      let x = context.mouseX;
      for (let i = 0; i < yRanges.length; i++) {
        if (y >= yRanges[i][0] && y <= yRanges[i][1]) {
          if ((x - startX) > 0) {
            if (xRanges[i])
            if (xRanges[i][0] < x && xRanges[i][0] + xRanges[i][1] > x)
            console.log(xRanges[i]);
          } else {
            // If dropped to left
          }
        }
      }
    } else {

    }
  }, [context.dragging]);

  const handleResize = () => {
    if (dndRef.current) {
      setRect(dndRef.current.getBoundingClientRect());
    }
  }

  const getRanges = () => {
    const numberWidth = 240;
    const numberHeight = 190;

    let itemsPerRow = Math.floor(dndRect.width / numberWidth);
    let spaceSize = (dndRect.width - (itemsPerRow * numberWidth)) / (2 * itemsPerRow);
    let fullRows = Math.floor(props.sensors.length / itemsPerRow);

    let extraItems = props.sensors.length % itemsPerRow;
    let extraSize = (dndRect.width - (extraItems * numberWidth)) / (2 * extraItems);

    let tempX = Array(((itemsPerRow * fullRows) + extraItems));
    let tempY = Array(((itemsPerRow * fullRows) + extraItems));
    let tempE = Array(((itemsPerRow * fullRows) + extraItems));
    for (let i = 0; i < itemsPerRow; i++) {
      let x = dndRect.x +  (spaceSize + (numberWidth / 2)) + (i * (numberWidth + (2 * spaceSize)));
      for (let j = 0; j < fullRows; j++) {
        let ind = i + (j * itemsPerRow);
        tempX[ind] = [x, (spaceSize * 2) + numberWidth];

        let y = j * (numberHeight + 14) + dndRect.y + 13;
        tempY[ind] = [y - props.scrollHeight, y + numberHeight - props.scrollHeight];

        if (i === 0 || i === itemsPerRow - 1) {
          tempE[ind] = 1;
        } else {
          tempE[ind] = 0;
        }
      }
    }

    for (let i = 0; i < extraItems; i++) {
      let x = dndRect.x + (extraSize + (numberWidth / 2)) + (i * (numberWidth + (2 * extraSize)));
      tempX[(itemsPerRow * fullRows) + i] = [x, (extraSize * 2) + numberWidth];
      
      let y = fullRows * (numberHeight + 14) + dndRect.y + 13;
      tempY[i + (fullRows * itemsPerRow)] = [y - props.scrollHeight, y + numberHeight - props.scrollHeight];
    }

    // console.log(tempY);
    // console.log(context.mouseY + props.scrollHeight);

    return [tempX, tempY];
  }

  return (
    <NumberTray
      className="numbers"
      ref={dndRef}
    >
      {props.sensors.map((e, index) => {
        let val = Math.random();
        return (
          <Number
            value={val*30}
            percentage={val}
            unit={'m/s'}
            label={e.label}
            sendIndex={() => {setCurrent(index); setStartX(xRanges[index])}}
            key={index}
          />
        );
      })}
    </NumberTray>
  );
}

const NumberTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: -12px;
  > * {
    margin-top: 12px;
  }
`;