const Bravey = require('bravey')
const cardsSource = require('./information.json')
const nlp = new Bravey.Nlp.Fuzzy;

nlp.addIntent("Graphic_cards_information",[{entity:"vga_name",id:"vga_type"}])
nlp.addIntent("Question",[{entity:"vga_name", id: "vga_type"}])
nlp.addIntent("Ram_question",[{entity:"vga_name", id:"vga_type"}])
nlp.addIntent("Quantity",[{entity:"vga_name", id: "vga_type"},{entity:"num", id:"quantity"}])
nlp.addIntent("name",[{entity: 'nick', id: 'nickname'}])
nlp.addIntent("System",[{entity:"cmd", id:"command"}])
nlp.addIntent("Availibilty",[{entity: "vga_name" , id: "vga_type"}])

nlp.addEntity(new Bravey.NumberEntityRecognizer("num"))
nlp.addEntity(new Bravey.StringEntityRecognizer("nick"))
let item = new Bravey.StringEntityRecognizer("vga_name")
let list = Object.keys(cardsSource.Cards)
list.forEach(cardname=>{
    item.addMatch(cardname,cardname)
})
nlp.addEntity(item)
let osCommands = new Bravey.StringEntityRecognizer("cmd")
let commands = Object.keys(cardsSource.OS_Calls)
commands.forEach(cmd=>{
    osCommands.addMatch(cmd,cmd)
})
nlp.addEntity(osCommands)

nlp.addDocument(`hello there || hi || hola || excuse me`,`name`,{fromFullSentence: true,expandIntent: true})
nlp.addDocument("I want {vga_name} || what is {vga_name}","Graphic_cards_information")
nlp.addDocument("Give me information about {vga_name}","Question")
nlp.addDocument("What is {vga_name}","Question")
nlp.addDocument("yo say {vga_name} ","Question")
nlp.addDocument("ram of {vga_name} || memory of {vga_name}","Ram_question")
nlp.addDocument("What will be the price of {num} {vga_name}","Quantity")
nlp.addDocument("Please open {cmd}","System")
module.exports = {
    NLP: nlp,
    cardsSource: cardsSource
}