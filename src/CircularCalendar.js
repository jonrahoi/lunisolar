import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
const getAllHolidaysForYear = require('./test/calTest.js');

const months = [1,2,3,4,5,6,7,8,9,10,11,12]

const days = []

let monthHolidayObj = {
  1:{},
  2:{},
  3:{},
  4:{},
  5:{},
  6:{},
  7:{},
  8:{},
  9:{},
  10:{},
  11:{},
  12:{}
}

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
  constructor () {
    super()
    for (let x = 1; x<= 366; x++){
      days.push(x)
    }
  }
  state = {
    colorSelect: selectionOfColors,
    currentYear: this.props.yearText,
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  componentWillMount(){
    const spec = getAllHolidaysForYear(this.state.currentYear)
    this.populateHolidays(spec)
  }

  handleClick = (updatedYear)=>{
    this.setState({currentYear: updatedYear});
  };

  populateHolidays(spec){
    Object.keys(monthHolidayObj).map(function(key, index) {
      monthHolidayObj[index] = {}
    });

    Object.keys(spec).map(function(region, index) {
      Object.keys(spec[region]).map((holiday, idx) =>{
        console.log(`region is ${region} ; month is ${spec[region][holiday].month} ; day is ${spec[region][holiday].day} ; holiday is ${holiday}`);
        const holArray = monthHolidayObj[spec[region][holiday].month]

        let holObj = {}
        holObj = {[spec[region][holiday].day]:holiday, holidaycolor: calendar[region]} //assign the holiday to respective day

        if(holArray!=undefined)  //if month is not undefined
        holArray[spec[region][holiday].day] = holObj //assign the holiday (along with day) to this month
      });
    });
  }

  passFirstDay(m){
    let dateString = m.toString();
    let firstDayOfMonth = new Date(`${dateString}/1/${this.state.currentYear}`)
    let startDay = firstDayOfMonth.getDay()
    return (startDay)
  }

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
          return <SelectCalendar width={this.props.width/10} height={this.props.height/10+(idx*40)} calendar={c} calendarColor={calendar[c]} colorSelection={this.colorSelection.bind(this)}/>
        })
      }
      {
        days.map((d, idx) => {
          const dateForToday = moment().year(this.state.currentYear).dayOfYear(d);
          const increment = Math.round(360 / days.length)
          let color = "#909090"
          if(idx%2 == 0) color = "#303030"
          return <CalendarDay
          key={d}
          rotation={increment*idx}
          width={this.props.width}
          height={this.props.height}
          color={color}
          totalAngle={increment}
          holidayForMonth={monthHolidayObj[m]}
          colorSelection={this.state.colorSelect}
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
