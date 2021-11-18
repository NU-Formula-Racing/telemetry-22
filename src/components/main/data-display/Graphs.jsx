import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  return(
    <>
      {props.sensors.map((e, i) => {
        return(
          <div key={i}>
            {i !== 0 && <VertSpacer />}
            <div>{e.label}</div>
            <Graph width={props.width} />
          </div>
        )
      })}
    </>
  );
}
