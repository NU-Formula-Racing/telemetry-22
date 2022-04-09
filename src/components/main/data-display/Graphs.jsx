import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  return (
    <>
      {props.sensors.map((e, index) => {
        return (
          <div key={index}>
            {index !== 0 && <VertSpacer />}
            <Graph width={props.width} sensorName={e.label} k={index} rerender={() => {props.rerender()}}/>
          </div>
        );
      })}
    </>
  );
}
