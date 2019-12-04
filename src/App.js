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
        // { amount: 3200, vendor: "Elevation", category: "Salary" },
        // { amount: -7, vendor: "Runescape", category: "Entertainment" },
        // { amount: -20, vendor: "Subway", category: "Food" },
        // { amount: -98, vendor: "La Baguetterie", category: "Food" }
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

  addDepoz = async (amount, vendor, category) => {

    await axios.post(`http://localhost:4200/transaction`, {
      amount: parseInt(amount),
      vendor: vendor,
      category: category.toLowerCase()
    })
    await this.componentDidMount()
  }

  addWithdraw = async (amount, vendor, category) => {
    try{
    await axios.delete(`http://localhost:4200/transaction`, {
      amount: -parseInt(amount),
      vendor: vendor, category:
        category.toLowerCase()
    })
      .then(res => {
        // console.log(res.data);
        let transactions = [...this.state.transactions]
        transactions.push(res.data)
        this.setState({ transactions })
      })
    } catch (err) {
      console.log(err)
    }
  }

  removeTrans = async (id) => {
    try{
    let transactions = [...this.state.transactions]
    let tid = transactions[id]._id
    console.log(transactions[id]._id)
    
    await axios.delete(`http://localhost:4200/transaction/${tid}`)
    await this.componentDidMount()
    } catch(err) {
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
      <div className="app">
        <h1>Welcome To Schitti Bank</h1>

        <h4 id='balance'>
          Total balance: {this.calcBalance()}
        </h4>
        <br></br>
        <div id='operations'>
          <Operations
            addDepoz={this.addDepoz}
            addWithdraw={this.addWithdraw} />
        </div>
        <br></br>

        <Transactions
          transactions={this.state.transactions}
          removeTrans={this.removeTrans} />
      </div>
    )
  }
}

export default App