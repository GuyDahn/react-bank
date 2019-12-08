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
        const breakdown = this.findCateg()
        let transactions = this.props.transactions
        const result = []
        for (let i = 0; i < breakdown.length; i++) {
            let categories = transactions
                .filter(c => c.category === breakdown[i])
                .map(c => c)
            result.push(categories)
        }
        return result
    }

    render() {
        let category = this.breakByCateg()
        return (
            <div>
                {category.map((c,i) =>
                    <div key={i}>

                        <h4> {c[0].category} </h4>

                        <div key={i}> {c.map((c, i) =>
                            <div key={i}>
                                <i>{c.vendor}</i>
                                ${c.amount} 
                            </div>)}
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        )
    }
}

export default Category; 