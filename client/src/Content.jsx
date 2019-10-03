import React, { Component } from 'react'
import HappyMan from './components/HappyMan'
import Wheel from './components/Wheel'
import { Route } from 'react-router-dom'
import Fannypack from './pages/fannyPacks'

class Content extends Component {
    render() {
        return (
            <div>
                <Route exact path="/fannypacks" component={Fannypack}/>   
                <HappyMan />
                <Wheel />
            </div>
        )
    }
}

export default Content
