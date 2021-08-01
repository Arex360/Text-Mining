const {nlp} = require('./Entity.js')

nlp.addIntent("Graphic_cards_information",[{entity:"vga_name",id:"vga_type"}])
nlp.addIntent("Question",[{entity:"vga_name", id: "vga_type"}])
nlp.addIntent("Ram_question",[{entity:"vga_name", id:"vga_type"}])
nlp.addIntent("Quantity",[{entity:"vga_name", id: "vga_type"},{entity:"num", id:"quantity"}])
nlp.addIntent("name",[{entity: 'nick', id: 'nickname'}])
nlp.addIntent("System",[{entity:"cmd", id:"command"}])
nlp.addIntent("Availibilty",[{entity: "vga_name" , id: "vga_type"}])
nlp.addIntent("time",[{entity:"time" , id:"timeInfo"}])
module.exports = {
    nlp: nlp
}