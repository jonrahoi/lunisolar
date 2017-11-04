import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import YearToggle from './YearToggle'
import SelectCalendar from './SelectCalendar'


import {Stage, Group, Layer, Arc, Text} from 'react-konva';
const getAllHolidaysForYear = require('./test/calTest.js');

const months = [1,2,3,4, 5, 6, 7, 8,9, 10,11,12]



let monthHolidayObj = {
  1: {},
  2: {},
  3: {},
  4: {},
  5 :{},
  6:{},
  7:{},
  8:{},
  9:{},
  10:{},
  11:{},
  12:{}
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class CircularCalendar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }

  componentWillMount(){
    this.setState(
      {currentYear:this.props.yearText,
        monthHolidayObjState:monthHolidayObj
      }
    );
  }

  handleClick = (updatedYear)=>{
    this.setState({currentYear:updatedYear});

    //console.log("check this",getAllHolidaysForYear(updatedYear));
    const spec = getAllHolidaysForYear(updatedYear)
    //console.log("Diwali",spec.diwali);
    this.populateHolidays(spec)
  };

  populateHolidays(spec){


  Object.keys(monthHolidayObj).map(function(key, index) {
    monthHolidayObj[index] = {}
  });

    Object.keys(spec).map(function(key, index) {
    console.log(`The holiday is ${key} and month is ${spec[key].month}`);
    //console.log(`the holiday for month ${spec[key].month} is ${key}`);
    const holArray = monthHolidayObj[spec[key].month]

    //const holObj = []
    // holObj.push(spec[key].day)
    // holObj.push(key)

    let holObj = {}
    holObj = {[spec[key].day]:key}
    //console.log("what is this that I constructed",holObj);

    if(holArray!==undefined)
    holArray[spec[key].day] = holObj
    //monthHolidayObj[spec[key].month] =  hol
});

console.log("what is the object I constructed",monthHolidayObj);
this.setState(
  {
    monthHolidayObjState:monthHolidayObj
  }
)

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
          // console.log(`increment = ${increment*idx}`);
          let color = "#909090"
          if(idx%2==0) color = "#303030"
          return <CalendarMonth key={m} month={m} numMonths={months.length} rotation={increment*idx} width={this.props.width} height={this.props.height} color={color} totalAngle={increment} startDay = {this.passFirstDay(m)} holidayForMonth = {this.state.monthHolidayObjState[m]}/>
        })
      }
      <YearToggle width={this.props.width} height={this.props.height} text = {this.state.currentYear} handleClick={this.handleClick.bind(this)}/>
      </Group>
    )
  }
}

export default CircularCalendar
