import RowHolder from "../../shared/RowHolder";
import HorizSpacer from "../../shared/HorizSpacer";

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

export default function ButtonTray() {
  return(
    <RowHolder content={
      <>
        <img src={stop} alt='stop' />
        <HorizSpacer />
        <img src={play} alt='play' />
        <HorizSpacer />
        <img src={pause} alt='pause' />
      </>
    }/>
  )
}