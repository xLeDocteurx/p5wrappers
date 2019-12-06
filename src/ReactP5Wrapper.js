// import React, {Component} from 'react'
const {Component} = require('react')
import p5 from 'p5'

class P5Wrapper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            canvas: null,
        }

        this.doesComponentReceivedDatas = this.doesComponentReceivedDatas.bind(this)
    }

    componentDidMount() {
        this.setState({canvas: new p5(this.props.sketch, this.el)})
    }

    componentDidUpdate() {
        this.doesComponentReceivedDatas()
    }

    doesComponentReceivedDatas() {
        this.state.canvas.datas = this.props.datas ? this.props.datas : null

        // this.setState((prevState) => ({
        //     canvas: {
        //         ...prevState.canvas,
        //         ...dataObject
        //     }
        // }))
    }

    render() {
        return (
            <div ref={(el) => {this.el = el}}></div>
        )
    }
}

export default P5Wrapper