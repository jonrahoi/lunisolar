import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer} from 'react-konva';

const style = {
  border: '5px solid red'
}

ReactDOM.render(
  <Stage width={1500} height={800} style={style}>
  <Layer>
  <Group>
  <CircularCalendar width={1500} height={800} yearText={2017}/>
  </Group>
  </Layer>
  </Stage>, document.getElementById('root'))
