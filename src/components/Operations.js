
import React, { Component } from 'react'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: ""
        }
        this.updateText = this.updateText.bind(this)
    }
    addDepoz = () => {
        this.props.addDepoz(this.state.amount, this.state.vendor, this.state.category)
    }

    addWithdraw = () => {
        this.props.addWithdraw(this.state.amount, this.state.vendor, this.state.category)
    }

    updateText = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='operations'>
                <input type='number' id='amount' placeholder='Amount' onChange={this.updateText}></input>
                <input type='text' id='vendor' placeholder='Vendor' onChange={this.updateText}></input>
                <input type='text' id='category' placeholder='Category' onChange={this.updateText}></input>
                <button className='depoz' onClick={this.addDepoz}>Depoz</button>
                <button className='withdraw' onClick={this.addWithdraw}>Withdraw</button>
            </div>)
    }
}

export default Operations