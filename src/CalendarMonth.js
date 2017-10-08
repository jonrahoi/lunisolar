import React from 'react';
import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';
import CalendarDay from './CalendarDay';

const days = new Array(31)

class CalendarMonth extends React.Component {
    render() {
      return (
          <Group>
              {days.map(d => {
                // calculate rotation and all that
                return <CalendarDay rotation={30} innerRadius={130.90} outerRadius={145.45}/>
              })}
          </Group>
      )
    }
  }
export default CalendarMonth;


/* <CalendarDay rotation={30} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={30} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={30} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={30} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={40} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={40} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={40} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={40} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={90} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={90} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={90} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={90} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={120} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={120} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={120} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={120} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={150} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={150} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={150} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={150} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={180} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={180} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={180} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={180} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={210} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={210} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={210} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={210} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={240} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={240} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={240} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={240} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={270} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={270} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={270} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={270} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={300} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={300} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={300} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={300} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={330} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={330} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={330} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={330} innerRadius={159.99} outerRadius={174.54} />
            <CalendarDay rotation={360} innerRadius={116.36} outerRadius={130.90} />
            <CalendarDay rotation={360} innerRadius={130.90} outerRadius={145.45} />
            <CalendarDay rotation={360} innerRadius={145.45} outerRadius={159.99} />
            <CalendarDay rotation={360} innerRadius={159.99} outerRadius={174.54} /> */