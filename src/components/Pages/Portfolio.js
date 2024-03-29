import React,{Component} from 'react';
import SinglePortfolio from '../Common/PortfolioItem';

import img1 from '../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../assets/img/portfolio/06-thumbnail.jpg';




const portfolios = [
    {title:'Threads', textmuted:'Illustration', image:img1},
    {title:'Explore ', textmuted:'Graphic Design', image:img2},
    {title:'Finish', textmuted:'Identity', image:img3},
    {title:'Lines', textmuted:'Branding', image:img4},
    {title:'SouthWest', textmuted:'Web Design', image:img5},
    {title:'Windows', textmuted:'Photography', image:img6}
]


class Portfolio extends Component{

    render(){


        return (
        <div>

                <section className="bg-light page-section" id="portfolio">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                      {

                        portfolios.map((portfolio, index)=>{
                            return <SinglePortfolio {...portfolio}/>
                        })

                       } 
                       
                    </div>
                    </div>
                </section>

        </div>)
    }
}


export default Portfolio