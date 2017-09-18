import React, {Component} from 'react'
import styles from './style.css'

class Project extends Component {
    
    selectProject(event){
        event.preventDefault()
        this.props.onSelect(this.props.selectKey)
    }
    
    render(){
        return (
            <div style={styles.project.mainBox}>
                <div onClick={this.selectProject.bind(this)}>
                    {this.props.payload.name}
                </div>
            </div>
        )
    }
}

export default Project
