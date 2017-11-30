import React from 'react';
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
import PropTypes from 'prop-types'
import * as Color from 'color'
import CalendarDay from './CalendarDay';
const moment = require('moment')

const daysOfWeek  = [1,2,3,4,5,6,7]
const nameOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const nameOfMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

class CalendarWeek extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    totalAngle: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    week: PropTypes.number.isRequired,
    numWeeks : PropTypes.number.isRequired,
    selection : PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }

  dateFromDay(day){
    let date = moment([this.props.year]).dayOfYear(day).date()
    return date
  }

  getMonthName(day){
    let month = moment([this.props.year]).dayOfYear(day).month()
    return (nameOfMonth[month])
  }

  getDayName(day){
    let dayName = moment([this.props.year]).dayOfYear(day).day()
    return (nameOfWeek[dayName])
  }

  getMonthNumber(day){
    let month = moment([this.props.year]).dayOfYear(day).month()
    return (month+1)
  }

  render() {
    return(
      <Group>
      {
        daysOfWeek.map((d, idx) => {
          const inner = 200 + (30 * idx)
          const day = this.props.week * 7 + d
          return <CalendarDay
          height={this.props.height}
          width={this.props.width}
          week={this.props.week}
          numWeeks={this.props.numWeeks}
          totalAngle={this.props.totalAngle}
          year={this.props.year}
          day={day}
          key={day}
          rotation={this.props.rotation}
          innerRadius={inner}
          outerRadius={inner+30}
          textFont={d+5}
          daysOfYear={this.props.daysOfYear}
          calendar={this.props.calendar}
          calendarSelection={this.props.calendarSelection}
          dateText = {this.dateFromDay(day)}
          monthName = {this.getMonthName(day)}
          dayName = {this.getDayName(day)}
          monthNumber = {this.getMonthNumber(day)}
          />
        })
      }
      </Group>
    )
  }
}
export default CalendarWeek;
