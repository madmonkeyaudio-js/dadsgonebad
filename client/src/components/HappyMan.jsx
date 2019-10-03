import React, { Component } from 'react'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

class HappyMan extends Component {
    render() {
        return (
            <div className="man-interact">
                <LeftButton />
                    <div className="man-image">
                        <img src="https://st2.depositphotos.com/1854227/6571/i/950/depositphotos_65716507-stock-photo-funny-weak-sportsman-with-hands.jpg" alt=""/>
                    </div>
                <RightButton />
            </div>
        )
    }
}

export default HappyMan
