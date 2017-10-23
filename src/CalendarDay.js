import React from 'react';
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group} from 'react-konva';

class CalendarDay extends React.Component {
    componentDidMount(){
      this.updateCalendar();
      // this.refs.arc.
      // console.log(this.refs.arc.attrs.x, this.refs.arc.attrs.y)
    }

    static propTypes = {
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      numMonths: PropTypes.number.isRequired,
      dayNum : PropTypes.number.isRequired,
      weeks: PropTypes.number.isRequired
    }

    updateCalendar(){
      const ctx = this.refs.arc.getContext('2d')
      // console.log("this is the context and it works!!", ctx)
      // console.log("this is get Canvas method",this.refs.arc.getClassName())
      // this.refs.arc.fillEnabled(true)
      this.refs.arc.fill(this.props.color)
    }

    /*rect(props){
      const {ctx,x,y,width,height} = props
      ctx.beginPath()
      ctx.arc(200,75,50,80,30)
      ctx.stroke()
      ctx.fillText("hello",90,75)
    }*/
    /**
     * start at x, y
     * go via angle, plus inner radius
     */
    render() {
      const angle = 360 / (this.props.numMonths * this.props.weeks)
      console.log(`ANGLE=${angle}`)
      const textX = this.props.width/2 + (this.props.innerRadius + 25) * Math.cos(this.props.rotation * (Math.PI / 180))
      const textY = this.props.height/2 + (this.props.innerRadius + 25) * Math.sin(this.props.rotation * (Math.PI / 180))

      return (
          <Group>
          <Arc
              ref="arc"
              rotation={this.props.rotation}
              x={this.props.width/2}
              y={this.props.height/2}
              innerRadius={this.props.innerRadius}
              outerRadius={this.props.outerRadius}
              opacity={0.5}
              angle={angle}
              fill={"#CCC"}  //use #CCC
              shadowBlur={2}
            />
            <Text text={`${this.props.dayNum}`} x={textX} y={textY} />

          </Group>
      )
    }
  }

export default CalendarDay;
