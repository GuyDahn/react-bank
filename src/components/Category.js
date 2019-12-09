import React, { Component } from 'react';

class Category extends Component {

    findTransactionType = () => {
        let transactions = this.props.transactions
        let categories = []
        for (let i = 0; i < transactions.length; i++) {
            if (!categories
                .includes(transactions[i].category)) {
                categories
                    .push(transactions[i].category)
            }
        }
        return categories
    }

    sortByCateg = () => {
        const findCateg = this.findTransactionType()
        let transactions = this.props.transactions
        const categArr = []
        for (let i = 0; i < findCateg.length; i++) {
            let categories = transactions
                .filter(c => c.category === findCateg[i])
                .map(c => c)
            categArr.push(categories)
        }
        return categArr
    }

    render() {
        let categories = this.sortByCateg()
        return (
            <div>
                {categories.map((c, i) =>
                    <div key={i}>
                        <h4> {c[0].category} </h4>
                        <div key={i}>
                            {c.map((c, i) =>
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