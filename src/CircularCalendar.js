import React from 'react';
import CalendarMonth from './CalendarMonth'

import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';
const months = [1,2,3,4,5,6,7,8,9,10,11,12]

class CircularCalendar extends React.Component {
  render() {
    return (
      /*<Group>
        { months.map(m => {
          return <CalendarMonth month={m} />
        }) }
      </Group>*/

      <Group>
        <CalendarMonth rotation={30}/>
        <CalendarMonth rotation={60}/>
        <CalendarMonth rotation={90}/>
        <CalendarMonth rotation={120}/>
        <CalendarMonth rotation={150}/>
        <CalendarMonth rotation={180}/>
        <CalendarMonth rotation={210}/>
        <CalendarMonth rotation={240}/>
        <CalendarMonth rotation={270}/>
        <CalendarMonth rotation={300}/>
        <CalendarMonth rotation={330}/>
        <CalendarMonth rotation={360}/>
      </Group>
    )
  }
}

export default CircularCalendar
