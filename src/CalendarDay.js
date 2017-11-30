import React from 'react';
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group} from 'react-konva'

class CalendarDay extends React.Component {

  constructor(props){
    super(props)
    this.state = { isMouseInside: false}
    console.log(`${JSON.stringify(this.props.calendarSelection)}`)
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    numWeeks: PropTypes.number.isRequired,
    totalAngle: PropTypes.number.isRequired,
    week: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    textFont: PropTypes.number.isRequired,
    daysOfYear: PropTypes.object.isRequired
  }

  hover(){
    let mousePos = this.refs.arc.getStage().getPointerPosition();
    let holidayText = ""
    let rect = this.refs.text.shadowColor("grey")
    this.refs.text.shadowOpacity(0.5)
    if(this.props.ishoLiday===1){
      holidayText = this.props.holidayName
    }
    this.setState({
      isMouseInside: true,
      tooltipFont : 20,
      toolTipx : mousePos.x + 5,
      toolTipY : mousePos.y + 5,
      tooltipText : holidayText,
      zIndex:3
    });

  }

  mouseLeave(){
    this.setState({
      isMouseInside: false,
      tooltipFont : 0,
      toolTipx : 0,
      toolTipY : 0,
      tooltipText : ""
    });

  }

  /**
  * start at x, y
  * go via angle, plus inner radius
  */
  render() {
    const p = this.props

    const textX = p.width/2 + (p.innerRadius + 12) * Math.cos((p.rotation + 2.5) * (Math.PI / 180))

    const textY = p.height/2 + (p.innerRadius + 12) * Math.sin((p.rotation + 2.5) * (Math.PI / 180))
    let color
    if(this.props.day===1) color = "blue"
    else color = "grey"
    let day = 1
    if(this.props.daysOfYear[this.props.day]!==undefined){
      day=this.props.daysOfYear[this.props.day]
      day.holidays.map((hol, idx) => {
        if(this.props.calendarSelection[hol.calendar] === "selected"){
          color = this.props.calendar[hol.calendar]
        }
      })
    }
    return (
      <Group>
      <Arc
      ref="arc"
      rotation={this.props.rotation}
      x={this.props.width/2}
      y={this.props.height/2}
      innerRadius={this.props.innerRadius}
      outerRadius={this.props.outerRadius}
      angle={this.props.totalAngle}
      fill={color}
      onMouseEnter={this.hover.bind(this)}
      onMouseLeave={this.mouseLeave.bind(this)}
      />

      <Text
      text={this.props.dateText}
      x={textX}
      y={textY}
      fill={'white'}
      fontSize={10}
      />

      <Text ref="text"
      text={this.state.tooltipText}
      x={this.state.toolTipx}
      y={this.state.toolTipY}
      fontSize={this.state.tooltipFont}
      fill={"blue"} />

      </Group>
    )
  }
}

export default CalendarDay;
