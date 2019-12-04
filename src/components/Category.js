import React, { Component } from 'react';


class Category extends Component {
    findCateg = () => {
        let transactions = this.props.transactions
        let breakdown = []
        for (let i = 0; i < transactions.length; i++) {
            if (!breakdown
                .includes(transactions[i].category)) {
                breakdown
                    .push(transactions[i].category)
            }
        }
        return breakdown
    }

    breakByCateg = () => {
        let breakdown = this.findCateg()
        let transactions = this.props.transactions
        let result = []
        for (let i = 0; i < breakdown.length; i++) {
            let arr = transactions
                .filter(c => c.category === breakdown[i])
                .map(c => c)
            result.push(arr)
        }
        return result
    }

    render() {
        let category = this.breakByCateg()
        return (
            <div>
                {category.map((m, i) => <div key={i}>
                    <div>
                        <h4> {m[0].category} </h4>
                    </div>
                    <div key={i}> {m.map((m, i) =>
                        <div key={i}>{m.vendor} {m.amount}
                        </div>)}
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Category; 