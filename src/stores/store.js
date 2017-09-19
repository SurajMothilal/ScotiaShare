import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import projectReducer from '../reducers/projectReducer'
import personReducer from '../reducers/personReducer'

var store;

export default {
    
    configureStore: () => {
        const reducers = combineReducers({
            project:projectReducer,
            person:personReducer
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
