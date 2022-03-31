import React, { useContext, useMemo, useCallback, useState, useEffect, useRef } from 'react'
import { extent, max, bisector } from 'd3-array';
import { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from '@visx/marker';
import { useTooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { Group } from '@visx/group';
import { LinePath, Bar, Line, stackOffset, AreaClosed } from '@visx/shape';
import * as allCurves from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import styled from "styled-components";
import scrollleft from '../../../assets/scrollleft.svg';
import scrollright from '../../../assets/scrollright.svg';
import zoomin from '../../../assets/zoomin.svg';
import zoomout from '../../../assets/zoomout.svg';
import { GridRows, GridColumns } from '@visx/grid';
import { withTooltip, Tooltip, TooltipWithBounds, defaultStyles } from '@visx/tooltip';
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';


let t = -1; // init time
const n = 30; // amount of seconds to show
let initData = initialise(); //data arr

function initialise() {
    var time = -1;
    var arr = [];
    var data_length = 1;
    for (var i = 0; i < data_length; i++) {
        var obj = {
            time: ++time,
            value: Math.floor(Math.random() * 100)
        };
        arr.push(obj);
    }
    t = time;
    return arr;
}

const height = 300
const width = 800

const getX = (d) => d.time;
const getY = (d) => d.value;


const graph_offset = 30

// scales
let xScaleInit = scaleLinear({
    domain: [0, max(initData, getX)],
    range: [0, width - 3*graph_offset]
});

let yScaleInit = scaleLinear({
    domain: [0, max(initData, getY) * 1.2],
    range: [height * 0.85, height * 0.1]
});

export default function Graph(props) {
    const curveType = 'curveLinear'
    const [graphData, setGD] = useState({lineData: initData, xScale: xScaleInit, yScale: yScaleInit, start:0, end:initData.length-1});
    const wheelTimeout = useRef()

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateData(graphData);
    //     }, 100);

    //     return () => clearInterval(interval);
    // }, [])

    function updateScales(gd){
        gd.xScale = scaleLinear({
            domain: [getX(gd.lineData[Math.floor(gd.start)]), getX(gd.lineData[Math.floor(gd.end)])],
            range: [0, width - 3*graph_offset]
        });
        gd.yScale = scaleLinear({
            domain: [0, max(gd.lineData.slice(Math.floor(gd.start), Math.floor(gd.end)), getY) * 1.2],
            range: [height * 0.85, height * 0.1]
        })
    }
    function updateData(gd) {
        t++;
        if (gd.end >= n) { gd.start++ }
        gd.end++;
        var obj = {
            time: t,
            value: Math.floor(Math.random() * 100)
        };
        let temp = [...gd.lineData];
        temp.push(obj);
        gd.lineData.push(obj); // push new data into data set
        // gd.xScale.domain([getX(gd.lineData[Math.floor(gd.start)]), getX(gd.lineData[Math.floor(gd.end)])]); // update scales
        // gd.yScale.domain([0, max(gd.lineData.slice(Math.floor(gd.start), Math.floor(gd.end)), getY)]);
        updateScales(gd);
        props.rerender();
    }

    function lockWheel(){
        // while wheel is moving, do not release the lock
        clearTimeout(wheelTimeout.current)

        // flag indicating to lock page scrolling (setTimeout returns a number)
        wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = false
        }, 300)
    }

    function handleMouseScroll(e){
        let gd = graphData;
        let dir;
        let scroll_amt = 0.2;
        let zoom_amt = 0.2;
        
        lockWheel()

        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 1){
            (e.deltaX < 0) ? dir = "right" : dir = "left"
            scroll(gd, dir, scroll_amt)
        } else {
            (e.deltaY < 0) ? dir = "in" : dir = "out"
            zoom(gd, dir, zoom_amt)
        }
    }

    function zoom(gd, dir, amt){
        if (dir == "in"){
            if (gd.start < gd.end - 2) {
                gd.start+= amt
            };
        } else if (dir == "out"){
            if (gd.start > amt) {
                gd.start-= amt
            } 
        }
        updateScales(gd);
        props.rerender();
    }

    function scroll(gd, dir, amt){
        if (dir == "right"){
            if (gd.end < max(gd.lineData, getX) - amt) {
                gd.start+= amt
                gd.end+= amt
            };
        } else if (dir == "left"){
            if (gd.start > amt) {
                gd.start-= amt
                gd.end-= amt
            }
        }
        updateScales(gd);
        props.rerender();
    }

    function checkKey(e) {
        if (e.keyCode == '38') { zoom(graphData, "in", 1); lockWheel(); // up arrow 
        } else if (e.keyCode == '40') { zoom(graphData, "out", 1); lockWheel() // down arrow
        } else if (e.keyCode == '37') { scroll(graphData, "left", 1); lockWheel() // left arrow 
        } else if (e.keyCode == '39') { scroll(graphData, "right", 1); lockWheel() // right arrow
        }
    }

    useEffect(() => {
        const cancelWheel = e => wheelTimeout.current && e.preventDefault()
        document.body.addEventListener('wheel', cancelWheel, {passive:false})
        return () => document.body.removeEventListener('wheel', cancelWheel)
    }, [])

    const { showTooltip,
        tooltipData,
        hideTooltip,
        tooltipTop = 0,
        tooltipLeft = 0, } = useTooltip();

    const bisectTime = bisector((d) => d.time).left;

    // tooltip handler
    const handleTooltip = useCallback(
        (event) => {
          let { x } = localPoint(event) || { x: (graph_offset*2) }; // x of mouse
          x -= (graph_offset*2)
          const x0 = graphData.xScale.invert(x); // maps x -> time 
          const index = bisectTime(graphData.lineData, x0, 1); // finds index of the middle time
          const d0 = graphData.lineData[index - 1]; 
          const d1 = graphData.lineData[index];
          let d = d0;
          if (d1 && getX(d1)) {
            d = x0.valueOf() - getX(d0).valueOf() > getX(d1).valueOf() - x0.valueOf() ? d1 : d0;
          }
          showTooltip({
            tooltipData: d,
            tooltipLeft: graphData.xScale(getX(d)),
            tooltipTop: graphData.yScale(getY(d)),
            // tooltipTop: graphData.yScale(getY(d)),
          });
        },
        [showTooltip, graphData.yScale, graphData.yScale],
      );
  return (
        <GraphContainer onKeyDown={(e) => checkKey(e)}>
            <button onClick={() => updateData(graphData)}>update</button> <br/>
            <ButtonTray width={width}>
                <div>
                <Clickable src={scrollleft} alt='scroll left' width='25px' height='25px' onClick={() => {scroll(graphData, "left", 1)}} />
                <Clickable src={scrollright} alt='scroll right' width='25px' height='25px' onClick={() => {scroll(graphData, "right", 1)}} />
                </div>
                <Clickable src={zoomin} alt='zoom in' width='25px' height='25px' onClick={() => {zoom(graphData, "in", 1)}} />
                <Clickable src={zoomout} alt='zoom out' width='25px' height='25px' onClick={() => {zoom(graphData, "out", 1)}} />
            </ButtonTray>
            <SVGContainer width={width}>
            <div>{props.sensorName}</div>
            <svg width={width} height={height} onWheel={(e) => handleMouseScroll(e)}>
                <MarkerCircle id="marker-circle" fill="#5048E5" size={1} refX={2} />
                <rect width={width} height={height } fill="#fff" rx={14} ry={14} />
                <Group left={graph_offset*2}>
                <GridRows scale={graphData.yScale} width={width - graph_offset*3} stroke="#e0e0e0"/>
                    <GridColumns scale={graphData.xScale} height={height-60} stroke="#e0e0e0" top={30}/>
                    <AxisBottom left={0} top={height-45} scale={graphData.xScale} stroke='#838181' label={"bottom axis label"}/>
                    <AxisLeft left={0} scale={graphData.yScale} stroke='#838181' label={"left axis label"}/>
                    {graphData.lineData.slice(Math.floor(graphData.start), Math.floor(graphData.end)+1).map((d, j) => (
                        <circle
                        key={j}
                        r={2}
                        cx={graphData.xScale(getX(d))}
                        cy={graphData.yScale(getY(d))}
                        stroke="#5048E5"
                        />
                    ))}
                    <LinePath
                    curve={allCurves[curveType]}
                    data={graphData.lineData.slice(Math.floor(graphData.start), Math.floor(graphData.end)+1)}
                    x={(d) => graphData.xScale(getX(d)) ?? 0}
                    y={(d) => graphData.yScale(getY(d)) ?? 0}
                    stroke="#5048E5"
                    strokeWidth={2}
                    strokeOpacity={1}
                    shapeRendering="geometricPrecision"
                    markerMid="url(#marker-circle)"
                    markerStart="url(#marker-circle)"
                    markerEnd="url(#marker-circle)"
                    />
                    <AreaClosed
                        fill="#5048E515"
                        curve={allCurves[curveType]}
                        data={graphData.lineData.slice(Math.floor(graphData.start), Math.floor(graphData.end)+1)}
                        x={(d) => graphData.xScale(getX(d)) ?? 0}
                        y={(d) => graphData.yScale(getY(d)) ?? 0}
                        yScale={graphData.yScale}
                    />
                    <Bar
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="transparent"
                        rx={14}
                        onTouchStart={handleTooltip}
                        onTouchMove={handleTooltip}
                        onMouseMove={handleTooltip}
                        onMouseLeave={() => hideTooltip()}
                    />
                    {tooltipData && (
                    <g>
                        <Line
                        from={{ x: tooltipLeft, y: height * 0.08 }}
                        to={{ x: tooltipLeft, y: height * 0.85}}
                        stroke="#5048E5"
                        strokeWidth={2}
                        pointerEvents="none"
                        strokeDasharray="5,2"
                        />
                        <circle
                        cx={tooltipLeft}
                        cy={tooltipTop + 1}
                        r={4}
                        fill="black"
                        fillOpacity={0.1}
                        stroke="black"
                        strokeOpacity={0.1}
                        strokeWidth={2}
                        pointerEvents="none"
                        />
                        <circle
                        cx={tooltipLeft}
                        cy={tooltipTop}
                        r={4}
                        fill="#5048E5"
                        stroke="white"
                        strokeWidth={2}
                        pointerEvents="none"
                        />
                        {/* <div>
                        <TooltipWithBounds
                            key={Math.random()}
                            top={tooltipTop + 150}
                            left={tooltipLeft + 40}
                        >
                            {`${getY(tooltipData)}`}
                        </TooltipWithBounds>
                        </div> */}
                    </g>
                    )}
                    )
                </Group>
                    );
          </svg>
          </SVGContainer>
          {tooltipData && (
            <div>
              <TooltipWithBounds
                key={Math.random()}
                top={tooltipTop + 15}
                left={tooltipLeft + 40}
                
              >
                {`${getY(tooltipData)}`}
              </TooltipWithBounds>
            </div>
          )}
        </GraphContainer>
    )}

const Clickable = styled.img`
  cursor: pointer;
`;

const ButtonTray = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: ${props=> props.width - 40}px ;
`

const GraphContainer = styled.div`
  position: relative;
`;

const SVGContainer = styled.div`
  border-radius: 14px;
  border: 1px solid #838181;
  padding: 10px;
  width: ${props=> props.width}px;
`
