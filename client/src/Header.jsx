import React from 'react'

export default function Header() {
    return (
        <div className="App-header">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/>
            </div>
        </div>
    )
}
