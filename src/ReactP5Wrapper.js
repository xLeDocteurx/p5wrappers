import React, {Component} from 'react'
import p5 from 'p5'

class P5Wrapper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            canvas: null,
        }
    }

    componentDidMount(){
        this.setState({canvas: new p5(this.props.sketch, this.el)})
    }

    render() {
        return (
            <div ref={(el) => {this.el = el}}></div>
        )
    }
}

export default P5Wrapper