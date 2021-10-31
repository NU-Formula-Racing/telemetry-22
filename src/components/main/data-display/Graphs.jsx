import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';

export default function Graphs(props) {
  return(
    <>
      <Graph width={props.width} />
      <VertSpacer />
      <Graph width={props.width} />
      <VertSpacer />
      <Graph width={props.width} />
      <VertSpacer />
      <Graph width={props.width} />
    </>
  );
}

