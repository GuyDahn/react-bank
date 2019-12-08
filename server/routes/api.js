const express = require('express')
const router = express.Router()
const Transaction = require('../models/transactionSchema')

router.get('/transactions', async function (req, res) {
    await Transaction.find({}, function (err, transactions) {
        res.send(transactions)
    })
})

router.post('/transaction', async function (req, res) {
    newTransaction = new Transaction(req.body)
    await newTransaction.save()
    res.send(newTransaction)
})

router.delete('/transaction/:id', async function (req, res) {
    await Transaction.findByIdAndDelete({ _id: req.params.id })
    res.send("success")
})

module.exports = router