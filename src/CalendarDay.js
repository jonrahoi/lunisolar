import React from 'react';
import PropTypes from 'prop-types'
import * as Color from 'color'
import {Arc, Text, Group} from 'react-konva'
const moment = require('moment')

const seasonColors = [
  '#7f7c98',
  '#A3BD76',
  '#FDEB90',
  '#D39383'
]

class CalendarDay extends React.Component {
  constructor(props){
    super(props)
    this.state = { isMouseInside: false}
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    numWeeks: PropTypes.number.isRequired,
    totalAngle: PropTypes.number.isRequired,
    week: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    textFont: PropTypes.number.isRequired,
    daysOfYear: PropTypes.array.isRequired
  }

  hover(){
    let mousePos = this.refs.arc.getStage().getPointerPosition();
    let holidayText = ""
    let anotherDay
    if(this.props.daysOfYear[this.props.day]!==undefined){
      anotherDay = this.props.daysOfYear[this.props.day]
      if(anotherDay.holidays.length !== 0){
        anotherDay.holidays.forEach((hol, idx) => {
          if(this.props.calendarSelection[hol.calendar] === "selected"){
            this.refs.arc.getStage().container().style.cursor = 'pointer';
            holidayText = hol.name + ' : ' + this.props.dayName + ' , ' + this.props.dateText + ' ' + this.props.monthName
            this.props.displayTooltip({
              tooltipX: mousePos.x + 5,
              tooltipY: mousePos.y + 5,
              tooltipText: holidayText})
          }
        })
      }
    }
  }

mouseLeave(){
  this.refs.arc.getStage().container().style.cursor = 'default';
  this.props.displayTooltip({
    tooltipX: 0,
    tooltipY: 0,
    tooltipText: ""})
  }

  click(){
    let holidayText
    let anotherDay
    if(this.props.daysOfYear[this.props.day]!==undefined){
      anotherDay = this.props.daysOfYear[this.props.day]
      if(anotherDay.holidays.length!=0){
        anotherDay.holidays.map((hol, idx) => {
          if(this.props.calendarSelection[hol.calendar] === "selected"){
            holidayText = hol.name
            window.open('https://en.wikipedia.org/wiki/'+holidayText)
          }
        })
      }
    }
  }

  render() {
    const p = this.props
    const textX = p.width/2 + (p.innerRadius + 12) * Math.cos((p.rotation + 2.5) * (Math.PI / 180))
    const textY = p.height/2 + (p.innerRadius + 12) * Math.sin((p.rotation + 2.5) * (Math.PI / 180))
    // let color
    // if(this.props.monthNumber%2===0) color = "#606060"
    // else color = "#909090"
    let color = Color.hsl(this.props.day/2, 100, 50)
    const date = moment(`${this.props.monthNumber}-${this.props.dateText}-2017`, 'M-D-YYYY')

    let season = ((day) => {
      if (day <= 80 || day >= 352){
        return seasonColors[0]
      }
      if (day <= 170){
        return seasonColors[1]
      }
      if (day <= 262){
        return seasonColors[2]
      }
      return seasonColors[3]
    })(this.props.day)
    color = Color(season)
    if(this.props.monthNumber % 2 === 0){
      color = color.lighten(0.15)
    }
    let day = 1
    if(this.props.daysOfYear[this.props.day]!==undefined){
      day = this.props.daysOfYear[this.props.day]
      day.holidays.forEach(hol => {
        if(this.props.calendarSelection[hol.calendar] === "selected"){
          color = this.props.calendar[hol.calendar]
        }
      })
    }
    return (
      <Group>
      <Arc
      ref="arc"
      rotation={this.props.rotation}
      x={this.props.width/2}
      y={this.props.height/2}
      innerRadius={this.props.innerRadius}
      outerRadius={this.props.outerRadius}
      angle={this.props.totalAngle}
      fill={color}
      onMouseEnter={this.hover.bind(this)}
      onMouseLeave={this.mouseLeave.bind(this)}
      onClick={this.click.bind(this)}
      />

      <Text
      text={this.props.dateText}
      x={textX}
      y={textY}
      fill={'black'}
      fontSize={10}
      onMouseEnter={this.hover.bind(this)}
      onMouseLeave={this.mouseLeave.bind(this)}
      onClick={this.click.bind(this)}
      />
      </Group>
    )
  }
}
  export default CalendarDay;
