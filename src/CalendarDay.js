import React from 'react';
import {Stage, Layer, Arc, Text, Rect, Group} from 'react-konva';

class CalendarDay extends React.Component {
    /*componentDidMount(){
      this.updateCalendar();
    }

    updateCalendar(){
      const ctx = this.refs.arc.getContext('2d')
      console.log("this is the context and it works!!", ctx)
      console.log("this is get Canvas method",this.refs.arc.getClassName())
      this.refs.arc.fillEnabled(true)
    }

    rect(props){
      const {ctx,x,y,width,height} = props
      ctx.beginPath()
      ctx.arc(200,75,50,80,30)
      ctx.stroke()
      ctx.fillText("hello",90,75)
    }*/

    render() {
      return (
          <Group>
          <Arc
              ref="arc"
              rotation={this.props.rotation}
              x={300}
              y={300}
              innerRadius={this.props.innerRadius}
              outerRadius={this.props.outerRadius}
              angle={7.5}
              fill={"#CCC"}  //use #CCC
              shadowBlur={2}
            />

          </Group>
      )
    }
  }

export default CalendarDay;
