import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group, Rect, Arrow, Circle} from 'react-konva';

const mouseStyle =  {
  cursor:"pointer"
}

class YearToggle extends React.Component {

  state = { year: this.props.text};

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

    let c = setInterval(this.mouseClickForward.bind(this), 30)
    this.setState({interval:c})

  }



  mouseClickStop(){
    //this.setState({interval:0})
    clearInterval(this.state.interval)
  }

  render(){

    return(
      <Group>
      <Rect width = {30} height = {30} x = {this.props.width/2-40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickBackward.bind(this)}/>
      <Arrow x={this.props.width/2-30} y={this.props.height/2+5} fill = {"white"} rotation = {180} onClick = {this.mouseClickBackward.bind(this)} />
      <Text x = {this.props.width/2} y = {this.props.height/2} text={this.state.year}/>
      <Rect width = {30} height = {30} x = {this.props.width/2+40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickForward.bind(this)}/>
      <Arrow x={this.props.width/2+60} y={this.props.height/2+5} fill = {"white"}  onClick = {this.mouseClickForward.bind(this)}/>
      <Circle x={this.props.width/2-10} y={this.props.height/2+50} radius={20} fill={"red"} onClick = {this.mouseClickAnimate.bind(this)}/>
      <Arrow x={this.props.width/2-5} y={this.props.height/2+50} fill = {"white"}  onClick = {this.mouseClickAnimate.bind(this)}/>
      <Circle x={this.props.width/2+30} y={this.props.height/2+50} radius={20} fill={"blue"} onClick = {this.mouseClickStop.bind(this)}/>
      <Rect x={this.props.width/2+25} y={this.props.height/2+45} fill="white" height = {10} width={10} onClick = {this.mouseClickStop.bind(this)}/>
      </Group>
    )
  }

}

export default YearToggle;
