import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class TeamMember extends Component {

    render(){


        return (
         

          <div class="col-md-3 col-sm-6">
          <Link to="#">
            <img class="img-fluid d-block mx-auto" src={this.props.logo} alt=""/>
          </Link>
        </div>
       
        )
           
    }
}


export default TeamMember;