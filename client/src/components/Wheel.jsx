import React, { Component } from 'react'

class Wheel extends Component {
    render() {
        return (
            <div>
            <div className="spin-the-wheel">
            <label>
                <input type="radio"/>
                <div className="clicker"></div>
                <div className="wheel">
                    <div className="option o1">
                        <img className="fanny" src="https://i.imgur.com/BqwyZBL.png"/>
                    </div>
                <div className="option o2">
                    <img className="sandals" src="https://i.imgur.com/okQnh88.png"/>
                </div>
                <div className="option o3">
                    <img className="bino" src="https://i.imgur.com/kdMDDDJ.png"/>
                </div>
                <div className="option o4">
                    <img className="jorts" src="https://i.imgur.com/CduboXF.png"/>
                </div>
                </div>
                <div className="message">
                    You won a Fanny discount! 
                    Click to claim your prize.
                </div>
            </label>
            </div>
            </div>
        )
    }
}

export default Wheel
