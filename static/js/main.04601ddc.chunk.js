(this["webpackJsonpnfr21-telemetry"]=this["webpackJsonpnfr21-telemetry"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var r,s,i,o=n(0),c=n.n(o),a=n(15),l=n.n(a),u=n(3),d=n(7),p=n(4),b=n(1);function j(e){return Object(b.jsxs)(h,{children:[Object(b.jsx)(b.Fragment,{children:"Live Data:"}),Object(b.jsx)(x,{active:e.isLive,onClick:function(){return e.setIsLive(!e.isLive)},children:Object(b.jsx)(O,{active:e.isLive})})]})}var f,h=p.b.div(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),x=p.b.div(s||(s=Object(u.a)(["\n  width: 46px;\n  height: 24px;\n  position: relative;\n  background: ",";\n  transition: background 0.2s ease;\n  border-radius: 12px;\n"])),(function(e){return e.active?"#42D060":"#ebebeb"})),O=p.b.div(i||(i=Object(u.a)(["\n  position: absolute;\n  top: 2px;\n  left: ","px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  transition: left 0.2s ease;\n"])),(function(e){return e.active?24:2}));function v(e){return Object(b.jsx)(S,{isFlex:e.flex,expand:e.expand,scroll:e.scroll,children:e.children})}var g,S=p.b.div(f||(f=Object(u.a)(["\n  width: calc(100% - 18px);\n  border: 1px solid #818181;\n  border-radius: 9px;\n  padding: 8px;\n  height: ",";\n  overflow-y: ",";\n  display: ",";\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.expand?"100%":"auto"}),(function(e){return e.scroll?"scroll":"visible"}),(function(e){return e.isFlex?"flex":"auto"}));function m(){return Object(b.jsx)(T,{})}var w,y,k,C,M,L,D,E,T=p.b.div(g||(g=Object(u.a)(["\n  height: 20px;\n"]))),R=n(44),G=n(10),z=n(11),F=n(12),N=n(14),V=n(62),W=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(G.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(z.a)(n,[{key:"removeSelected",value:function(e){var t=this.props.selectedSensors;this.props.setCurrentSensors(t.filter((function(t){return t.label!==e.target.value}))),this.forceUpdate()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{children:Object(b.jsxs)(X,{children:[Object(b.jsx)(b.Fragment,{children:this.props.label}),Object(b.jsx)(I,{onClick:function(t){return e.removeSelected(t)},value:this.props.label,children:"\u2573"})]})}),Object(b.jsx)(Y,{})]})}}]),n}(o.Component),A=W,X=p.b.div(w||(w=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=p.b.button(y||(y=Object(u.a)(["\n  width: 20px;\n  height: 20x;\n  font-size: 8px;\n  cursor: pointer;\n  border: 0px;\n  background-color: white;\n"]))),Y=p.b.div(k||(k=Object(u.a)(["\n  height: 5px;\n"]))),U=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).options=B.map((function(e){return e.group===r.props.selectedGroup?e.sensors.map((function(e){return{value:e,label:e,id:e}})):[]})).flat(),r.selected=[],r}return Object(z.a)(n,[{key:"componentDidUpdate",value:function(e){e.selectedGroup!==this.props.selectedGroup&&(this.updateSelectedGroup(this.props.selectedGroup),this.updateOptions(this.props.selectedGroup))}},{key:"updateSelectedGroup",value:function(e){this.setState({selectedGroup:e})}},{key:"updateOptions",value:function(e){var t=this;this.options=B.map((function(e){return e.group===t.props.selectedGroup?e.sensors.map((function(e){return{value:e,label:e,id:e}})):[]})).flat()}},{key:"addSelected",value:function(e){null!=e&&-1===this.props.selectedSensors.indexOf(e[0])&&this.props.setCurrentSensors(this.props.selectedSensors.concat(e))}},{key:"clearSelected",value:function(e){this.props.setCurrentSensors([])}},{key:"removeSelected",value:function(e){var t=this.props.selectedSensors;this.props.setCurrentSensors(t.filter((function(t){return t.label!==e.target.value}))),this.forceUpdate()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V.a,{closeMenuOnSelect:!1,placeholder:"Select from "+this.props.selectedGroup+"...",isMulti:!0,options:this.options.filter((function(t){return e.props.selectedSensors.every((function(e){return e.label!==t.label}))})),value:this.props.selectedGroup,onChange:function(t){return e.addSelected(t)},styles:{multiValueLabel:function(e){return Object(R.a)(Object(R.a)({},e),{},{width:"100px","font-size":"16px"})}}}),Object(b.jsx)(P,{}),0!==this.props.selectedSensors.length&&Object(b.jsx)(H,{onClick:function(t){return e.clearSelected()},children:"Clear All"}),this.props.selectedSensors.map((function(t){return Object(b.jsx)(A,{onClick:e.removeSelected,label:t.label,selectedSensors:e.props.selectedSensors,setCurrentSensors:e.props.setCurrentSensors})}))]})}}]),n}(o.Component),B=[{group:"Safety Sensors",sensors:["Sensor A","Sensor B","Sensor C","Sensor Q","Sensor R","Sensor S","Sensor T","Sensor U","Sensor V"]},{group:"Chasis Sensors",sensors:["Sensor D","Sensor E","Sensor F"]},{group:"Aero Sensors",sensors:["Sensor G","Sensor H","Sensor I"]},{group:"Suspension Sensors",sensors:["Sensor J","Sensor K","Sensor L"]},{group:"Powertrain Sensors",sensors:["Sensor M","Sensor N","Sensor O"]}],H=p.b.button(C||(C=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  cursor: pointer;\n  border: 0px;\n  background-color: white;\n"]))),P=p.b.div(M||(M=Object(u.a)(["\n  height: 10px;\n"])));function J(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(b.Fragment,{children:"Select Sensor Group:"}),Object(b.jsx)(Z,{}),Object(b.jsx)(Q,{onChange:function(t){e.setSelectedGroup(t.target.value)},children:$.map((function(e,t){return Object(b.jsx)(q,{children:e.group},t)}))})]})}var K,Q=p.b.select(L||(L=Object(u.a)(["\n    width: 220px;\n    height: 30px;\n    font-size: 14px;\n    font-family: 'Open Sans';\n    cursor: pointer;\n"]))),q=p.b.option(D||(D=Object(u.a)(["\n    font-size: 14px;\n    cursor: pointer;\n"]))),Z=p.b.div(E||(E=Object(u.a)(["\n    height: 10px;\n"]))),$=[{id:1,group:"Safety Sensors"},{id:2,group:"Chasis Sensors"},{id:3,group:"Aero Sensors"},{id:4,group:"Suspension Sensors"},{id:5,group:"Powertrain Sensors"}];function _(e){var t=Object(o.useState)("Safety Sensors"),n=Object(d.a)(t,2),r=n[0],s=n[1];return Object(b.jsxs)(te,{children:[Object(b.jsx)(v,{children:Object(b.jsx)(J,{selectedGroup:r,setSelectedGroup:function(e){return s(e)}})}),Object(b.jsx)(m,{}),Object(b.jsx)(v,{expand:!0,children:Object(b.jsx)(U,{selectedGroup:r,selectedSensors:e.currentSensors,setCurrentSensors:function(t){return e.setCurrentSensors(t)}})})]})}var ee,te=p.b.div(K||(K=Object(u.a)(["\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));function ne(e){var t=Object(o.useState)(!1),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(o.useState)(""),c=Object(d.a)(i,2),a=c[0],l=c[1];return Object(b.jsx)(v,{flex:!0,children:Object(b.jsx)(se,{type:"text",placeholder:"Enter Session Name.",value:a,onInput:function(e){return l(e.target.value)},onFocus:function(e){return s(!0)},onBlur:function(t){return s(!1),void e.setSessionName(a)},onKeyDown:function(e){!function(e){13===e.keyCode&&e.target.blur()}(e)},focus:r})})}var re,se=p.b.input(ee||(ee=Object(u.a)(["\n    border: none;\n    padding-top: 3px;\n    width: 100%;\n    font-weight: "," ;\n    ::placeholder {\n        font-weight: normal;\n    }\n    text-overflow: ellipsis;\n    :focus {\n        outline: none;\n    }\n"])),(function(e){return e.focus?"normal":"bold"})),ie=n.p+"static/media/logo.7c344053.png";function oe(e){return Object(b.jsxs)(ae,{children:[Object(b.jsx)("img",{src:ie,alt:"NU Formula Logo"}),Object(b.jsx)(m,{}),Object(b.jsx)(v,{children:Object(b.jsx)(j,{isLive:e.isLive,setIsLive:function(t){return e.setIsLive(t)}})}),Object(b.jsx)(m,{}),e.isLive&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ne,{setSessionName:function(t){return e.setSessionName(t)}}),Object(b.jsx)(m,{})]}),Object(b.jsx)(_,{currentSensors:e.currentSensors,setCurrentSensors:function(t){return e.setCurrentSensors(t)}})]})}var ce,ae=p.b.div(re||(re=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 240px;\n  height: calc(100vh - 60px);\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));function le(){return Object(b.jsx)(de,{placeholder:"Enter Name or Date"})}var ue,de=p.b.input(ce||(ce=Object(u.a)(["\n  border: 1px solid #818181;\n  border-radius: 9px;\n  padding: 8px;\n  flex: 1;\n  margin-top: 10px;\n  margin-bottom: 10px; // Renders weird on web but works in electron\n"])));function pe(){return Object(b.jsx)(fe,{})}var be,je,fe=p.b.div(ue||(ue=Object(u.a)(["\n  width: 20px;\n"]))),he=n.p+"static/media/upload.78116883.svg";function xe(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=(t[0],t[1]),r=Object(o.useRef)(null);return Object(b.jsxs)(ve,{children:[Object(b.jsx)("input",{type:"file",hidden:!0,ref:r,onChange:function(e){!function(e){var t=e.target.files[0];n(t)}(e)}}),Object(b.jsx)(pe,{}),Object(b.jsx)(ge,{src:he,alt:"upload",width:"25px",height:"25px",onClick:function(){r.current.click()}}),Object(b.jsx)(pe,{})]})}var Oe,ve=p.b.div(be||(be=Object(u.a)(["\n  flex: 0.1;\n  max-width: 110px;\n  display: flex;\n  flex-direction: row;\n  justify-content: right;\n"]))),ge=p.b.img(je||(je=Object(u.a)(["\n  cursor: pointer;\n"])));function Se(e){return Object(b.jsx)(we,{src:e.src,alt:e.label,width:"25px",height:"25px",onClick:function(){e.setViewState(e.label)},selected:e.selected})}var me,we=p.b.img(Oe||(Oe=Object(u.a)(["\n  cursor: pointer;\n  filter: brightness(",");\n  transition: 0.07s ease;\n"])),(function(e){return e.selected?.5:1}));function ye(e){return Object(b.jsx)(Ce,{children:e.children})}var ke,Ce=p.b.div(me||(me=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Me=n.p+"static/media/stop.6959f135.svg",Le=n.p+"static/media/play.1e94e6ce.svg",De=n.p+"static/media/pause.48f7c4bd.svg";function Ee(e){return Object(b.jsxs)(ye,{children:[Object(b.jsx)(Se,{src:Me,label:"stop",setViewState:e.setViewState,selected:"stop"===e.viewState}),Object(b.jsx)(pe,{}),"play"!==e.viewState?Object(b.jsx)(Se,{src:Le,label:"play",setViewState:e.setViewState,selected:"pause"===e.viewState}):Object(b.jsx)(Se,{src:De,label:"pause",setViewState:e.setViewState,selected:"play"===e.viewState})]})}function Te(e){return Object(b.jsx)(Ge,{valid:e.valid,children:e.children})}var Re,Ge=p.b.div(ke||(ke=Object(u.a)(["\n  color: ","\n"])),(function(e){return e.valid?"#42D060":"#BE0707"}));function ze(e){var t;return t=e.isLive?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(ye,{children:["Status:",e.receiving?Object(b.jsx)(Te,{valid:!0,children:"\u2008Reading Live Data"}):Object(b.jsx)(Te,{children:"\u2008No Data Received"})]}),Object(b.jsx)(Ee,{viewState:e.viewState,setViewState:e.setViewState})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(le,{}),Object(b.jsx)(xe,{})]}),Object(b.jsx)(Xe,{children:t})}var Fe,Ne,Ve,We,Ae,Xe=p.b.div(Re||(Re=Object(u.a)(["\n  width: calc(100% + 16px);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"])));function Ie(e){var t=function(){"graphs"===e.dispType?e.setDispType("numbers"):e.setDispType("graphs")};return Object(b.jsx)(Pe,{children:Object(b.jsxs)(Je,{children:[Object(b.jsxs)(Ke,{onClick:function(){return t()},children:[Object(b.jsx)(Qe,{active:"graphs"===e.dispType,children:"Graph"}),Object(b.jsx)(Qe,{active:"numbers"===e.dispType,children:"Number"})]}),Object(b.jsx)(qe,{onClick:function(){return t()},isLeft:"graphs"===e.dispType})]})})}var Ye,Ue,Be,He,Pe=p.b.div(Fe||(Fe=Object(u.a)(["\n  position: relative;\n  float: right;\n  right: 136px;\n  top: -42px;\n"]))),Je=p.b.div(Ne||(Ne=Object(u.a)(["\n  width: 136px;\n  height: 34px;\n  top: 0;\n  left: 0;\n  position: absolute;\n"]))),Ke=p.b.div(Ve||(Ve=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  background: #fafafa;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),Qe=p.b.div(We||(We=Object(u.a)(["\n  color: ",";\n  font-size: 12px;\n  z-index: 1;\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.1s ease;\n"])),(function(e){return e.active?"#000":"#838181"})),qe=p.b.div(Ae||(Ae=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: ","px;\n  width: 68px;\n  height: 100%;\n  background-color: #e5e4fB;\n  display: inline;\n  border-top-left-radius: ","px;\n  border-bottom-left-radius: ","px;\n  border-top-right-radius: ","px;\n  border-bottom-right-radius: ","px;\n  transition: all 0.1s ease;\n"])),(function(e){return e.isLeft?0:68}),(function(e){return e.isLeft?8:0}),(function(e){return e.isLeft?8:0}),(function(e){return e.isLeft?0:8}),(function(e){return e.isLeft?0:8})),Ze=n(144),$e=n(46),_e=n(157),et=n(145),tt=n(155),nt=n(63),rt=n(151),st=n(152),it=n(153),ot=n(149),ct=n(48),at=n(154),lt=n(148),ut=n(150),dt=n.p+"static/media/scrollleft.7b05da38.svg",pt=n.p+"static/media/scrollright.8e3b1130.svg",bt=n.p+"static/media/zoomin.f628affa.svg",jt=n.p+"static/media/zoomout.dc533183.svg",ft=n(146),ht=n(147),xt=n(156),Ot=-1,vt=function(){for(var e=-1,t=[],n=0;n<1;n++){var r={time:++e,value:Math.floor(100*Math.random())};t.push(r)}return Ot=e,t}();var gt=300,St=800,mt=function(e){return e.time},wt=function(e){return e.value},yt=Object(at.a)({domain:[0,Object(Ze.a)(vt,mt)],range:[0,710]}),kt=Object(at.a)({domain:[0,1.2*Object(Ze.a)(vt,wt)],range:[255,30]});function Ct(e){var t="curveLinear",n=Object(o.useState)({lineData:vt,xScale:yt,yScale:kt,start:0,end:vt.length-1}),r=Object(d.a)(n,2),s=r[0],i=(r[1],Object(o.useRef)());function c(e){e.xScale=Object(at.a)({domain:[mt(e.lineData[Math.floor(e.start)]),mt(e.lineData[Math.floor(e.end)])],range:[0,710]}),e.yScale=Object(at.a)({domain:[0,1.2*Object(Ze.a)(e.lineData.slice(Math.floor(e.start),Math.floor(e.end)),wt)],range:[255,30]})}function a(){clearTimeout(i.current),i.current=setTimeout((function(){i.current=!1}),300)}function l(t,n,r){"in"==n?t.start<t.end-2&&(t.start+=r):"out"==n&&t.start>r&&(t.start-=r),c(t),e.rerender()}function u(t,n,r){"right"==n?t.end<Object(Ze.a)(t.lineData,mt)-r&&(t.start+=r,t.end+=r):"left"==n&&t.start>r&&(t.start-=r,t.end-=r),c(t),e.rerender()}Object(o.useEffect)((function(){var e=function(e){return i.current&&e.preventDefault()};return document.body.addEventListener("wheel",e,{passive:!1}),function(){return document.body.removeEventListener("wheel",e)}}),[]);var p=Object(et.a)(),j=p.showTooltip,f=p.tooltipData,h=p.hideTooltip,x=p.tooltipTop,O=void 0===x?0:x,v=p.tooltipLeft,g=void 0===v?0:v,S=Object($e.a)((function(e){return e.time})).left,m=Object(o.useCallback)((function(e){var t=(Object(tt.a)(e)||{x:60}).x;t-=60;var n=s.xScale.invert(t),r=S(s.lineData,n,1),i=s.lineData[r-1],o=s.lineData[r],c=i;o&&mt(o)&&(c=n.valueOf()-mt(i).valueOf()>mt(o).valueOf()-n.valueOf()?o:i),j({tooltipData:c,tooltipLeft:s.xScale(mt(c)),tooltipTop:s.yScale(wt(c))})}),[j,s.yScale,s.yScale]);return Object(b.jsxs)(Rt,{onKeyDown:function(e){return function(e){"38"==e.keyCode?(l(s,"in",1),a()):"40"==e.keyCode?(l(s,"out",1),a()):"37"==e.keyCode?(u(s,"left",1),a()):"39"==e.keyCode&&(u(s,"right",1),a())}(e)},children:[Object(b.jsx)("button",{onClick:function(){return function(t){Ot++,t.end>=30&&t.start++,t.end++;var n={time:Ot,value:Math.floor(100*Math.random())};t.lineData.push(n),c(t),e.rerender()}(s)},children:"update"})," ",Object(b.jsx)("br",{}),Object(b.jsxs)(Tt,{width:St,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(Et,{src:dt,alt:"scroll left",width:"25px",height:"25px",onClick:function(){u(s,"left",1)}}),Object(b.jsx)(Et,{src:pt,alt:"scroll right",width:"25px",height:"25px",onClick:function(){u(s,"right",1)}})]}),Object(b.jsx)(Et,{src:bt,alt:"zoom in",width:"25px",height:"25px",onClick:function(){l(s,"in",1)}}),Object(b.jsx)(Et,{src:jt,alt:"zoom out",width:"25px",height:"25px",onClick:function(){l(s,"out",1)}})]}),Object(b.jsxs)(Gt,{width:St,children:[Object(b.jsx)("div",{children:e.sensorName}),Object(b.jsxs)("svg",{width:St,height:gt,onWheel:function(e){return function(e){var t=s;a(),Math.abs(e.deltaX)>Math.abs(e.deltaY)&&Math.abs(e.deltaX)>1?u(t,e.deltaX<0?"right":"left",.2):l(t,e.deltaY<0?"in":"out",.2)}(e)},children:[Object(b.jsx)(_e.a,{id:"marker-circle",fill:"#5048E5",size:1,refX:2}),Object(b.jsx)("rect",{width:St,height:gt,fill:"#fff",rx:14,ry:14}),Object(b.jsxs)(nt.a,{left:60,children:[Object(b.jsx)(ft.a,{scale:s.yScale,width:710,stroke:"#e0e0e0"}),Object(b.jsx)(ht.a,{scale:s.xScale,height:240,stroke:"#e0e0e0",top:30}),Object(b.jsx)(lt.a,{left:0,top:255,scale:s.xScale,stroke:"#838181",label:"bottom axis label"}),Object(b.jsx)(ut.a,{left:0,scale:s.yScale,stroke:"#838181",label:"left axis label"}),s.lineData.slice(Math.floor(s.start),Math.floor(s.end)+1).map((function(e,t){return Object(b.jsx)("circle",{r:2,cx:s.xScale(mt(e)),cy:s.yScale(wt(e)),stroke:"#5048E5"},t)})),Object(b.jsx)(rt.a,{curve:ct[t],data:s.lineData.slice(Math.floor(s.start),Math.floor(s.end)+1),x:function(e){var t;return null!==(t=s.xScale(mt(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=s.yScale(wt(e)))&&void 0!==t?t:0},stroke:"#5048E5",strokeWidth:2,strokeOpacity:1,shapeRendering:"geometricPrecision",markerMid:"url(#marker-circle)",markerStart:"url(#marker-circle)",markerEnd:"url(#marker-circle)"}),Object(b.jsx)(st.a,{fill:"#5048E515",curve:ct[t],data:s.lineData.slice(Math.floor(s.start),Math.floor(s.end)+1),x:function(e){var t;return null!==(t=s.xScale(mt(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=s.yScale(wt(e)))&&void 0!==t?t:0},yScale:s.yScale}),Object(b.jsx)(it.a,{x:0,y:0,width:St,height:gt,fill:"transparent",rx:14,onTouchStart:m,onTouchMove:m,onMouseMove:m,onMouseLeave:function(){return h()}}),f&&Object(b.jsxs)("g",{children:[Object(b.jsx)(ot.a,{from:{x:g,y:24},to:{x:g,y:255},stroke:"#5048E5",strokeWidth:2,pointerEvents:"none",strokeDasharray:"5,2"}),Object(b.jsx)("circle",{cx:g,cy:O+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),Object(b.jsx)("circle",{cx:g,cy:O,r:4,fill:"#5048E5",stroke:"white",strokeWidth:2,pointerEvents:"none"})]}),")"]}),");"]})]}),f&&Object(b.jsx)("div",{children:Object(b.jsx)(xt.a,{top:O+15,left:g+40,children:"".concat(wt(f))},Math.random())})]})}var Mt,Lt,Dt,Et=p.b.img(Ye||(Ye=Object(u.a)(["\n  cursor: pointer;\n"]))),Tt=p.b.div(Ue||(Ue=Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  position: absolute;\n  top: 30px;\n  left: ","px ;\n"])),(function(e){return e.width-40})),Rt=p.b.div(Be||(Be=Object(u.a)(["\n  position: relative;\n"]))),Gt=p.b.div(He||(He=Object(u.a)(["\n  border-radius: 14px;\n  border: 1px solid #838181;\n  padding: 10px;\n  width: ","px;\n"])),(function(e){return e.width}));function zt(e){return Object(b.jsx)(b.Fragment,{children:e.sensors.map((function(t,n){return Object(b.jsxs)("div",{children:[0!==n&&Object(b.jsx)(m,{}),Object(b.jsx)(Ct,{width:e.width,sensorName:t.label,k:n,rerender:function(){e.rerender()}})]},n)}))})}function Ft(e){return Object(b.jsxs)(Vt,{onMouseDown:function(){e.sendIndex()},children:[Object(b.jsx)(Wt,{percentage:e.percentage,children:Math.round(100*e.value)/100}),Object(b.jsx)(At,{unit:!0,children:e.unit}),Object(b.jsx)(At,{children:e.label})]})}var Nt,Vt=p.b.div(Mt||(Mt=Object(u.a)(["\n  width: 240px;\n  height: 190px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #818181;\n  user-select: none;\n"]))),Wt=p.b.div(Lt||(Lt=Object(u.a)(["\n  font-size: 72px;\n  color: ",";\n"])),(function(e){return["hsl(",(120*e.percentage).toString(10),",75%,50%)"].join("")})),At=p.b.div(Dt||(Dt=Object(u.a)(["\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(e){return e.unit?"#000":"#818181"})),Xt=c.a.createContext(null),It=(Xt.Consumer,function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).state={mouseX:0,mouseY:0,dragging:!1,setMouseCoords:function(e,t){r.setState({mouseX:e,mouseY:t})},setDragging:function(e){r.setState({dragging:e})}},r}return Object(z.a)(n,[{key:"render",value:function(){return Object(b.jsx)(Xt.Provider,{value:this.state,children:this.props.children})}}]),n}(o.Component));function Yt(e){var t=Object(o.useContext)(Xt),n=Object(o.useState)(0),r=Object(d.a)(n,2),s=r[0],i=r[1],c=Object(o.useState)([]),a=Object(d.a)(c,2),l=a[0],u=a[1],p=Object(o.useState)([]),j=Object(d.a)(p,2),f=j[0],h=j[1],x=Object(o.useState)([]),O=Object(d.a)(x,2),v=(O[0],O[1],Object(o.useState)(0)),g=Object(d.a)(v,2),S=(g[0],g[1]),m=Object(o.useState)(0),w=Object(d.a)(m,2),y=w[0],k=w[1],C=Object(o.useRef)(null);Object(o.useEffect)((function(){return window.addEventListener("resize",M),M(),function(){return window.removeEventListener("resize",M)}}),[]),Object(o.useEffect)((function(){if(s){var e=L();u(e[0]),h(e[1])}}),[s,e]),Object(o.useEffect)((function(){}),[l,f]),Object(o.useEffect)((function(){if(!t.dragging){console.log(l),console.log(f),console.log("".concat(t.mouseX," ").concat(t.mouseY));for(var e=t.mouseY,n=t.mouseX,r=0;r<f.length;r++)e>=f[r][0]&&e<=f[r][1]&&n-y>0&&l[r]&&l[r][0]<n&&l[r][0]+l[r][1]>n&&console.log(l[r])}}),[t.dragging]);var M=function(){C.current&&i(C.current.getBoundingClientRect())},L=function(){for(var t=240,n=190,r=Math.floor(s.width/t),i=(s.width-r*t)/(2*r),o=Math.floor(e.sensors.length/r),c=e.sensors.length%r,a=(s.width-c*t)/(2*c),l=Array(r*o+c),u=Array(r*o+c),d=Array(r*o+c),p=0;p<r;p++)for(var b=s.x+(i+120)+p*(t+2*i),j=0;j<o;j++){var f=p+j*r;l[f]=[b,2*i+t];var h=204*j+s.y+13;u[f]=[h-e.scrollHeight,h+n-e.scrollHeight],d[f]=0===p||p===r-1?1:0}for(var x=0;x<c;x++){var O=s.x+(a+120)+x*(t+2*a);l[r*o+x]=[O,2*a+t];var v=204*o+s.y+13;u[x+o*r]=[v-e.scrollHeight,v+n-e.scrollHeight]}return[l,u]};return Object(b.jsx)(Ht,{className:"numbers",ref:C,children:e.sensors.map((function(e,t){var n=Math.random();return Object(b.jsx)(Ft,{value:30*n,percentage:n,unit:"m/s",label:e.label,sendIndex:function(){S(t),k(l[t])}},t)}))})}var Ut,Bt,Ht=p.b.div(Nt||(Nt=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  margin-top: -12px;\n  > * {\n    margin-top: 12px;\n  }\n"]))),Pt=function(e){Object(F.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(G.a)(this,n),(r=t.call(this,e)).state={dispType:"graphs",scrollAmt:0,whatthefuck:!0},r.containerRef=null,r.setContainerRef=function(e){r.containerRef=e},r.updateWidth=function(){r.containerRef&&(r.content="graphs"===r.state.dispType?Object(b.jsx)(zt,{viewState:r.props.viewState,sensors:r.props.sensors,setCurrentSensors:function(e){return r.props.setCurrentSensors(e)},width:r.containerRef?r.containerRef.clientWidth-16:0,rerender:function(){r.setState({whatthefuck:!0})}}):Object(b.jsx)(Yt,{viewState:r.props.viewState,sensors:r.props.sensors,setCurrentSensors:function(e){return r.props.setCurrentSensors(e)}}),r.setState({whatthefuck:!0}))},r.handleScroll=function(){var e=r.containerRef.scrollTop;r.setState({scrollAmt:e})},r}return Object(z.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWidth),this.updateWidth()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(Jt,{ref:this.setContainerRef,onScroll:this.handleScroll,children:[Object(b.jsx)(Ie,{dispType:this.state.dispType,setDispType:function(t){return e.setState({dispType:t})}}),this.props.sensors&&this.props.sensors.length>0?"graphs"===this.state.dispType?Object(b.jsx)(zt,{viewState:this.props.viewState,sensors:this.props.sensors,setCurrentSensors:function(t){return e.props.setCurrentSensors(t)},width:this.containerRef?this.containerRef.clientWidth-16:0,rerender:function(){e.setState({whatthefuck:!0})}}):Object(b.jsx)(Yt,{viewState:this.props.viewState,scrollHeight:this.state.scrollAmt,sensors:this.props.sensors,setCurrentSensors:function(t){return e.props.setCurrentSensors(t)}}):Object(b.jsx)(Te,{children:"No Selected Sensors"})]})}}]),n}(o.Component),Jt=p.b.div(Ut||(Ut=Object(u.a)(["\n  width: 100%;\n  border: 1px solid #818181;\n  border-radius: 9px;\n  padding: 8px;\n  height: 100%;\n  padding-top: 50px;\n  overflow-y: scroll;\n  ::-webkit-scrollbar-thumb {\n    background-color: #dadce0;\n    border: 4px solid transparent;\n    border-radius: 8px;\n    background-clip: padding-box;  \n  }\n  \n  ::-webkit-scrollbar {\n    width: 16px;\n  }\n"])));function Kt(e){var t=Object(o.useState)("stop"),n=Object(d.a)(t,2),r=n[0],s=n[1];return Object(b.jsxs)(qt,{children:[Object(b.jsx)(ze,{isLive:e.isLive,receiving:!1,viewState:r,setViewState:function(e){return s(e)}}),Object(b.jsx)(m,{}),Object(b.jsx)(Pt,{viewState:r,sensors:e.currentSensors,setCurrentSensors:function(t){return e.setCurrentSensors(t)}})]})}var Qt,qt=p.b.div(Bt||(Bt=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 300px;\n  height: calc(100vh - 80px);\n  width: calc(100vw - 420px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-bottom: 30px;\n  padding-top: 50px;\n"])));function Zt(){var e=Object(o.useContext)(Xt),t=Object(o.useState)(!1),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(o.useState)([]),c=Object(d.a)(i,2),a=c[0],l=c[1],u=Object(o.useState)(""),p=Object(d.a)(u,2),j=(p[0],p[1]);return Object(o.useEffect)((function(){}),[e.mouseX,e.mouseY,e.dragging]),Object(b.jsxs)("div",{onMouseDown:function(t){!function(t){e.setMouseCoords(t.clientX,t.clientY),e.setDragging(!0)}(t)},onMouseUp:function(t){!function(t){e.setMouseCoords(t.clientX,t.clientY),e.setDragging(!1)}(t)},children:[Object(b.jsx)($t,{}),Object(b.jsx)(oe,{isLive:r,setIsLive:function(e){return s(e)},currentSensors:a,setCurrentSensors:function(e){return l(e)},setSessionName:function(e){return j(e)}}),Object(b.jsx)(Kt,{isLive:r,currentSensors:a,setCurrentSensors:function(e){return l(e)}})]})}var $t=Object(p.a)(Qt||(Qt=Object(u.a)(["\n  body {\n    margin: 0;\n    font-family: 'Open Sans', sans-serif;\n  }\n"])));l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(It,{children:Object(b.jsx)(Zt,{})})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.04601ddc.chunk.js.map