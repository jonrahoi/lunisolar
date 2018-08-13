import React from 'react';
import CalendarWeek from './CalendarWeek'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'
import {Group, Text, Rect} from 'react-konva'
import {getAllHolidaysForYear} from './holidays'

const weeks = []
for (let x=0; x< 53; x++){
  weeks.push(x)
}

let daysofyear = {}

const totalAngle = 360 / weeks.length

const calendar = {
  "Roman": "gold",
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
    tooltip: tooltipDisplay,
    titleText: "Features : ",
    bodyText: '1. Select Calendar'
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

      <Text
      text={"Select Calendar"}
      fontStyle={'bold'}
      x={this.props.width/12}
      y={this.props.height/18}
      fontSize={25}
      fill={'#922B21'}
      />

      <Text
      text={"Features:"}
      fontStyle={'bold'}
      x={(this.props.width/12)-130}
      y={this.props.height/2}
      fontSize={25}
      fill={'#330066'}
      />

      <Text
      text={"\n\n1. Select Calendar:\n\t\t\t\tSelect / Deselect a calendar \n\t\t\t\tto view corresponding holidays in \n\t\t\t\ttheir respective colors"+
      "\n\n2. Right and Left arrow buttons (Blue):\n\t\t\t\tToggle forwards and backwards\n\t\t\t\t between years"+
      "\n\n3. Right and Left arrow buttons (Red):\n\t\t\t\tAnimate holidays forwards and backwards\n\t\t\t\t between years"+
      "\n\n4. Hover over holidays:\n\t\t\t\tView holiday tooltip and click on a holiday\n\t\t\t\t to redirect to wikipedia page"}
      x={(this.props.width/12)-130}
      y={this.props.height/2}
      fontSize={20}
      fill={'#330066'}
      />

      </Group>
    )
  }
}

export default CircularCalendar
