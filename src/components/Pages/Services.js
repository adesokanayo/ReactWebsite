import React,{ Component} from 'react';
import Image from '../assets/img/header-bg.jpg';
import SingleService from '../Common/SingleService';


const services  = [
    {title:'E-Commerce', description:'E-Commerce Projects', icon:'fa-shopping-cart' },
    {title:'Web Security', description:'orem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto', icon:'fa-lock ' },
    {title:'Responsive Design', description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fa-laptop' }

]

class Services extends Component{

    
    

    render(){
  const myImage = {Image}
        console.log(myImage);
        return(
            <div>


                <section className="page-section" id="services">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                       {
                           services.map((service, index) =>{
                           
                         return   <SingleService  {...service} key={index}/>
                        
                           })
                       }
                    </div>
                    </div>
                </section>


            </div>
        )
    }
}



export default Services;