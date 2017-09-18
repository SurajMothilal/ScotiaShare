var mongoose = require('mongoose')

var ProjectSchema = new mongoose.Schema({
    name:{type:String, default:''},
    requirements:{type:Array, default:[]},
    creator:{type:String, default:''},
    timestamp:{type:Date, default:Date.now}
})

module.exports = mongoose.model('ProjectSchema', ProjectSchema)