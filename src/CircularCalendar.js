import React from 'react';
import CalendarWeek from './CalendarWeek'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer, Arc, Text} from 'react-konva'
const getAllHolidaysForYear = require('./calendar')

const weeks = []
for (let x=0; x< 53; x++){
  weeks.push(x)
}

let daysofyear = {}

const totalAngle = 360 / weeks.length

const calendar = {
  "Roman": "yellow",
  "Hindu": "green",
  "Islamic": "pink",
  "Hebrew": "violet",
  "Chinese": "red"
}

let selectionOfCalendars = {
  "Roman" : "deselected",
  "Hindu" : "deselected",
  "Islamic" : "deselected",
  "Hebrew" : "deselected",
  "Chinese" : "deselected"
}

class CircularCalendar extends React.Component {
  state = {
    calendarSelect: selectionOfCalendars,
    currentYear: this.props.yearText,
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  constructor (props){
    super(props)
    daysofyear = getAllHolidaysForYear(this.props.yearText)
  }

  handleClick = (updatedYear)=>{
    this.setState({currentYear: updatedYear});
  };

  calendarSelection = (dataFromSelectCalendar) => {
    Object.assign(selectionOfCalendars, dataFromSelectCalendar)
    this.setState({
      calendarSelect : selectionOfCalendars
    })
  }

  render() {
    return (
      <Group>
      {
        Object.keys(calendar).map((c,idx)=>{
          return <SelectCalendar
          width={this.props.width/10}
          height={this.props.height/10+(idx*40)}
          calendar={c}
          calendarColor={calendar[c]}
          calendarSelection={this.calendarSelection.bind(this)}/>
        })
      }
      {
        weeks.map((w, idx) => {
          return <CalendarWeek
          key={w}
          numWeeks={weeks.length}
          rotation={totalAngle*idx}
          width={this.props.width}
          week={w}
          height={this.props.height}
          totalAngle={totalAngle}
          colorSelection={this.state.colorSelect}
          year={this.state.currentYear}
          daysOfYear={daysofyear}
          calendar={calendar}
          calendarSelection={this.state.calendarSelect}
          />
        })
      }
      <YearToggle
      width={this.props.width}
      height={this.props.height}
      text={this.state.currentYear}
      handleClick={this.handleClick.bind(this)}/>
      </Group>
    )
  }
}

export default CircularCalendar
