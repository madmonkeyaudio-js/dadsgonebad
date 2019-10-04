import React, { Component } from 'react'
import axios from 'axios'
import SERVER_URL from '../constants'

class fannyPacks extends Component {
    state = {
        items: []
    }

    componentDidMount(){
        this.getItems()
    }
    
    getItems = () => {
        axios.get(`${SERVER_URL}/fannypacks`)
        .then(response => {
            console.log(response.data)
            this.setState({
                items: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        let fannies = this.state.items.map((item, idx) => {
            return (
                <div key={idx}>
                    <div className="flex-items-display">
                        <div className="left-display">
                            <img src={item.image} alt="fannypack-image"/>
                        </div>
                        <div className="right-display">
                            <h3>{item.description}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                    <br/>
                </div>
            )
        })

        return (
            <div>
                 {fannies}
            </div>
        )
    }
}

export default fannyPacks
