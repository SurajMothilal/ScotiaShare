import React, {Component} from 'react'
import Project from '../components/Project'
import {connect} from 'react-redux'
import actions from '../actions/actions'
import APIManager from '../Utils/APIManager'

class Projects extends Component {
    
    componentDidMount(){
        const url = '/api/project'
        APIManager.get(url, null, function(err, response){
            if(err){
                alert('Resource not found '+err)
                return
            }
            this.props.projectsReceived(response)
        }.bind(this))
    }
    
    projectSelected(ind){
        this.props.projectSelected(ind)
    }
    
    renderList(){
        return this.props.projectList.map((project,i)=>{
            return (
                <li key={i} className="list-item"><Project selectKey={i} payload={project} onSelect={this.projectSelected.bind(this)} /></li>
            )
        })
    }
    
    render(){
        return (
            <div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        projectList:state.project.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        projectsReceived: (projects)=> dispatch(actions.projectsReceived(projects)),
        projectSelected: (index)=> dispatch(actions.projectSelected(index))
    }
}

export default connect(stateToProps,dispatchToProps)(Projects)
