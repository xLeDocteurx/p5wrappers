<!-- [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/xLeDocteurx/p5wrappers)](https://www.npmjs.com/package/p5wrappers) -->
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/xLeDocteurx/p5wrappers/pulls)
[![GitHub](https://img.shields.io/github/license/xLeDocteurx/p5wrappers)](https://github.com/xLeDocteurx/p5wrappers/pulls)

# p5-wrapper

P5.js wrappers for React and Vue.js 
This Components lets you integrate p5 Sketches into your React & Vue App.

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
            sketch: yourSketch
        }
    }

    render() {
        return (
            <div>
                <!-- Your stuff -->
                <P5 sketch={yourSketch} />
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
        <P5 :sketch={sketch} />
    </div>
</template>

<script>
// import as for fancy name
import {VueP5Wrapper as P5} from 'p5wrappers'
import p5 from 'p5'

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

An Sketch could look like this and should be passed as a prop into the component:
it uses the instance mode of p5, see : [https://github.com/processing/p5.js/wiki/Global-and-instance-mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode)
```javascript
export default function sketch (p5) {
    let canvas = null

    p5.setup = function() {
        canvas = p5.createCanvas(0,0)
    }
  
    p5.draw = function() {
        p5.background(0)
    }
}
```