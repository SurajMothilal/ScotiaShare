import React, {Component} from 'react'
import {connect} from 'react-redux'

class Information extends Component {
    render(){
        return (
            <div>
                Information for {this.props.selectedProject}
            </div>    
        )
    }
}

const stateToProps = (state)=> {
    return {
        selectedProject:state.project.selectedProject
    }
} 

export default connect(stateToProps, null)(Information)