import React, {Component} from 'react'
import {connect} from 'react-redux'

class Information extends Component {
    
    getProject(){
         const project = this.props.projectList[this.props.selectedProject]
         if(project==null){
             return 'Loading'
         }
         return project
    }
    
    render(){
        const project = this.getProject()
        return (
            <div>
                <h3>{project.name}</h3>
                <h4>{project.status}</h4>
                <span>{project.deadline}</span>
            </div>    
        )
    }
}

const stateToProps = (state)=> {
    return {
        selectedProject:state.project.selectedProject,
        projectList:state.project.list
    }
} 

export default connect(stateToProps, null)(Information)