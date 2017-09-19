var mongoose = require('mongoose')

var PersonSchema = new mongoose.Schema({
    name:{type:String, default:''},
    supervisor:{type:String, default:''},
    teammembers:{type:Array, default:[]},
    designation:{type:String, default:''},
    projects:{type:Array, default:[]},
    requirements:{type:Array, default:[]}
})

module.exports = mongoose.model('PersonSchema', PersonSchema)