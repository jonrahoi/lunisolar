import React from 'react';
//import Component from 'react';
import Rect from 'react-konva';
//import Arc from 'react-konva';
import logo from './logo.svg';
//import './konvajs.js';
//import './CalendarDay.css';

class CalendarDay extends React.Component {
  render() {
    return (
      <Rect
        x={10}
        y={10}
        width={50}
        height={50}
        fill={"orange"}
        shadowBlur={5}

      />
    );
  }
}

export default CalendarDay;
