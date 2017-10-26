import React from 'react';
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
import PropTypes from 'prop-types'

import CalendarDay from './CalendarDay';

const weeks = [1, 2,3,4]
const daysOfWeek  = [1,2,3,4,5,6,7]
const daysofMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]

// this.props.totalAngle = the size of the slice of the pie

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class CalendarMonth extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    totalAngle: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    numMonths : PropTypes.number.isRequired
  }

  render() {
    const myslice =this.props.totalAngle / weeks.length
    console.log(`MYSLICE = ${myslice}`)

    const numdays = weeks.map((w,midx) => {
      const rot = this.props.rotation + (myslice * w)  //30+(30*1)
      let dayNumber = 0;
      return(
        <Group>
        { daysOfWeek.map((d, idx) => {
          const inner = 120 + (25 * idx)

          console.log(`ROT = ${rot}`)
          return <CalendarDay height={this.props.height}
          width={this.props.width}
          weeks={weeks.length}
          dayNum={d+(7*(w-1))}
          numMonths={this.props.numMonths}
          key={`${d}${w}${this.props.month}`} rotation={rot} innerRadius={inner} outerRadius={inner+25} color={this.props.color} />})

        }

        </Group>
      )

    }
  )
  return(
    <Group>
    {numdays}
    </Group>
  )
}
}
export default CalendarMonth;
