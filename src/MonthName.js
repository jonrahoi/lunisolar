import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group} from 'react-konva';

const monthName = {
  1 : "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

class MonthName extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(`the rotation for ${monthName[this.props.monthn]} is ${this.props.rotation}`)
  }


  getMonthName(){
    const month  = this.props.monthn
console.log("what this", monthName[month]);
     return (monthName[month])

  }

  render(){
      const p = this.props
    const textX = p.width/2 + (p.outerRadius) * Math.cos((p.rotation+30) * (Math.PI / 180))
    const textY = p.height/2 + (p.outerRadius) *  Math.sin((p.rotation+30) * (Math.PI / 180))
  return(
  <Text text={this.getMonthName()} x={textX} y={textY} fill={'black'} fontSize={20} rotation={125+this.props.rotation}/>
)
}
}

export default MonthName;
