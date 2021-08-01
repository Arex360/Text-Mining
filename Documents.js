const {nlp} = require('./intents.js')
const Documents = require('./Documents.json')
let keys = Object.keys(Documents.DataSet)
keys.forEach(key=>{
    nlp.addDocument(Documents.DataSet[key].statement,Documents.DataSet[key].intent)
})
module.exports={
    nlp:nlp
}