import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'

import {Stage, Group, Layer, Arc, Text} from 'react-konva';
const months = [1,2,3,4, 5, 6, 7, 8,9, 10,11,12]

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class CircularCalendar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  passFirstDay(m){
    let dateString = m.toString();
    let firstDayOfMonth = new Date(`${dateString}/1/2018`)
    console.log("the date I got is",firstDayOfMonth);
    let startDay = firstDayOfMonth.getDay()
    console.log(`startDay for ${m} is ${startDay}`);
    return (startDay)
  }

  render() {
    return (
      <Group>
      {
        months.map((m, idx) => {
          console.log(`MONTH ${m}`)
          const increment = Math.round(360 / months.length)
          // console.log(`increment = ${increment*idx}`);
          let color = "#909090"
          if(idx%2==0) color = "#303030"
          return <CalendarMonth key={m} month={m} numMonths={months.length} rotation={increment*idx} width={this.props.width} height={this.props.height} color={color} totalAngle={increment} startDay = {this.passFirstDay(m)}/>
        })
      }
      </Group>
    )
  }
}

export default CircularCalendar
