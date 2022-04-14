import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import VertIndicator from './VertIndicator';

import useMouse from './useMouse';

import { Context } from './Context';

export default function DndFlex(props) {
  let context = useContext(Context);

  const [state, setState] = useState({
    startInd: -1,
    hoverInd: -1,
    indicator: 0,
    flexProps: {
      cols: 0,
      extraCols: 0,
      rows: 0,
      sectorWidth: 0,
      extraWidth: 0,
      sectorHeight: 0,
    },
    canDrop: true,
    prevChildrenLen: 0,
  });
  const [proppedChildren, setChildren] = useState(props.children);

  const dndRef = useRef(null);
  
  const { mouseX, mouseY } = useMouse();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (props.children.length !== state.prevChildrenLen) {
      setState(prevState => ({
        ...prevState,
        prevChildrenLen: props.children.length,
      }));
      handleResize();
    }
  }, [props.children]);

  useEffect(() => {
    const addProps = (initProps) => {      
      const updatedChildren = initProps.map((child, index) => {
        return React.cloneElement(child, {
          isDragging: context.dragging && index === state.startInd,
          isHovering: context.dragging && index === state.hoverInd && index !== state.startInd && state.canDrop,
          mouseIsDown: context.dragging,
        });
      });

      return updatedChildren;
    }

    setChildren(addProps(props.children));
  }, [props.children, state.startInd, state.hoverInd]);

  useEffect(() => {
    if (state.bounds) {
      let sector = getSector(mouseX, mouseY);
      if (sector >= 0) {
        // if Drop
        if (!context.dragging && state.startInd >= 0 && state.canDrop) {
          let drop = getDrop(sector);
          
          let temp = props.items[state.startInd];
          props.items.splice(state.startInd, 1);
          props.items.splice(drop, 0, temp);
          props.setCurrentItems(props.items);
          handleHover(Math.floor(sector / 2));
        // if Drag
        } else {
          setState(prevState => ({
            ...prevState,
            startInd: Math.floor(sector / 2),
          }));
        }
      }
    }
  }, [context.dragging]);

  useEffect(() => {
    if (state.bounds && state.canDrop) {
      setState(prevState => ({
        ...prevState,
        indicator: updateIndicator(getSector(mouseX, mouseY)),
      }));
      handleHover(Math.floor(getSector(mouseX, mouseY) / 2));
    }
  }, [mouseY, mouseX]);

  useEffect(() => {
    if (state.bounds) {
      let cols = Math.floor(state.bounds.width / props.itemWidth);
      let extraCols = props.items.length % cols;
      setState(prevState => ({
        ...prevState,
        flexProps: {
          cols,
          extraCols,
          rows: Math.floor(props.items.length / cols),
          sectorWidth: state.bounds.width / (cols * 2),
          extraWidth: state.bounds.width / (extraCols * 2),
          sectorHeight: props.itemHeight + props.vSpace,
        },
      }));
    }
  }, [state.bounds]);

  const getSector = (_x, _y) => {
    let dy = _y - (state.bounds.top + (.5 * props.vSpace));
    let dx = _x - state.bounds.left;

    // Out of Bounds
    if (dy < 0 || dy > (state.bounds.height - props.vSpace) || dx < 0 || dx > state.bounds.width) {
      return -1;
    }

    let sector = 0;
    for (let i = 0; i < state.flexProps.rows; i++) {
      if (dy < state.flexProps.sectorHeight * (i + 1)) {
        for (let j = 0; j < (state.flexProps.cols * 2); j++) {
          if (dx < state.flexProps.sectorWidth * (j + 1)) {
            return sector;
          }
          sector++;
        }
      } else {
        sector += state.flexProps.cols * 2;
      }
    }
    for (let j = 0; j < (state.flexProps.extraCols * 2); j++) {
      if (dx < state.flexProps.extraWidth * (j + 1)) {
        return sector;
      }
      sector++;
    }

    return -1;
  }

  const getDrop = (sector) => {
    let startSector = 2 * state.startInd;
    if (startSector - 1 <= sector && sector <= startSector + 2) {
      return state.startInd;
    } else if (sector < startSector) {
      return state.startInd - Math.floor((startSector - sector) / 2);
    } else {
      return state.startInd + Math.floor((sector - startSector - 1) / 2);
    }
  }

  // NEEDS WORK
  const updateIndicator = (sector) => {
    let startSector = 2 * state.startInd;

    return state.startInd - Math.floor((startSector - sector) / 2);
  }

  const handleResize = () => {
    if (dndRef.current) {
      setState(prevState => ({
        ...prevState,
        bounds: dndRef.current.getBoundingClientRect(),
      }));
    }
  }

  const handleHover = (i) => {
    if (!context.dragging) {
      setState(prevState => ({
        ...prevState,
        startInd: i,
      }));
    }
  }

  return (
    <FlexTray
      vSpace={props.vSpace}
      ref={dndRef}
      onMouseEnter={() => {setState(prevState => ({
        ...prevState,
        canDrop: true,
      }))}}
      onMouseLeave={() => {setState(prevState => ({
        ...prevState,
        canDrop: false,
      }))}}
    >
      {
        /*(context.dragging && state.startInd >= 0 && state.canDrop) &&
          <VertIndicator
            height={props.itemHeight}
            x={xRanges[hoverInd] + ((2 * (xRanges[hoverInd] > xRanges[startInd]) * (yRanges[hoverInd] === yRanges[startInd])) - 1)*((props.itemWidth / 2) + magicNumbers[+ (hoverInd > (magicNumbers[2] * magicNumbers[3]))] + 1)}
            y={yRanges[hoverInd] - props.vSpace}
          />
        */
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