import actions from '../actions/actions'
import constants from '../constants/constants'

var initialState = {
    currentPerson:{},
    personReceived:false
}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state)
    switch(action.type){
        case constants.PERSON_LOADED:
            let updatedCurrent = Object.assign({}, updated.currentPerson)
            updatedCurrent = action.payload
            updated['currentPerson'] = updatedCurrent
            updated['personReceived'] = true
            return updated
        
        case constants.PROJECT_SELECTED:
            updated['personReceived'] = false
            return updated
        
        default:
            return state
    }
}