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
        this.props.addDepoz(
            this.state.amount,
            this.state.vendor,
            this.state.category)
    }

    addWithdraw = () => {
        this.props.addWithdraw(
            this.state.amount,
            this.state.vendor,
            this.state.category)
    }

    updateText = (event) => {
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='operations'>
                <input type='number' name='amount'
                    placeholder='Amount' onChange={this.updateText} />
                
                <input type='text' name='vendor'
                    placeholder='Vendor' onChange={this.updateText} />
                
                <input type='text' name='category'
                    placeholder='Category' onChange={this.updateText} />
                
                <button className='depoz'
                    onClick={this.addDepoz}>Depoz</button>
                
                <button className='withdraw'
                    onClick={this.addWithdraw}>Withdraw</button>
            </div>)
    }
}

export default Operations