import React, { Component } from 'react'
import HappyMan from './components/HappyMan'
import Wheel from './components/Wheel'


class Content extends Component {
    render() {
        return (
            <div>
                <HappyMan />
                <Wheel />
            </div>
        )
    }
}

export default Content
