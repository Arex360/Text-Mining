const {info} = require('./NLP.js')
const {exec} = require('child_process')
let actions = {
    Question: e =>{
        const out = info.Cards[e.entitiesIndex.vga_type.value].information
        return out
    },
    Graphic_cards_information: e =>{
        const out = info.Cards[e.entitiesIndex.vga_type.value].information
        return out
    },
    Ram_question: e=>{
        const out = info.Cards[e.entitiesIndex.vga_type.value].Ram
        return out
    },
    Quantity: e=>{
        const out = info.Cards[e.entitiesIndex.vga_type.value].price * parseInt(e.entitiesIndex.quantity.string)
        return out
    },
    name: e=>{
        return "I am arex"
    },
    System: e=>{
        exec(info.OS_Calls[e.entitiesIndex.command.value])
        return "ok sir"
    },
    Availibilty: e=>{
        const out = info.Cards[e.entitiesIndex.vga_type.value].isAvailible
        if(out){
            return "Yes its availible"
        }else{
            return "No, its not availible"
        }
    }
}
module.exports = {
    actions: actions
}