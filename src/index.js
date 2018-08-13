import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import {Stage, Group, Layer} from 'react-konva';

const style = {
  border: '5px solid red'
}

ReactDOM.render(
  <Stage width={3500} height={1500} style={style}>
  <Layer>
  <Group>
  <CircularCalendar width={1700} height={1000} yearText={(new Date()).getFullYear()}/>
  </Group>
  </Layer>
  </Stage>, document.getElementById('root'))
