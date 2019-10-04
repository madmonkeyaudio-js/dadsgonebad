import React from 'react'
import Wheel from '../components/Wheel'
import HappyMan from '../components/HappyMan'

export default function Home() {
    return (
        <div>
            <HappyMan />
            <div>
                Insert some text here
                with background color #CE902A
                #FCEBB6
            </div>
            <div className="wheel-div">
                <Wheel />
            </div>
        </div>
    )
}
