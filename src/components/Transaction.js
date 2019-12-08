import React, { Component } from 'react';
import Moment from 'react-moment';

class Transaction extends Component {

    removeTrans = () => {
        this.props.removeTrans(this.props.id)
    }

    render() {
        return (
            <div className="single-trans">


                <p>
                    Date:
                       <i>
                        <Moment format="DD.MM.YY">{this.props.data.date}</Moment>
                    </i>
                </p>
                <hr />
                <p> Vendor:
                     <i>
                        {this.props.data.vendor}
                    </i>
                </p>

                <hr />

                <p>
                    Purpose:
                       <i>
                        {this.props.data.category}
                    </i>
                </p>

                <hr />

                <i id='amount'>
                    ${this.props.data.amount}
                </i>

                <button className='dlt-btn'
                    onClick={this.removeTrans}>
                    &#215;
                </button>

            </div >)
    }
}
export default Transaction