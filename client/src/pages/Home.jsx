import React from 'react'
import Wheel from '../components/Wheel'
import HappyMan from '../components/HappyMan'

export default function Home() {
    return (
        <div>
            <div className="body">
                <div className="body-text">
                    <h3>We are bringing the dad fad back!</h3>
                </div>
                <HappyMan />
                <div className="image-stack">
                    <div>
                        <img className="fanny-image" src={process.env.PUBLIC_URL + '/yourmom.png'} alt=""/>
                    </div>
                    <div >
                        <img className="jorts-image" src={process.env.PUBLIC_URL + '/yourdad.png'} alt=""/>
                    </div>
                    <div>
                        <img className="sandal-image" src={process.env.PUBLIC_URL + '/sandal.png'} alt=""/>
                    </div>
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
