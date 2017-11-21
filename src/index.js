import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer, Text} from 'react-konva';

const style = {
  border: '5px solid red'
}

ReactDOM.render(
  <Stage width={3500} height={1500} style={style}>
  <Layer>
  <Group>
  <CircularCalendar width={1700} height={1000} yearText={2017}/>
  </Group>
  </Layer>
  </Stage>, document.getElementById('root'))
