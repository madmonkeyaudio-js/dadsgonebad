import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Fannypack from './pages/fannyPacks'

class Content extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/fannypacks" component={Fannypack}/>      
            </div>
        )
    }
}

export default Content
