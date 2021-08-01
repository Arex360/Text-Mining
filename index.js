const {NLP} = require('./NLP.js')
const {actions} = require('./actions.js')
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())
app.use(cors())
let output = null


app.post('/ask',(req,res)=>{
    let statement = req.body.statement
    const output = NLP.test(statement)
    const out = actions[output.intent](output)
    res.send(out)
})

app.listen(5000,()=>{
     output = NLP.test("Ah man, RX 580 in stock?")
    let out = actions[output.intent](output)
    console.log(out)
})

