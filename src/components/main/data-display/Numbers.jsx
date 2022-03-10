import DndFlex from '../../shared/DnDFlex';
import Number from './Number';
import VertIndicator from '../../shared/VertIndicator';

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
      {
        (hoverInd !== startInd && context.dragging) &&
        <VertIndicator
          height={numberHeight}
          x={xRanges[hoverInd] + ((2 * (xRanges[hoverInd] > xRanges[startInd]) * (yRanges[hoverInd] === yRanges[startInd])) - 1)*((numberWidth / 2) + magicNumbers[+ (hoverInd > (magicNumbers[2] * magicNumbers[3]))] + 1)}
          y={yRanges[hoverInd] - 12}
        />
      }
      {props.sensors.map((e, index) => {
        return (
          <Number
            value={e.id*30}
            percentage={e.id}
            unit={'m/s'}
            label={e.label}
            key={index}
            isDragging={index === startInd && context.dragging}
            hovering={index === hoverInd && context.dragging}
            sendIndex={() => {handleHover(index)}}
            spacing={magicNumbers[+ (index >= (magicNumbers[2] * magicNumbers[3]))]}
          />
        );
      })}
    </DndFlex>
  );
}