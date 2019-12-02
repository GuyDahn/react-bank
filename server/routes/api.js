const express = require('express')
const router = express.Router()
const Transaction = require('../models/transactionSchema')


router.get('http://localhost:4200/transactions', function (req, res) {
    Transaction.find({}, function (err, transactions) {
        console.log(transactions)
        res.send(transactions)
    })
})

router.post('/transaction', async function (req, res) {
    newTransaction = new Transaction(req.body)
    await newTransaction.save()
    res.send("transaction saved to db")
})

router.delete('/transaction', function (req, res) {
    let amount = req.body.amount
    let category = req.body.category
    let vendor = req.body.vendor

    Transaction.findOneAndDelete({
        amount: amount,
        category: category,
        vendor: vendor
    }).then(res.end())


})



module.exports = router