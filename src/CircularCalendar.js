import React from 'react';
import CalendarWeek from './CalendarWeek'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'
import {Group} from 'react-konva'
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

let selectionOfColors = {
  "yellow" : "deselected",
  "green" : "deselected",
  "pink" : "deselected",
  "violet" : "deselected",
  "red" : "deselected"
}

class CircularCalendar extends React.Component {
  state = {
    colorSelect: selectionOfColors,
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

  componentWillMount(){
    
  }

  handleClick = (updatedYear)=>{
    this.setState({currentYear: updatedYear});
  };

  colorSelection = (dataFromSelectCalendar) => {
    console.log(`data from select ${JSON.stringify(dataFromSelectCalendar)}`);
    Object.assign(selectionOfColors, dataFromSelectCalendar)
    console.log(`this ${JSON.stringify(selectionOfColors)}`);
    this.setState({
      colorSelect : selectionOfColors
    })
    console.log(`color selection ${JSON.stringify(this.state.colorSelect)}`);
  }

  render() {
    return (
      <Group>
      {
        Object.keys(calendar).map((c,idx)=>{
          return <SelectCalendar key={c} width={this.props.width/10} height={this.props.height/10+(idx*40)} calendar={c} calendarColor={calendar[c]} colorSelection={this.colorSelection.bind(this)}/>
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
