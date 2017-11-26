import React from 'react';
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group} from 'react-konva';

class CalendarDay extends React.Component {

  constructor(props){
    super(props)
       this.state = { isMouseInside: false}

  }

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

  updateCalendar(){
    const ctx = this.refs.arc.getContext('2d')
    this.refs.arc.fillEnabled(true)
    this.refs.arc.fill(this.props.color)

  }

  componentDidMount(){

    this.updateCalendar()
  }

  componentDidUpdate(){

    this.updateCalendar()
  }

  hover(){
       let mousePos = this.refs.arc.getStage().getPointerPosition();
       let holidayText = ""
       let rect = this.refs.text.shadowColor("grey")
       this.refs.text.shadowOpacity(0.5)
      //console.log("rect ",rect);
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
    const angle = 360 / (p.numMonths * p.weeks)
    const textX = p.width/2 + (p.innerRadius + 11.5) * Math.cos((p.rotation+(this.props.myslice/2)) * (Math.PI / 180))
    const textY = p.height/2 + (p.innerRadius + 11.5) * Math.sin((p.rotation+(this.props.myslice/2)) * (Math.PI / 180))
    return (
      <Group>
      <Arc
      ref="arc"
      rotation={this.props.rotation}
      x={this.props.width/2}
      y={this.props.height/2}
      innerRadius={this.props.innerRadius}
      outerRadius={this.props.outerRadius}
      //opacity={1}
      angle={angle}
      //color={this.props.color}
      onMouseEnter = {this.hover.bind(this)}
      onMouseLeave = {this.mouseLeave.bind(this)}
      />
      <Text text={this.props.displayDate} x={textX} y={textY} fill={'white'} fontSize={10} />
      <Text ref = "text" text={this.state.tooltipText} x={this.state.toolTipx} y = {this.state.toolTipY} fontSize={this.state.tooltipFont} fill={"blue"} />

      </Group>
    )
  }
}

export default CalendarDay;
