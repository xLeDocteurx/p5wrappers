[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/xLeDocteurx/p5wrappers)](https://www.npmjs.com/package/p5wrappers)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/xLeDocteurx/p5wrappers/pulls)
[![GitHub](https://img.shields.io/github/license/xLeDocteurx/p5wrappers)](https://github.com/xLeDocteurx/p5wrappers/pulls)

# p5-wrapper

P5.js wrappers for React and Vue.js 
This Components lets you integrate p5 Sketches into your React & Vue App.

- 0.1.0 update : Now you can pass a data object to the wrappers to receive data from your components into your sketch scripts

## Installation
```
npm install p5wrappers --save
```


## Usage

### For React
```javascript
import React, {Component} from 'react'
// import as for fancy name
import {ReactP5Wrapper as P5} from 'p5wrappers'

import yourSketch from './yourDir/yourSketch'

// Yes I prefer class components rather than functionnal components
// But you can write yours the way you want
class YourComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sketch: yourSketch,
            backgroundColor: '#F4F4F4'
        }
    }

    render() {
        return (
            <div>
                <!-- Your stuff -->

                <!-- 
                You can inject some data object into the component 
                via the "data" props to get it in the sketch script
                -->
                <P5 sketch={this.state.sketch} data={{backgroundColor}} />
            </div>
        )
    }
}

export default YourComponent
```

### For Vue
```html
<template>
    <div>
        <!-- Your stuff -->

        <!-- 
        You can pass some data object into the component 
        via the "data" props to receive it in the sketch script
        -->
        <P5 :sketch="this.sketch" :data="{this.sketch}" />
    </div>
</template>

<script>
// import as for fancy name
import {VueP5Wrapper as P5} from 'p5wrappers'

import yourSketch from './yourDir/yourSketch'

export default {
    name: 'YourComponent',
    components: {
        P5,
    },
    data() {
        return {
            sketch: yourSketch,
        }
    }
}
</script>
```

A Sketch could look like this and should be passed as a prop into the component:
it uses the instance mode of p5, see : [https://github.com/processing/p5.js/wiki/Global-and-instance-mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode)
```javascript
export default function sketch (p5) {
    let canvas = null

    p5.setup = function() {
        canvas = p5.createCanvas(0,0)
    }
  
    p5.draw = function() {
        // You can get the data into the data props
        const color = p5.data.color
        p5.background(color)
    }
}
```