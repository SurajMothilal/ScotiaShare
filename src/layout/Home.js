import React, {Component} from 'react'
import Projects from '../containers/Projects'
import Information from '../containers/Information'

class Home extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col col-md-3">
                        <Projects />
                   </div>
                   <div className="col col-md-5">
                        <Information />
                   </div>
                </div>
            </div>
        )
    }
}

export default Home
