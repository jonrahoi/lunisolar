import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CircularCalendar from './CircularCalendar'
import registerServiceWorker from './registerServiceWorker'
import {Stage, Group, Layer, Arc, Text, Rect} from 'react-konva';

ReactDOM.render(
    <Stage width={1000} height={1000}>
        <Layer>
            <Group>
                <CircularCalendar />
            </Group>
        </Layer>
    </Stage>, document.getElementById('root'))

registerServiceWorker()
