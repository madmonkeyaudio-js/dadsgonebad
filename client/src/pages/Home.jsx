import React from 'react'
import Wheel from '../components/Wheel'
import HappyMan from '../components/HappyMan'

export default function Home() {
    return (
        <div>
            <div className="body">
                <div className="body-text">
                    <h2>Hey there!</h2>
                </div>
                <HappyMan />
                <div className="image-stack">
                    
                </div>
            </div>
            <div className="divider">
                <div className="quote">
                    Quote of the day: "Build a man a fire and he will be warm for an hour, 
                    set a man on fire and he will be warm the rest of his life." ~Abe Lincoln
                </div>
            </div>
            <div className="wheel-div">
                <div className="wheel-text">
                    Click the wheel to spin! Landing on an icon will yield 
                    sweet deals on our latest designs! Don't miss out while supplies last!
                </div>
                <Wheel />
                <div className="placeholder">

                </div>
            </div>
        </div>
    )
}
