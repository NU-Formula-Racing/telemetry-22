import { useEffect } from 'react';
import styled from 'styled-components';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Number from "./Number";

export default function Numbers(props) {
  // function handleOnDragEnd(result) {
  //   if (!result.destination) return;

  //   const items = Array.from(props.sensors);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   props.setCurrentSensors(items);
  // }

  // useEffect(() => {
  //   console.log(props.sensors)
  // })

  return(
    // <DragDropContext onDragEnd={handleOnDragEnd}>
    //   <Droppable droppableId="numbers" direction="horizontal">
    //     {(provided) => (
          // <NumberTray className="numbers" {...provided.droppableProps} ref={provided.innerRef}>
          <NumberTray className="numbers">
            {props.sensors.map((e, index) => {
              let val = Math.random();
              return (
                // <Draggable key={e.id} draggableId={e.id} index={index}>
                //   {(provided) => (
                //     <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Number
                        value={val*30}
                        percentage={val}
                        unit={'m/s'}
                        label={e.label}
                        key={index}
                      />
                //     </div>
                //   )}
                // </Draggable>
              );
            })}
            {/* {provided.placeholder} */}
          </NumberTray>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
}

const NumberTray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  margin-top: -12px;
  > * {
    margin-top: 12px;
  }
`;