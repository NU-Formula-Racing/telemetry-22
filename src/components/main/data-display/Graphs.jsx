import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(props.sensors);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    props.setCurrentSensors(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {props.sensors.map((e, index) => {
              return (
                <Draggable key={e.id} draggableId={e.id} index={index}>
                  {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps}>
                      {index !== 0 && <VertSpacer />}
                      <div ref={provided.innerRef}>{e.label}</div>
                      <Graph width={props.width} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// export default function Graphs(props) {
//   function handleOnDragEnd(res) {
//     if (!res.destination) return;

//     const items = Array.from(props.sensors);
//     const [reorderedItem] = items.splice(res.source.index, 1);
//     items.splice(res.destination.index, 0, reorderedItem);

//     props.setCurrentSensors(items);
//   }

//   return (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId='sensors'>
//         {(provided) => (
//           <ul className="sensors" {...provided.droppableProps} ref={provided.innerRef}>
//             {props.sensors.map((e, i) => {
//               return (
//                 <Draggable key={e.id} draggableId={e.id} index={i}>
//                   {(provided) => {
//                     <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                       {i !== 0 && <VertSpacer />}
//                       <div>{e.label}</div>
//                       <Graph width={props.width} />
//                     </li>
//                   }}
//                 </Draggable>
//               )
//             })}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default class Graphs extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     console.log(this.props.sensors);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.sensors != this.props.sensors) {
//       console.log(this.props.sensors)
//     }
//   }

//   render() {
//     return(
//       <div>
//         {this.props.sensors.map((e, i) => {
//           <div
//             key={i}
//           >
//             {i !== 0 && <VertSpacer />}
//             <div>{e.label}</div>
//             <Graph width={this.props.width} />
//           </div>
//         })}
//       </div>
//     );
//   }
// }
