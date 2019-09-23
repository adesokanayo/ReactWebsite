import React,{ Component} from 'react';
import Header from '../Common/Header';
import Image from '../assets/img/header-bg.jpg';


//

import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';


class Home extends Component{

    
    

    render(){
  const myImage = {Image}
        console.log(myImage);
        return(
            <div>

                        <Header
                        title ="Welcome To Our Studio! "
                        subtitle ="IT'S NICE TO MEET YOU" 
                        buttonText = "Tell me more"
                        showButton ={true}
                        link ='/services'
                        Image = {Image}
                        />

          <Services/ >
          <Portfolio />
          <About />
          <Team />
          <Clients/>
          <Contact/>
            </div>
        )
    }
}



export default Home;