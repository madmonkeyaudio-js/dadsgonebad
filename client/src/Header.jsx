import React from 'react'
import Nav from './nav/Nav'

export default function Header() {
    return (
        <div className="App-header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/>
            </div>
            <Nav />

        </div>
    )
}
