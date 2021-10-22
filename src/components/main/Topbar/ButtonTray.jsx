import SVGButton from './SVGButton';
import RowHolder from '../../shared/RowHolder';
import HorizSpacer from '../../shared/HorizSpacer';

import stop from '../../../assets/stop.svg';
import play from '../../../assets/play.svg';
import pause from '../../../assets/pause.svg';

export default function Topbar(props) {
  let buttons = [];
  let srcList = [[stop, 'stop'], [play, 'play'], [pause, 'pause']];
  for (let i = 0; i < srcList.length; i++) {
    buttons.push(<SVGButton
      src={srcList[i][0]}
      label={srcList[i][1]}
      setViewState={props.setViewState}
      selected={props.viewState === srcList[i][1]}
    />);
    if (i < (srcList.length - 1)) {
      buttons.push(<HorizSpacer />);
    }
  }

  return (
    <RowHolder>
      {buttons}
    </RowHolder>
  );
}