import React,{Component } from 'react';
import Client from '../Common/Client';



import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/envato.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';




const clients = [

    {logo: img1 },
    {logo: img2 },
    {logo: img3 },
    {logo: img4 },
]





class Clients extends Component{

    render(){
        return (
            <div>

<section class="py-5">
    <div class="container">
      <div class="row">
        
        {
            clients.map((client, index)=>{
                return <Client {...client} key ={index}/>
            })
        }
        
      </div>
    </div>
  </section>
        
        
     

            </div>
        )
    }
}


export default Clients;