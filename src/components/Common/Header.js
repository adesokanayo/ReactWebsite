import React,{ Component} from 'react';
import { Link} from 'react-router-dom'



class Header extends Component{
   
    constructor(props) {
        super(props);
    
        console.log(this.props)
    }
    


    render(){




        return(
            <div>

                <header className="masthead" style={{backgroundImage: `url(${this.props.Image})` }}>
                    <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">{this.props.title}</div>
                        <div className="intro-heading text-uppercase">{this.props.subtitle}</div>
                    
              {
                  this.props.showButton &&
                 
                  <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="#services">{this.props.buttonText}</Link>
                       
              }
    
                    </div>
                    </div>
                </header>


            </div>
        )
    }
}



export default Header;