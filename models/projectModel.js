var mongoose = require('mongoose')

var ProjectSchema = new mongoose.Schema({
    name:{type:String, default:''},
    creator:{type:String, default:''},
    timestamp:{type:Date, default:Date.now},
    requirements:{type:Array, default:[]},
    deadline:{type:Date, default:Date.now},
    status:{type:String, default:'New'},
    description:{type:String, default:''},
    priority:{type:String, default:'Normal'}
})

module.exports = mongoose.model('ProjectSchema', ProjectSchema)