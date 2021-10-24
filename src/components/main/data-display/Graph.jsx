import React, { useContext } from 'react'
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import { extent, max } from 'd3-array';
import BasicContainer from "../../shared/BasicContainer";
import generateDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue';
import { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from '@visx/marker';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import * as allCurves from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';

// const series = new Array(1).fill(null).map((_, i) =>
//     generateDateValue(25, i/72).sort(
//         (a, b) => a.date.getTime() - b.date.getTime()
//     )
// )

const series = [generateDateValue(25, 1/72).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
)]

const allData = series.reduce((rec, d) => rec.concat(d), []);

// data accessors
const getX = (d) => d.date;
const getY = (d) => d.value;
console.log(series)

// scales
const xScale = scaleTime({
    domain: extent(allData, getX),
  });
const yScale = scaleLinear({
domain: [0, max(allData, getY)],
});

export default function Graph() {
    const curveType = 'curveLinear'
    const height = 300
    const width = 800
    // update scale output ranges
    xScale.range([0, width - 50]);
    yScale.range([height * 0.9, height * 0.1]);
  return (
        <svg width={width} height={height}>
            <MarkerX
            id="marker-x"
            stroke="#333"
            size={12}
            strokeWidth={4}
            markerUnits="userSpaceOnUse"
            />
            <MarkerCross
            id="marker-cross"
            stroke="#333"
            size={22}
            strokeWidth={4}
            strokeOpacity={0.6}
            markerUnits="userSpaceOnUse"
            />
            <MarkerCircle id="marker-circle" fill="#333" size={2} refX={2} />
            <MarkerArrow id="marker-arrow-odd" stroke="#333" size={12} strokeWidth={1} />
            <MarkerLine id="marker-line" fill="#333" size={16} strokeWidth={1} />
            <MarkerArrow id="marker-arrow" fill="#333" refX={2} size={12} />
            <rect width={width} height={height} fill="#efefef" rx={14} ry={14} />
            {width > 8 &&
            series.map((lineData, i) => {
                let markerStart = 'url(#marker-x)';
                if (i === 1) markerStart = 'url(#marker-line)';
                const markerEnd = 'url(#marker-arrow)';
                return (
                <Group key={`lines-${i}`} top={i * height} left={13}>
                    {lineData.map((d, j) => (
                        <circle
                        key={i + j}
                        r={3}
                        cx={xScale(getX(d))}
                        cy={yScale(getY(d))}
                        stroke="rgba(33,33,33,0.5)"
                        fill="transparent"
                        />
                    ))}
                    <LinePath
                    curve={allCurves[curveType]}
                    data={lineData}
                    x={(d) => xScale(getX(d)) ?? 0}
                    y={(d) => yScale(getY(d)) ?? 0}
                    stroke="#333"
                    strokeWidth={1}
                    strokeOpacity={1}
                    shapeRendering="geometricPrecision"
                    markerMid="url(#marker-circle)"
                    markerStart={markerStart}
                    markerEnd={markerEnd}
                    />
                </Group>
                );
            })}
      </svg>
  );
}