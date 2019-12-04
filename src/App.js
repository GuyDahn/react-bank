import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import axios from 'axios'
import Transactions from './components/Transactions';
import Operations from './components/Operations'
import Category from './components/Category'


export class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  calcBalance = () => {
    let sum = 0
    let transactions = [...this.state.transactions]
    for (let i = 0; i < transactions.length; i++) {
      sum += transactions[i].amount
    }
    return sum
  }

  addDepoz = async (amount, vendor, category) => {

    await axios.post(`http://localhost:4200/transaction`, {
      amount: parseInt(amount),
      vendor: vendor,
      category: category.toLowerCase()
    })
    await this.componentDidMount()
  }

  addWithdraw = async (amount, vendor, category) => {
    try {
      await axios.delete(`http://localhost:4200/transaction`, {
        amount: -parseInt(amount),
        vendor: vendor, category:
          category.toLowerCase()
      })
        .then(res => {
          let transactions = [...this.state.transactions]
          transactions.push(res.data)
          this.setState({ transactions })
        })
    } catch (err) {
      console.log(err)
    }
  }

  removeTrans = async (id) => {
    try {
      let transactions = [...this.state.transactions]
      let tid = transactions[id]._id
      await axios.delete(`http://localhost:4200/transaction/${tid}`)
      await this.componentDidMount()
    } catch (err) {
      console.log(err)
    }
  }

  renderTransactions = async () => {
    try {
      let transactions = await axios.get("http://localhost:4200/transactions")
      this.setState({
        transactions: transactions.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    await this.renderTransactions()
  }

  render() {
    return (
      <Router>
        <div className="app">
          <h1>Schitti Bank</h1>

          <div id='menu'>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/add">Add Transaction</Link>
            </button>
            <button>
              <Link to="/category">Categories</Link>
            </button>
          </div>

          <br></br>
          <Route exact path='/' exact render={() =>
            <Transactions
              transactions={this.state.transactions}
              removeTrans={this.removeTrans}
              calcBalance={this.calcBalance()}
            />} >
          </Route>

          <Route exact path='/add' exact render={() =>
            <Operations
              addDepoz={this.addDepoz}
              addWithdraw={this.addWithdraw}
            />}>
          </Route>

          <Route path="/category" exact render={() =>
            <Category
              transactions={this.state.transactions}
            />}>
          </Route>
          
        </div>
      </Router>
    )
  }
}

export default App