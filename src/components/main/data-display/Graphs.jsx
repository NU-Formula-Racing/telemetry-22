import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  return (
    <>
      {props.sensors.map((e, index) => {
        return (
          <div key={index}>
            {index !== 0 && <VertSpacer />}
            <div>{e.label}</div>
            <Graph width={props.width} rerender={() => {props.rerender()}}/>
          </div>
        );
      })}
    </>
  );
}