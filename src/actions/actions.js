import constants from '../constants/constants'

export default {
    
    projectsReceived: (projects) => {
        return {
            type:constants.PROJECTS_LOADED,
            payload:projects
        }
    },
    projectSelected:(index) => {
        return {
            type:constants.PROJECT_SELECTED,
            payload:index
        }
    },
    personLoaded:(person)=> {
        return {
            type:constants.PERSON_LOADED,
            payload:person
        }
    }
}