const express = require('express')
const router = express.Router()

const myDb = require('../models/db.js')
const usersCollection = myDb.collection('users')
const { ObjectId } = require('mongodb');

router.get('/', async (req, res) => {
    
    const result = await usersCollection.find();

    const resultArr = []
    await result.forEach(item => resultArr.push(item))

    return res.send(resultArr)

})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const objectId = new ObjectId(`${id}`)
    
    const result =  await usersCollection.findOne({_id: objectId})
    
    return res.send(result)
})

router.post('/', async (req, res) => {
    const newUsers = req.body 
    // console.log(newUsers)

    const result = await usersCollection.insertOne(newUsers)
    
    return res.send('User Added')
    
    
})

router.put('/', async (req, res) => {
    const updateUser = req.body 
    const {_id, username, password, email, age, account_balance} = updateUser
    const objectId = new ObjectId(`${_id}`)
    const result = await usersCollection.updateOne({_id: objectId}, {$set: {password: password, email: email, age: age, account_balance: account_balance}})

    return res.send(result)
})


router.delete('/', async (req, res) => {
    const {idd} = req.body
    
    const objectId = new ObjectId(`${idd}`)
    const result = await usersCollection.deleteOne({_id: objectId})
    return res.send(result)

})


module.exports = router