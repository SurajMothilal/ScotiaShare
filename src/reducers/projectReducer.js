import actions from '../actions/actions'
import constants from '../constants/constants'

var initialState = {
    list:[],
    selectedProject:1
}

export default (state=initialState, action) => {
    let updated = Object.assign({}, state)
    switch(action.type){
        case constants.PROJECTS_LOADED:
            console.log('Projects reducer received'+ JSON.stringify(action.payload))
            const projects = action.payload
            let updatedList = Object.assign([],state.list)
            projects.forEach((project)=>{
                updatedList.push(project)
            })
            updated['list'] = updatedList
            return updated
        
        case constants.PROJECT_SELECTED:
            updated['selectedProject'] = action.payload
            return updated
        
        default:
            return state
    }
}
