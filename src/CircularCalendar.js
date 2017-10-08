import React from 'react';
//import Component from 'react';
import logo from './logo.svg';
import {Stage, Layer, Arc, Text, Rect} from 'react-konva';
class CircularCalendar extends React.Component {
  render() {
    return (
      <CalendarMonth />
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default CircularCalendar;



class CalendarMonth extends React.Component {
  showToolTip(){

  }
  render() {
    return (
      <Stage width={1000} height={1000}>
        <Layer>
          <CalendarDay rotation={30} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={30} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={30} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={30} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={40} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={40} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={40} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={40} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={90} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={90} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={90} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={90} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={120} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={120} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={120} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={120} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={150} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={150} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={150} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={150} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={180} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={180} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={180} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={180} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={210} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={210} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={210} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={210} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={240} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={240} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={240} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={240} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={270} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={270} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={270} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={270} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={300} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={300} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={300} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={300} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={330} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={330} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={330} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={330} innerRadius={159.99} outerRadius={174.54} />
          <CalendarDay rotation={360} innerRadius={116.36} outerRadius={130.90} />
          <CalendarDay rotation={360} innerRadius={130.90} outerRadius={145.45} />
          <CalendarDay rotation={360} innerRadius={145.45} outerRadius={159.99} />
          <CalendarDay rotation={360} innerRadius={159.99} outerRadius={174.54} />
        </Layer>
      </Stage>
    );
  }
}

class CalendarDay extends React.Component {
  rotation(){
    for(let i = 0;i<360;i+=30){
      return i;
    }
  }

  componentDidMount(){
    this.updateCalendar();
  }

  updateCalendar(){
    const ctx = this.refs.arc.getContext('2d');
    console.log("this is the context and it works!!", ctx);
    console.log("this is get Canvas meth",this.refs.arc.getClassName());
    this.refs.arc.fillEnabled(true);
    //this.rect({ctx,x:10,y:10,width:50,height:50});

  }

  rect(props){
    const {ctx,x,y,width,height} = props;
    ctx.beginPath();
    ctx.arc(200,75,50,80,30);
    ctx.stroke();
    ctx.fillText("hello",90,75);
  }


  render() {
    return (
      <Arc
      ref="arc"
      rotation={this.props.rotation}
        x={300}
        y={300}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        angle={10}
        fill={"grey"}
        shadowBlur={5}

        >1</Arc>
    );


  }
}

class CalendarText extends React.Component {
  render(){
    return(
      <Text
      x={20}
        y={60}
        text={"COMPLEX TEXT"}
        fontSize={18}
        fontFamily={"Calibri"}
        fill={"#555"}
        width={300}
        padding={20}
        align={"center"}
      />
    );
  }
}
