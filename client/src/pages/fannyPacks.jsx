import React, { Component } from 'react'
import axios from 'axios'
import SERVER_URL from '../constants'

class fannyPacks extends Component {
    state = {
        items: null
    }

    componentDidMount(){
        this.getItems()
    }
    
    getItems = () => {
        axios.get(`${SERVER_URL}/fannypacks`)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {


        return (
            <div>
                 
            </div>
        )
    }
}

export default fannyPacks
