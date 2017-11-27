import React from 'react';
import {Stage, Group, Layer, Arc, Text} from 'react-konva';
import PropTypes from 'prop-types'
import * as Color from 'color'
import CalendarDay from './CalendarDay';
import MonthName from './MonthName'

const weeks = [1,2,3,4,5,6]
const daysOfWeek  = [1,2,3,4,5,6,7]

const startDay = new Date('1/1/2019')

class CalendarMonth extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    totalAngle: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    numMonths : PropTypes.number.isRequired,
    selection : PropTypes.string.isRequired
  }

  constructor(props){
    super(props)
    this.setState({ishoLiday:0})

  }


  getDateText(d,w){
    const dayN = d+(7*(w-1));
    const displayDate = dayN - ((this.props.startDay+1) - 1);
    if(displayDate<1)
    return ""
    if(displayDate>30){
      if(this.props.month===4 || this.props.month===6 || this.props.month===9  || this.props.month===11){
        return ""
      }
    }
    if( this.props.month===1 || this.props.month===3 || this.props.month===5 || this.props.month===7|| this.props.month===8 || this.props.month===10 || this.props.month===12){
      if(displayDate>31){
        return ""
      } return displayDate

    } if(this.props.month===2){
      if(displayDate>28) {
        if((this.props.year%4===0) && (this.props.year%100!==0) && (this.props.year%400===0)){
          console.log("Went here and date is",displayDate);
          return displayDate
        } else {
          return ""
        } return displayDate

      } if(this.props.month===2){
        if(displayDate>28) {
          if((this.props.year%4===0) && (this.props.year%100!==0) || (this.props.year%400===0)){
            console.log("year is leap");
            if(displayDate>29){
              return ""
            }
            return displayDate
          } else if(displayDate>28) {
            return ""
          }

        }
      }

    } return displayDate
  }



  getHoliday(d,w){
    const dd = this.getDateText(d,w)
    if(dd in this.props.holidayForMonth){
      return 1
    } else {
      return 0
    }
  }

  getHolidayName(d,w){
    let day = this.getDateText(d,w)
    if(day in this.props.holidayForMonth){
      const obj = this.props.holidayForMonth[day];this.props.holidayForMonth[day]
      return obj[day]
    }
  }

  getColor(d,w){
    let day = this.getDateText(d,w)
    if(this.props.colorSelection!=undefined && day in this.props.holidayForMonth && this.props.colorSelection[this.props.holidayForMonth[day].holidaycolor] === "selected"){
      return this.props.holidayForMonth[day].holidaycolor
    }
    else{
      return this.props.color
    }
  }

  render() {
    const myslice = this.props.totalAngle / weeks.length
    //console.log(`total angle is ${this.props.totalAngle} my slice is ${myslice}`);
    const numdays = weeks.map((w,midx) => {
      const rot = this.props.rotation + (myslice * w)  //30+(30*1)
      console.log(`month : ${this.props.month}; rotation is ${this.props.rotation}; angle for week ${w} is ${rot}`);
      return(
        <Group>
        { daysOfWeek.map((d, idx) => {

          const inner = 200 + (30 * idx)
          const day = (this.props.month-1) * 28 + (w*d)
          if(this.getDateText(d,w)!=""){

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
          key={`${d}${w}${this.props.month}`}
          rotation={rot}
          innerRadius={inner}
          outerRadius={inner+30}
          color={this.getColor(d,w)}
          myslice={myslice}
          textFont={d+5}
          ishoLiday = {this.getHoliday(d,w)}
          holidayName = {this.getHolidayName(d,w)}
          holidayForMonth={this.props.holidayForMonth}
          colorSelection={this.props.colorSelection}
          />}
/*else{
  console.log(`month is ${this.props.month} ;outer is ${inner+30}`);
}*/
        })
        }
        </Group>
      )
    }
  )
  return(
    <Group>
    {numdays}
    <MonthName rotation = {this.props.rotation} monthn = {this.props.month} outerRadius = {380} height={this.props.height} width={this.props.width}/>
    </Group>
  )
}
}
export default CalendarMonth;
