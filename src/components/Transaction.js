import React, { Component } from 'react';


class Transaction extends Component {

    removeTrans = () => {
        this.props.removeTrans(this.props.id)
    }

    render() {
        return (
            <div>
                <button onClick={this.removeTrans}>&#215;</button>
                {this.props.data.vendor} {this.props.data.amount} {this.props.data.category}
            </div>)
    }
}
export default Transaction