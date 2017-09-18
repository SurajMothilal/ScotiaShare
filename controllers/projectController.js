var ProjectModel = require('../models/projectModel')

module.exports = {
    
    find:function(params, callback){
        ProjectModel.find(params, function(err, projects){
            if(err){
                callback(err, null)
                return
            }
            callback(null, projects)
        })
    },
    
    findById:function(id, callback){
        ProjectModel.findById(id, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    create:function(params, callback){
        ProjectModel.create(params, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    update:function(id,params,callback){
        ProjectModel.findByIdAndUpdate(id, params, function(err, project){
            if(err){
                callback(err, null)
                return
            }
            callback(null, project)
        })
        
    },
    
    delete:function(id, callback){
        ProjectModel.findByIdAndRemove(id, function(err){
            if(err){
                callback(err, null)
                return
            }
            callback(null, null)
        })
        
    }
}
