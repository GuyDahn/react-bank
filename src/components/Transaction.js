import React, { Component } from 'react';


class Transaction extends Component {

    removeTrans = () => {
        this.props.removeTrans(this.props.id)
    }

    render() {
        return (
            <div className="single-trans">
                <button className='dlt-btn'
                    onClick={this.removeTrans}>
                    &#215;
                </button>
                ${this.props.data.amount}
                <br></br>
                vendor: <i>
                    {this.props.data.vendor}
                </i>
                <br></br>
                purpose: <i>
                    {this.props.data.category}
                </i>
            </div>)
    }
}
export default Transaction