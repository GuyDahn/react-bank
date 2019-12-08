import React, { Component } from 'react';
import Transaction from "./Transaction";

class Transactions extends Component {
    calcBalance = () => {
        this.props.calcBalance()
    }
    render() {
        return (
            <div className="transactions">
                <h3 id='balance'>
                    Total balance: ${this.props.calcBalance}
                </h3>
                <h3 id='trans-title'>My Transactions:</h3>
                {this.props.transactions.map((t, i) =>
                    <div key={i}>
                        <Transaction data={t} id={i}
                            removeTrans={this.props.removeTrans}
                        />
                        <hr />
                    </div>
                )}
            </div>)
    }
}
export default Transactions