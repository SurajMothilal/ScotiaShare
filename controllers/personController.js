var PersonModel = require('../models/personModel')

module.exports = {
    
     find:function(params, callback){
        PersonModel.find(params, function(err, projects){
            if(err){
                callback(err, null)
                return
            }
            callback(null, projects)
        })
    },
    
    findById:function(id, callback){
        PersonModel.findById(id, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    create:function(params, callback){
        PersonModel.create(params, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    update:function(id,params,callback){
        PersonModel.findByIdAndUpdate(id, params, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    delete:function(id, callback){
        PersonModel.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null)
        })
        
    }
}