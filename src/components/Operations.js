import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            vendor: "",
            category: "",
            date: ""
        }
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
                <ul>
                    <li>
                        <input
                            type='number'
                            name='amount'
                            placeholder='Amount'
                            onChange={this.updateText}
                        />
                    </li>
                    <li>
                        <input
                            type='text'
                            name='vendor'
                            placeholder='Vendor'
                            onChange={this.updateText}
                        />
                    </li>
                    <li>
                        <input
                            type='text'
                            name='category'
                            placeholder='Category'
                            onChange={this.updateText}
                        />
                    </li>
                </ul>
                <Link to='/'>
                    <button
                        className='op-btn'
                        onClick={this.addDepoz}>
                        Depoz
                </button>
                </Link>
                <Link to='/'>
                    <button
                        className='op-btn'
                        onClick={this.addWithdraw}>
                        Whizraw
                </button>
                </Link>
            </div>)
    }
}

export default Operations