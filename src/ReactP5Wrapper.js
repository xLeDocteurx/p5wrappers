import React, {Component} from 'react'
import p5 from 'p5'

class P5Wrapper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            canvas: null,
        }
    }

    componentDidMount() {
        this.setState({canvas: new p5(this.props.sketch, this.el)})
        this.doesComponentReceivedDatas()
    }

    componentDidUpdate() {
        this.doesComponentReceivedDatas()
    }

    doesComponentReceivedDatas() {
        this.state.canvas.datas = this.props.datas ? this.props.datas : null
    }

    render() {
        return (
            <div ref={(el) => {this.el = el}}></div>
        )
    }
}

export default P5Wrapper