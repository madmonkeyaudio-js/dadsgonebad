import React from 'react'
import Wheel from '../components/Wheel'
import HappyMan from '../components/HappyMan'

export default function Home() {
    return (
        <div>
            <HappyMan />
            <div className="wheel-div">
                <Wheel />
            </div>
        </div>
    )
}
