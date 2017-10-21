import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import registerServiceWorker from './registerServiceWorker'
import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';

const style = {
    border: '5px solid red'
}
ReactDOM.render(
    <Stage width={800} height={800} style={style}>
        <Layer>
            <Group>
                <CircularCalendar width={800} height={800} />
            </Group>
        </Layer>
    </Stage>, document.getElementById('root'))

registerServiceWorker()
