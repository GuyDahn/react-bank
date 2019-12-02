import React, { Component } from 'react';
import Transaction from "./Transaction";

class Transactions extends Component {

    render() {
        return (
            <div className="transactions">
                {this.props.transactions.map((t, i) =>
                    <div key={i}> <Transaction
                        data={t}
                        id={i}
                        removeTrans={this.props.removeTrans} />
                    </div>
                )}
            </div>)
    }
}
export default Transactions