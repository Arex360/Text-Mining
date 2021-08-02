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
       try{
        const out = info.Cards[e.entitiesIndex.vga_type.value].price * parseInt(e.entitiesIndex.quantity.string)
        return out.toString()
       }catch(e){
        const out = info.Cards[e.entitiesIndex.vga_type.value].price 
        return out.toString()
       }
    },
    name: e=>{
        return "Hey,I am arex.. How are you doing"
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
    },
    time: e=>{
        let time = new Date().toLocaleTimeString()
        return `its ${time} sir`
    }
}
module.exports = {
    actions: actions
}