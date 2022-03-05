import DndFlex from '../../shared/DnDFlex';
import Number from './Number';

export default function Numbers(props) {
  return (
    <DndFlex
      viewState={props.viewState}
      scrollHeight={props.scrollHeight}
      items={props.sensors}
      setCurrentItems={(x) => props.setCurrentSensors(x)}
      vSpace={12}
      itemWidth={240}
      itemHeight={190}
    >
      {props.sensors.map((e, index) => {
        return (
          <Number
            value={e.id*30}
            percentage={e.id}
            unit={'m/s'}
            label={e.label}
            key={index}
          />
        );
      })}
    </DndFlex>
  );
}