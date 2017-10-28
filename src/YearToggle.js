import React from 'react';
import CalendarMonth from './CalendarMonth'
import PropTypes from 'prop-types'
import {Stage, Layer, Arc, Text, Group, Rect, Arrow} from 'react-konva';

 const mouseStyle =  {
   cursor:"pointer"
 }

class YearToggle extends React.Component {

  state = { year: this.props.text};

  mouseClickBackward(){
    let currentYear = this.state.year-1
    console.log("you clicked me!!!");
    this.setState({
      year: currentYear
    });

    this.setState(function() {
        this.props.handleClick(currentYear);
      });

    console.log("The year is now",this.state.year);
  }

  mouseClickForward(){
    let currentYear = this.state.year+1
    console.log("you clicked me!!!");
    this.setState({
      year: currentYear
    });

    this.setState(function() {
        this.props.handleClick(currentYear);
      });

    console.log("The year is now",this.state.year);
  }

  render(){

    return(
      <Group>
      <Rect width = {30} height = {30} x = {this.props.width/2-40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickBackward.bind(this)}/>
      <Arrow x={this.props.width/2-30} y={this.props.height/2+5} fill = {"white"} rotation = {180}  />
      <Text x = {this.props.width/2} y = {this.props.height/2} text={this.state.year}/>
      <Rect width = {30} height = {30} x = {this.props.width/2+40} y={this.props.height/2-10} fill={"blue"} onClick = {this.mouseClickForward.bind(this)}/>
      <Arrow x={this.props.width/2+60} y={this.props.height/2+5} fill = {"white"} />
      </Group>
    )
  }

}

export default YearToggle;
