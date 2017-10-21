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
        <CalendarMonth rotation={30} color={'#303030'}/>
        <CalendarMonth rotation={60} color={'grey'}/>
        <CalendarMonth rotation={90}color={'#303030'}/>
        <CalendarMonth rotation={120}color={'grey'}/>
        <CalendarMonth rotation={150}color={'#303030'}/>
        <CalendarMonth rotation={180}color={'grey'}/>
        <CalendarMonth rotation={210}color={'#303030'}/>
        <CalendarMonth rotation={240}color={'grey'}/>
        <CalendarMonth rotation={270}color={'#303030'}/>
        <CalendarMonth rotation={300}color={'grey'}/>
        <CalendarMonth rotation={330}color={'#303030'}/>
        <CalendarMonth rotation={360}color={'grey'}/>


      </Group>
    )
  }
}

export default CircularCalendar
