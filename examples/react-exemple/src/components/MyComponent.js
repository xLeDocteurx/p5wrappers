import React, {Component, Fragment} from 'react'
import {ReactP5Wrapper as P5} from 'p5wrappers'
import sketch from '../assets/sketch'

class MyComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sketch: sketch
        }
    }

    render() {
        return (
            <Fragment>
                <P5 sketch={this.state.sketch} />
            </Fragment>
        )
    }
}

export default MyComponent