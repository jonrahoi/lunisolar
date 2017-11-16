import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer, Text} from 'react-konva';

const style = {
  border: '5px solid red'
}

const calendar = {
  "Roman": "yellow",
  "Hindu": "green",
  "Islamic": "pink",
  "Hebrew": "violet",
  "Chinese": "red"
};


let colorSelection = (dataFromSelectCalendar) => {
  console.log("received from select calendar ",dataFromSelectCalendar);
}

ReactDOM.render(
  <Stage width={1500} height={800} style={style}>
  <Layer>
  <Group>
  <CircularCalendar width={1500} height={800} yearText = {2017} />
  {
    Object.keys(calendar).map(function(c,idx){
      return <SelectCalendar width={1500/10} height={800/10+(idx*40)} calendar={c} calendarColor={calendar[c]} colorSelection={colorSelection.bind(this)}/>
    })
  }
  </Group>
  </Layer>
  </Stage>, document.getElementById('root'))
