import React, {Component} from 'react'
import Projects from '../containers/Projects'
import Information from '../containers/Information'
import Person from '../containers/Person'

class Home extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col col-md-2">
                        <Projects />
                    </div>
                    <div className="col col-md-7">
                        <Information />
                    </div>
                    <div className="col col-md-3">
                        <Person />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
