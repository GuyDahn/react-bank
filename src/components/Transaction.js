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
                <i id='amount'>
                    ${this.props.data.amount}
                </i>
                <p> Vendor:
                 <i>
                        {this.props.data.vendor}
                    </i>
                </p>

                <p>Purpose:
                <i>
                        {this.props.data.category}
                    </i>
                </p>
                <hr />
            </div >)
    }
}
export default Transaction