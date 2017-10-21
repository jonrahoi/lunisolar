import React from 'react';
import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';
import CalendarDay from './CalendarDay';

const days = []
const rotation = [0,7.5,15,22.5,30]

for (let i=0; i< 4; i++){
  days.push(i+1)
}



class CalendarMonth extends React.Component {
    render() {
            const numdays = days.map(d => {

                // calculate rotation and all that
                {var rotationFactor = 0}
                return(
                  <Group>
                <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={120} outerRadius={145} color={this.props.color} />
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={145} outerRadius={170} color={this.props.color} />
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={170} outerRadius={195} color={this.props.color} />
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={195} outerRadius={220} color={this.props.color}/>
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={220} outerRadius={245} color={this.props.color}/>
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={245} outerRadius={270} color={this.props.color}/>
          <CalendarDay rotation={this.props.rotation+rotation[d]} innerRadius={270} outerRadius={295} color={this.props.color}/>
                </Group>
              )

             console.log(d);
              }
      )
      return(
        <Group>
        {numdays}
        </Group>
      )
    }
  }
export default CalendarMonth;
