import styled from 'styled-components';
import Graph from './Graph';
import VertSpacer from '../../shared/VertSpacer';
export default function Graphs(props) {
  return(
    <>
      <Graph></Graph>
      <VertSpacer/>
      <Graph></Graph>
      <VertSpacer/>
      <Graph></Graph>
    </>
  );
}

