const Bravey = require('bravey')
const info = require('./information.json')
const nlp = new Bravey.Nlp.Fuzzy;
nlp.addEntity(new Bravey.NumberEntityRecognizer("num"))
nlp.addEntity(new Bravey.StringEntityRecognizer("nick"))
let item = new Bravey.StringEntityRecognizer("vga_name")
let list = Object.keys(info.Cards)
list.forEach(cardname=>{
    item.addMatch(cardname,cardname)
})
nlp.addEntity(item)
let osCommands = new Bravey.StringEntityRecognizer("cmd")
let commands = Object.keys(info.OS_Calls)
commands.forEach(cmd=>{
    osCommands.addMatch(cmd,cmd)
})
nlp.addEntity(osCommands)


let time = new Bravey.StringEntityRecognizer("time")
time.addMatch("time","time")
nlp.addEntity(time)
module.exports = {
    nlp: nlp
}