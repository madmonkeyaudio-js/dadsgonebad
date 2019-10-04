import React, { Component } from 'react'
import LeftButton from './LeftButton'
import RightButton from './RightButton'

class HappyMan extends Component {
    render() {
        return (
            <div className="man-interact">
                <LeftButton />
                    <div className="man-image">
                        <img src={process.env.PUBLIC_URL + '/slack-imgs.png'} alt=""/>
                    </div>
                <RightButton />
            </div>
        )
    }
}

export default HappyMan
