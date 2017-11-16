import React from 'react';
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group, Konva} from 'react-konva';

let factor;

class CalendarDay extends React.Component {

  constructor(props){
    super(props)
       this.state = { isMouseInside: false}

  }

    componentDidMount(){
      this.updateCalendar();
      factor = this.props.startDay - 1
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

    componentDidUpdate(){
      const ctx = this.refs.arc.getContext('2d')
      this.refs.arc.fillEnabled(true)

      if(this.props.ishoLiday===1){


        this.refs.arc.fill("red")

      } else {
      this.refs.arc.fill(this.props.color)
    }
    }

    hover(){
       let mousePos = this.refs.arc.getStage().getPointerPosition();
       let holidayText = ""
       if(this.props.ishoLiday===1){
         holidayText = "Holiday!!"
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
              opacity={1}
              angle={angle}
              color = {this.getColor}
              onMouseEnter = {this.hover.bind(this)}
              onMouseLeave = {this.mouseLeave.bind(this)}
            />
            <Text text={this.props.displayDate} x={textX} y={textY} fill={'white'} fontSize={this.props.textFont} />
            <Text text={this.state.tooltipText} x={this.state.toolTipx} y = {this.state.toolTipY} fontSize={this.state.tooltipFont} fill={"blue"} />




          </Group>
      )
    }
  }

export default CalendarDay;
