var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:resource', function(req, res, next){
    
    var resource = req.params.resource
    var controller = controllers[resource]
    
    if(controller==null){
        res.send('PAGE NOT FOUND. CHECK PAGE URL')
        return
    }
    
    controller.find(req.query, function(err, response){
        if(err){
            res.json({
                confirmation:'Failure',
                content:err
            })
            return
        }
        res.json({
            confirmation:'Success',
            content:response
        })
    })
})

router.post('/:resource', function(req, res, next){
    
    var resource = req.params.resource
    var controller = controllers[resource]
    
    controller.create(req.body, function(err, response){
        if(err){
            res.json({
                confirmation:'Failure',
                content:err
            })
            return
        }
        res.json({
            confirmation:"Success",
            content:response
        })
    })
})

module.exports = router
