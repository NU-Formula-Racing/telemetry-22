import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  return(
    <>
      {props.sensors.map((_, i) => {
        return(
          <div key={i}>
            {i !== 0 && <VertSpacer />}
            <Graph width={props.width} />
          </div>
        )
      })}
    </>
  );
}

