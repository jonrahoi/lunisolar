import React from 'react';
import CalendarMonth from './CalendarMonth'

import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';
const months = [1,2,3,4,5,6,7,8,9,10,11,12]

class CircularCalendar extends React.Component {
  render() {
    return (
      <Group>
        { months.map(m => {
          return <CalendarMonth month={m} />
        }) }
      </Group>
    )
  }
}

export default CircularCalendar
