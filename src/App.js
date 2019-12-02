import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Transactions from './components/Transactions';
import Operations from './components/Operations'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
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

  addDepoz = (amount, vendor, category) => {
    let transactions = [...this.state.transactions]
    transactions.push({
      amount: parseInt(amount),
      vendor: vendor,
      category: category
    })
    this.setState({ transactions })
  }

  addWidthraw = (amount, vendor, category) => {
    let transactions = [...this.state.transactions]
    transactions.push({
      amount: -parseInt(amount),
      vendor: vendor,
      category: category
    })
    this.setState({ transactions })
  }

  removeTrans = (i) => {
    let transactions = [...this.state.transactions]
    transactions.splice(1, 1)
    this.setState({ transactions })
  }

  async getTransactions() {
    return axios.get("http://localhost:4200/transactions")
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    console.log(response)
    this.setState({ transactions: response.data })
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome To Schitti Bank</h1>
        <div id='operations'>
          <Operations addDepoz={this.addDepoz}
            addWidthraw={this.addWidthraw} />
        </div>
        <div id='balance'>
          Total balance: {this.calcBalance()}
        </div>
        <Transactions transactions={this.state.transactions}
          removeTrans={this.removeTrans} />
      </div>
    )
  }
}

export default App