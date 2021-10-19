import { useState } from 'react';
//import styled from "styled-components";

import BasicContainer from "../../shared/BasicContainer";
import Graphs from './Graphs';
import Numbers from './Numbers';

export default function DataDisplay(props) {
  const [dispType] = useState('graphs');

  let content = (dispType==='graphs') ? <Graphs /> : <Numbers />;

  return(
    <BasicContainer expand content={content}/>
  );
}