import React from 'react';
import PropTypes from 'prop-types'
import {Stage, Layer, Text, Group, Rect} from 'react-konva';

const mouseStyle =  {
  cursor:"pointer"
}

class SelectCalendar extends React.Component {

  state = {color: this.props.calendarColor};

  changeColor(calendarColor){
    if(this.state.color == this.props.calendarColor){
      this.setState((prevState, props) => ({
        color: 'white'
      }
    ))
    this.setState(function() {
      this.props.colorSelection({color: this.props.calendarColor, selection: 'deselected'});
    });
  }
  else{
    this.setState((prevState, props) => ({
      color: this.props.calendarColor
    }
  ))
  this.setState(function() {
    this.props.colorSelection({color: this.props.calendarColor, selection: 'selected'});
  });
}
}

render(){
  return(
    <Group>
    <Rect ref="rect" width = {40} height = {20} x = {this.props.width} y={this.props.height} fill={this.state.color} stroke={this.props.calendarColor} onClick={this.changeColor.bind(this)}/>
    <Text x = {this.props.width+50} y = {this.props.height} text={this.props.calendar} fontSize={20}/>
    </Group>
  )
}
}

export default SelectCalendar;
