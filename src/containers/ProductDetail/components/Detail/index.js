import React, { Component } from 'react'
import './style.css'

class Detail extends Component {
    render() {
        const {
            currentPrice,
            oldPrice,
            detail: {
                category,
                products
            }
        } = this.props.data
        return (
           <></>
        )
    }
}

export default Detail
