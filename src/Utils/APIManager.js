import axios from 'axios'

export default {
    
    get:(url, param, callback) =>{
        axios.get(url, {params:param}).then(function(response) {
            if(response.data.confirmation!='Success'){
                callback({message:'Resource not found, Axios get failed'}, null)
                return
            }
            callback(null, response.data.content)
        }).catch(function(error){
            callback(error,null)
        })
    }
}