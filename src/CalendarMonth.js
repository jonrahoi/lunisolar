import React from 'react';
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
import PropTypes from 'prop-types'
import * as Color from 'color'
import CalendarDay from './CalendarDay';
import MonthName from './MonthName'

const weeks = [1,2,3,4,5,6]
const daysOfWeek  = [1,2,3,4,5,6,7]

// this.props.totalAngle = the size of the slice of the pie



const getColor = (dayNum) => {
  const color = Color(`hsl(${dayNum}, 100%, 50%)`)
  const [r, g, b] = color.rgb().array()
  // console.log(`${r}-${g}-${b} COLOR=${color}`)
  return color.hex()
}

const startDay = new Date('1/1/2019')

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

  componentDidMount(){


  }

  getDateText(d,w){
    const dayN = d+(7*(w-1));
    const displayDate = dayN - ((this.props.startDay+1) - 1);
    console.log(`the start day for month ${this.props.month} is ${this.props.startDay}`);
    console.log("factor got is", displayDate);
    if(displayDate<1 || displayDate> 31)
    return ""
    return (displayDate)

  }




  render() {
    const myslice = this.props.totalAngle / weeks.length
    // console.log(`MYSLICE = ${myslice}`)

    const numdays = weeks.map((w,midx) => {
      const rot = this.props.rotation + (myslice * w)  //30+(30*1)
      console.log(`WEEK ${w}`)
      return(
        <Group>
        { daysOfWeek.map((d, idx) => {
          console.log(`DAY ${d}`)
          const inner = 150 + (30 * idx)
          const day = (this.props.month-1) * 28 + (w*d);
          console.log(`DAYOFYEAR = ${day} ROT = ${rot}`)
          return <CalendarDay
          height={this.props.height}
          width={this.props.width}
          weeks={weeks.length}
          month={this.props.month}
          dayNum={d+(7*(w-1))}
          numMonths={this.props.numMonths}
          startDay = {startDay.getDay()+1}
          d = {d}
          displayDate = {this.getDateText(d,w)}
          key={`${d}${w}${this.props.month}`} rotation={rot} innerRadius={inner} outerRadius={inner+30} color={getColor(day)} myslice={myslice}/>})
        }

        </Group>
      )

    }
  )
  return(
    <Group>
    {numdays}
    <MonthName rotation = {this.props.rotation} monthn = {this.props.month} outerRadius = {400} height={this.props.height}
    width={this.props.width} textRotation = {0}/>
    </Group>
  )
}
}
export default CalendarMonth;
