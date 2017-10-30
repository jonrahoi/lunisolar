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
  }


  getMonthName(){
    const month  = this.props.monthn
     return (monthName[month])

  }

  render(){
      const p = this.props
    const textX = p.width/2 + (p.outerRadius) * Math.cos((p.rotation+10) * (Math.PI / 180))
    console.log(`width ${p.width} outerRadius ${p.outerRadius} rotation ${p.rotation} textX ${textX}`);
    const textY = p.height/2 + (p.outerRadius) *  Math.sin((p.rotation+10) * (Math.PI / 180))
    console.log(`height ${p.height} outerRadius ${p.outerRadius} rotation ${p.rotation} textY ${textY}`);

  return(
  <Text text={this.getMonthName()} x={textX} y={textY} fill={'black'} fontSize={20} rotation={105+this.props.rotation}/>
)
}
}

export default MonthName;
