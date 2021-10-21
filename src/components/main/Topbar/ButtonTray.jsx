import RowHolder from "../../shared/RowHolder";
import HorizSpacer from "../../shared/HorizSpacer";

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

export default function ButtonTray() {
  return(
    <RowHolder>
      <img src={stop} alt='stop' width='25px' height='25px' />
      <HorizSpacer />
      <img src={play} alt='play' width='25px' height='25px' />
      <HorizSpacer />
      <img src={pause} alt='pause' width='25px' height='25px' />
    </RowHolder>
  )
}