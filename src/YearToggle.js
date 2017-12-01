import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group, Rect, Arrow, Circle} from 'react-konva';



class YearToggle extends React.Component {

  state = { year: this.props.text, interval:0};

  mouseClickBackward(){
    let currentYear = this.state.year-1
    this.setState({
      year: currentYear
    });

    this.setState(function() {
      this.props.handleClick(currentYear);
    });
  }

  mouseClickForward(){
    let currentYear = this.state.year+1
    this.setState({
      year: currentYear
    });

    this.setState(function() {
      this.props.handleClick(currentYear);
    });
  }

  mouseClickAnimate(){

    if(this.state.interval!==0)
    clearInterval(this.state.interval)

    let c = setInterval(this.mouseClickForward.bind(this), 30)
    console.log("what is c",c);
    this.setState({interval:c})

  }

  mouseClickAnimateBackward(){
    if(this.state.interval!==0)
    clearInterval(this.state.interval)
    let d = setInterval(this.mouseClickBackward.bind(this), 30)
    this.setState({interval:d})
  }



  mouseClickStop(){
    //this.setState({interval:0})
    clearInterval(this.state.interval)
  }

  mouseStyle(){
    this.refs.shape.getStage().container().style.cursor = 'pointer';
  }

  changeMouseStyle(){
    this.refs.shape.getStage().container().style.cursor = 'default';
  }

  resetToCurrentYear(){
    let actualCurrentYear = (new Date()).getFullYear()
    this.setState({
      year: actualCurrentYear
    });

    this.setState(function() {
      this.props.handleClick(actualCurrentYear);
    });
  }

  render(){

    return(
      <Group>
      <Rect ref="shape" width = {155} height = {30} x = {this.props.width/2-60} y={this.props.height/2-50} fill={"blue"} cornerRadius={12} onClick = {this.resetToCurrentYear.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Text x = {this.props.width/2-50} y = {this.props.height/2-45} fill={"white"} text={"reset to current year"} fontSize={15} onClick = {this.resetToCurrentYear.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Rect ref="shape" width = {30} height = {30} x = {this.props.width/2-40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickBackward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Arrow ref="shape" x={this.props.width/2-30} y={this.props.height/2+5} fill = {"white"} rotation = {180} onClick = {this.mouseClickBackward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)} />
      <Text x = {this.props.width/2} y = {this.props.height/2} text={this.state.year}/>
      <Rect ref="shape" width = {30} height = {30} x = {this.props.width/2+40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickForward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Arrow ref="shape" x={this.props.width/2+60} y={this.props.height/2+5} fill = {"white"}  onClick = {this.mouseClickForward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Circle ref="shape" x={this.props.width/2+55} y={this.props.height/2+50} radius={20} fill={"red"} onClick = {this.mouseClickAnimate.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Arrow ref="shape" x={this.props.width/2+60} y={this.props.height/2+50} fill = {"white"}  onClick = {this.mouseClickAnimate.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Circle ref="shape" x={this.props.width/2+15} y={this.props.height/2+50} radius={20} fill={"blue"} onClick = {this.mouseClickStop.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Rect ref="shape" x={this.props.width/2+10} y={this.props.height/2+45} fill="white" height = {10} width={10} onClick = {this.mouseClickStop.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Circle ref="shape" x={this.props.width/2-25} y={this.props.height/2+50} radius={20} fill={"red"} onClick = {this.mouseClickAnimateBackward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      <Arrow ref="shape" x={this.props.width/2-30} y={this.props.height/2+50} fill = {"white"} rotation={180} onClick = {this.mouseClickAnimateBackward.bind(this)} onMouseEnter={this.mouseStyle.bind(this)} onMouseLeave={this.changeMouseStyle.bind(this)}/>
      </Group>
    )
  }

}

export default YearToggle;
