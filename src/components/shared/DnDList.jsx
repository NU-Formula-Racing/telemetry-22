import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import VertIndicator from './VertIndicator';

import { Context } from './Context';

export default function DndList(props) {
  let context = useContext(Context);

  const [state, setState] = useState({
    startInd: -1,
    hoverInd: -1,
  });
  const [proppedChildren, setChildren] = useState(props.children);

  const dndRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, [props.children]);

  // Assigns Dnd Props to Children
  useEffect(() => {
    setChildren(addProps(props.children));
  }, [props.children, state.startInd, state.hoverInd]);

  useEffect(() => {
    if (state.startInd >= 0 && !context.dragging) {
      if (state.bounds) {
        let sector = getSector(context.mouseX, context.mouseY);
        let start = 2 * state.startInd;

        if (sector >= 0) {
          // Michelin Star Spaghetti✨✨
          let drop = 0;

          if (sector < start - 3) {
            drop = Math.ceil(sector / 2);
          } else if (sector < start) {
            drop = state.startInd - 1;
          } else if (sector < start + 2) {
            drop = state.startInd;
          } else if (sector < start + 5) {
            drop = state.startInd + 1;
          } else {
            drop = Math.ceil(sector / 2) - 1;
          }
          
          let temp = props.items[state.startInd];
          props.items.splice(state.startInd, 1);
          props.items.splice(drop, 0, temp);
          props.setCurrentItems(props.items);
          handleHover(Math.floor(sector / 2));
        }
      }
    }
  }, [context.dragging])

  const addProps = (initProps) => {
    const updatedChildren = initProps.map((child, index) => {
      return React.cloneElement(child, {
        sendIndex: () => handleEnter(index),
        sendStart: () => handleHover(index),
        removeIndex: () => handleExit(),
        removeStart: () => handleUnhover(),
        isDragging: context.dragging && index === state.startInd,
        isHovering: context.dragging && index === state.hoverInd && index != state.startInd,
      })
    })

    return updatedChildren;
  }

  const handleResize = () => {
    if (dndRef.current) {
      setState(prevState => ({
        ...prevState,
        bounds: dndRef.current.getBoundingClientRect()
      }));
    }
  }

  const handleEnter = (i) => {
    setState(prevState => ({
      ...prevState,
      hoverInd: i
    }));
  }

  const handleHover = (i) => {
    if (!context.dragging) {
      setState(prevState => ({
        ...prevState,
        startInd: i
      }));
    }
  }

  const handleExit = () => {
    setState(prevState => ({
      ...prevState,
      hoverInd: -1
    }));
  }

  const handleUnhover = () => {
    if (!context.dragging) {
      setState(prevState => ({
        ...prevState,
        startInd: -1
      }));
    }
  }

  const getSector = (x, y) => {
    let dy = y - state.bounds.top;
    if (dy < 0 || dy > state.bounds.height || x < state.bounds.left || x > state.bounds.right) {
      return -1;
    }
    let l = props.children.length;
    let ih = (state.bounds.height - (l * props.vspace * 2)) / l;
    let sectorHeight = props.vspace + (ih / 2);
    for (let i = 0; i < (l * 2); i++) {
      if ((sectorHeight * (i + 1)) > dy) {
        return i;
      }
    }
    return -1;
  }

  return (
    <FlexTray
      ref={dndRef}
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
  user-select: none;
`;