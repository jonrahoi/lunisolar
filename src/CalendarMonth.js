import React from 'react';
import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';
import PropTypes from 'prop-types'

import CalendarDay from './CalendarDay';

const weeks = [1, 2, 3, 4]
const rotation = [0, 7.5, 15, 22.5, 30]
const daysOfWeek  = [1,2,3,4,5,6,7]

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
            const myslice = Math.round(this.props.totalAngle / weeks.length)
            console.log(`MYSLICE = ${myslice}`)

            const numdays = weeks.map(w => {
              const rot = this.props.rotation + (myslice * w)
                return(
                <Group>
                  { daysOfWeek.map((d, idx) => {
                      const inner = 120 + (25 * idx)
                      
                      console.log(`ROT = ${rot}`)
                      return <CalendarDay height={this.props.height} 
                      width={this.props.width}
                      weeks={weeks.length}
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
