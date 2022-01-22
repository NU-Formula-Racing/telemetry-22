import { useRef, useEffect, useState, useStateWithCallbackLazy } from 'react';
import styled from 'styled-components';

import Number from './Number';

export default function Numbers(props) {
  const [dndRect, setRect] = useState(0);
  const [xList, setXList] = useState(null);
  const dndRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dndRect) {
      setXList(getXList());
    }
    console.log(dndRect);
    console.log(xList);
  }, [dndRect, props]);

  const handleResize = () => {
    if (dndRef.current) {
      setRect(dndRef.current.getBoundingClientRect());
    }
  }

  const getXList = () => {
    let itemsPerRow = Math.floor(dndRect.width / 240);
    let spaceSize = (dndRect.width - (itemsPerRow * 240)) / (2 * itemsPerRow);
    let fullRows = Math.floor(props.sensors.length / itemsPerRow);
    console.log(fullRows);
    let extraItems = props.sensors.length % itemsPerRow;

    let tempX = Array(itemsPerRow * fullRows);
    for (let i = 0; i < itemsPerRow; i++) {
      let x = (spaceSize + 120) + (i * (240 + (2 * spaceSize)));
      for (let j = 0; j < fullRows; j++) {
        tempX[i + (j * itemsPerRow)] = x;
      }
    }

    return tempX;
  }

  return (
    <NumberTray className="numbers" ref={dndRef}>
      {props.sensors.map((e, index) => {
        let val = Math.random();
        return (
          <Number
            value={val*30}
            percentage={val}
            unit={'m/s'}
            label={e.label}
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