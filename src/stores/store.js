import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import projectReducer from '../reducers/projectReducer'

var store;

export default {
    
    configureStore: () => {
        const reducers = combineReducers({
            project:projectReducer
        })
        
        store = createStore(
            reducers,
            applyMiddleware(thunk)
        )
        
        return store    
    },
                            
    currentStore: () => {
            return store
    }                            
}
