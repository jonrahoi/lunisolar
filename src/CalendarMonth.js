import React from 'react';
//import Component from 'react';
import {Layer, Stage, Arc} from 'react-konva';
import logo from './logo.svg';
//import './konvajs';
//import './CalendarMonth.css';
import CalendarDay from './CalendarDay';

class CalendarMonth extends React.Component {
  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <CalendarDay />
        </Layer>
      </Stage>
    );
  }
}
export default CalendarMonth;
