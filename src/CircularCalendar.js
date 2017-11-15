import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
const getAllHolidaysForYear = require('./test/calTest.js');

const months = [1,2,3,4,5,6,7,8,9,10,11,12]

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

class CircularCalendar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  componentWillMount(){
    this.setState(
      {
        currentYear: this.props.yearText,
        monthHolidayObjState: Object.assign({}, monthHolidayObj),
        selectedCalendar: this.props.selectedCalendar
      }
    );
  }

  handleClick = (updatedYear)=>{
    this.setState({currentYear:updatedYear});
    const spec = getAllHolidaysForYear(updatedYear)
    this.populateHolidays(spec)
  };

  populateHolidays(spec){
    Object.keys(monthHolidayObj).map(function(key, index) {
      monthHolidayObj[index] = {}
    });

    Object.keys(spec).map(function(region, index) {
      Object.keys(spec[region]).map((holiday, idx) =>{
        //console.log(`region is ${region} ; month is ${spec[region][holiday].month} ; day is ${spec[region][holiday].day} ; holiday is ${holiday}`);
        const holArray = monthHolidayObj[spec[region][holiday].month]
console.log("holArray ",holArray);
        let holObj = {}
        holObj = {[spec[region][holiday].day]:holiday, holidaycolor: calendar[region]} //assign the holiday to respective day

        if(holArray!=undefined)  //if month is not undefined
        holArray[spec[region][holiday].day] = holObj //assign the holiday (along with day) to this month
      });
    });

    this.setState(
      {
        monthHolidayObjState: Object.assign({}, monthHolidayObj)
      }
    )

    console.log(`this.state.monthHolidayObjState[m] is ${this.state.monthHolidayObjState}`);
  }

  passFirstDay(m){
    let dateString = m.toString();
    let firstDayOfMonth = new Date(`${dateString}/1/${this.state.currentYear}`)
    let startDay = firstDayOfMonth.getDay()
    return (startDay)
  }

  render() {
    return (
      <Group>

      {
        months.map((m, idx) => {
          const increment = Math.round(360 / months.length)
          let color = "#909090"
          if(idx%2 == 0) color = "#303030"
          return <CalendarMonth
          key={m}
          month={m}
          numMonths={months.length}
          rotation={increment*idx}
          width={this.props.width}
          height={this.props.height}
          color={color}
          totalAngle={increment}
          startDay={this.passFirstDay(m)}
          holidayForMonth={this.state.monthHolidayObjState[m]}
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
