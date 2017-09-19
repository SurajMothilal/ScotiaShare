import React, {Component} from 'react'
import {connect} from 'react-redux'
import APIManager from '../Utils/APIManager'
import actions from '../actions/actions'

class Person extends Component {
    
    componentDidUpdate(){
        const project = this.props.projectList[this.props.selectedProjectIndex]
        const url = '/api/person'
        if(this.props.personReceived==false){
            APIManager.get(url, {name:project.creator}, function(err, response){
                if(err){
                    alert('Person not found '+err)
                    return
                }
                this.props.personLoaded(response[0])

            }.bind(this))
        }
    }
    
    
    getProject(){
        const project = this.props.projectList[this.props.selectedProjectIndex]
        if(project==null){
            return 'Loading'
        }
        return project
    }
    
    render(){
        const project = this.getProject()
        return (
            <div>
                <h3>{project.creator}</h3>
                <span>Creator</span>
                <h4>Designation : {this.props.currentPerson.designation}</h4>
            </div>
        )
    }
}

const stateToProps = (state)=>{
    return {
        selectedProjectIndex:state.project.selectedProject,
        projectList:state.project.list,
        currentPerson:state.person.currentPerson,
        personReceived: state.person.personReceived
    }
}

const dispatchToProps = (dispatch)=> {
    return {
        personLoaded:(person)=> dispatch(actions.personLoaded(person))
    }
}

export default connect(stateToProps, dispatchToProps)(Person)