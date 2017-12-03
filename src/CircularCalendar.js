import React from 'react';
import CalendarWeek from './CalendarWeek'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer, Arc, Rect, Text} from 'react-konva'
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
  "Roman": "selected",
  "Hindu": "selected",
  "Islamic": "selected",
  "Hebrew": "selected",
  "Chinese": "selected"
}

let tooltipDisplay = {
  tooltipX: 0,
  tooltipY: 0,
  tooltipText: ""
}

const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

class CircularCalendar extends React.Component {

  state = {
    calendarSelect: selectionOfCalendars,
    currentYear: this.props.yearText,
    tooltip: tooltipDisplay
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  loadDays(){
    daysofyear = getAllHolidaysForYear(this.state.currentYear)
  }

  handleClick = (updatedYear)=>{
    this.setState({
      currentYear: updatedYear
    })
  }

  calendarSelection = (dataFromSelectCalendar) => {
    Object.assign(selectionOfCalendars, dataFromSelectCalendar)
    this.setState({
      calendarSelect: selectionOfCalendars
    })
  }

  displayTooltip = (displayTooltipData) => {
    Object.assign(tooltipDisplay, displayTooltipData)
    this.setState({
      tooltip: tooltipDisplay
    })
  }

  render() {
    this.loadDays()
    return (
      <Group>
      {
        Object.keys(calendar).map((c,idx)=>{
          return <SelectCalendar
          width={this.props.width/10}
          height={this.props.height/10+(idx*40)}
          calendar={c}
          calendarColor={calendar[c]}
          calendarSelection={this.calendarSelection.bind(this)}
          />
        })
      }
      {
        weeks.map((w, idx) => {
          return <CalendarWeek
          key={w}
          numWeeks={weeks.length}
          rotation={totalAngle*idx+265}
          width={this.props.width}
          week={w}
          height={this.props.height}
          totalAngle={totalAngle}
          year={this.state.currentYear}
          daysOfYear={daysofyear}
          calendar={calendar}
          calendarSelection={this.state.calendarSelect}
          displayTooltip={this.displayTooltip.bind(this)}
          />
        })
      }

      <YearToggle
      width={this.props.width}
      height={this.props.height}
      text={this.state.currentYear}
      handleClick={this.handleClick.bind(this)}
      />
      {
        monthName.map((month, idx) => {
          let monthNameX = this.props.width/2 + 440 * Math.cos((30*idx+270) * (Math.PI / 180))
          let monthNameY = this.props.height/2 + 440 *  Math.sin((30*idx+270) * (Math.PI / 180))
          return <Text
          text={month}
          x={monthNameX}
          y={monthNameY}
          fill={'black'}
          fontSize={20}
          rotation={30*idx+5}
          />
        })
      }

      <Rect
      width={this.state.tooltip.tooltipText.length*7.5}
      height={15}
      x={this.state.tooltip.tooltipX}
      y={this.state.tooltip.tooltipY}
      fill={'#F5F5F5'}
      />

      <Text
      text={this.state.tooltip.tooltipText}
      x={this.state.tooltip.tooltipX}
      y={this.state.tooltip.tooltipY}
      fontSize={15}
      fill={'black'}
      />

      </Group>
    )
  }
}

export default CircularCalendar
