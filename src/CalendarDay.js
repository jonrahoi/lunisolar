import React from 'react';
import PropTypes from 'prop-types'
import SelectCalendar from './SelectCalendar'
import {Stage, Layer, Arc, Text, Group} from 'react-konva';

const calendar = {
  "Roman": "yellow",
  "Hindu": "green",
  "Islamic": "pink",
  "Hebrew": "violet",
  "Chinese": "red"
}

class CalendarDay extends React.Component {
  componentDidMount(){
    this.updateCalendar();
  }
  state = {colorSelect : {}}
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    numMonths: PropTypes.number.isRequired,
    dayNum: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    weeks: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    textFont: PropTypes.number.isRequired
  }

  colorSelection = (dataFromSelectCalendar) => {
    this.setState({colorSelect : Object.assign({}, dataFromSelectCalendar)})
    //console.log("received from select calendar ",this.state.colorSelect);
  }

  /*getColor(){
    if(day in this.props.holidayForMonth){
      return this.props.holidayForMonth[day].holidaycolor
    } else {
      return this.props.color
    }
  }*/

  updateCalendar(){
    const ctx = this.refs.arc.getContext('2d')
    this.refs.arc.fillEnabled(true)
  //  console.log(`holiday for month ${this.props.holidayForMonth}`);
    let day = this.props.displayDate
    let calendarColor = this.state.colorSelect.color
    let selection = this.state.colorSelect.selection
    //console.log(`selected calendarColor  ${calendarColor} ; color for this day ${day} is ${this.props.holidayForMonth} `);
    /*if(day in this.props.holidayForMonth){
      if(calendarColor === this.props.holidayForMonth[day].holidaycolor && selection === "selected"){
        this.refs.arc.fill(calendarColor)
      } else {
        this.refs.arc.fill(this.props.color)
      }
    } else {*/
      this.refs.arc.fill(this.props.color)
    //}
  }

  componentDidUpdate(){
    this.updateCalendar();
  }


  /*getColorofArc(d,w){
  let color = this.state.colorSelect.color
  let selection = this.state.colorSelect.selection
  if(selection === "selected"){
  console.log("selection called color : ",color);
  return color
} else {
console.log("no selection color : ",this.props.color);
return this.props.color
}
}*/

/**
* start at x, y
* go via angle, plus inner radius
*/
render() {
  const p = this.props
  const angle = 360 / (p.numMonths * p.weeks)
  const textX = p.width/2 + (p.innerRadius + 11.5) * Math.cos((p.rotation+(this.props.myslice/2)) * (Math.PI / 180))
  const textY = p.height/2 + (p.innerRadius + 11.5) * Math.sin((p.rotation+(this.props.myslice/2)) * (Math.PI / 180))
  return (
    <Group>
    {
      Object.keys(calendar).map((c,idx)=>{
        return <SelectCalendar width={p.width/10} height={p.height/10+(idx*40)} calendar={c} calendarColor={calendar[c]} colorSelection={this.colorSelection.bind(this)}/>
      })
    }
    <Arc
    ref="arc"
    rotation={p.rotation}
    x={p.width/2}
    y={p.height/2}
    innerRadius={p.innerRadius}
    outerRadius={p.outerRadius}
    //opacity={1}
    angle={angle}
    //color={this.getColorofArc}
    />

    <Text
    text={p.displayDate}
    x={textX}
    y={textY}
    fill={'white'}
    fontSize={p.textFont} />
    </Group>
  )
}
}

export default CalendarDay;
