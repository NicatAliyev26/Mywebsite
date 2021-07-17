import React, { Component } from 'react'
import '../Style/portfolio__.scss'
import { BsCaretRight } from "react-icons/bs";
import Rectangle14 from '../Image/sign-in.PNG'
import Perfect from '../Image/Perfect.PNG'
import Rectangle16 from '../Image/1.jpg'
import Rectangle17 from '../Image/clock.png'
import Rectangle9 from '../Image/stylepoint.PNG'
import Rectangle18 from '../Image/Rectangle18.png'
import Rectangle19 from '../Image/gunaybankpro.jpg'
import Rectangle20 from '../Image/taxi.PNG'
import WOW from 'wowjs';


export class Portfolio extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div >
                <div className="section-portfolio " id="portfolio">
                    <div className="portfolio container wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0s">
                        <div className="number"><h1>02.</h1></div>
                        <div className="text">
                            <h1>Portfolio</h1>

                            <span>
                                <BsCaretRight className="icon" />
                                <p> <span className="main-text">My lastest projects</span>  <br />
                                    <span className="sentence">I'm looking to expand my portfolio while I'm on top and while I'm young.</span>
                                </p>
                            </span>

                            <div className="pictures">
                                <Up />
                                <Down />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio




export class Up extends Component {
    render() {
        return (
            <div>
                <ul className="up">
                    <li><a href="https://nicataliyev26.github.io/Taxi-website/" target="_blank"><img src={Rectangle20} alt="Sorry" /></a>
                        <h4>TaxiWebsite</h4>
                        <p>React.js Sass Bootstrap</p>
                    </li>
                    <li><a href="https://nicataliyev26.github.io/GunayBank/" target="_blank"><img src={Rectangle19} alt="Sorry" /></a>
                        <h4>Günay Bank</h4>
                        <p>Bootstrap  React.js</p>
                    </li>                   
                    <li><a href="https://nicataliyev26.github.io/StylePoint/" target="_blank"><img src={Rectangle9} alt="Sorry" /></a>
                        <h4>StylePoint</h4>
                        <p>Sass React.js</p>
                    </li>
                </ul>
            </div>
        )
    }
}
export class Down extends Component {
    render() {
        return (
            <div>
                <ul className="down">
                    <li><a href="https://nicataliyev26.github.io/Sign_in/" target="_blank"><img src={Rectangle14} alt="Sorry" /></a>
                        <h4>Sign In</h4>
                        <p> Sass React.js</p>
                    </li>
                    <li><a href="https://nicataliyev26.github.io/Clock/" target="_blank"><img src={Rectangle17} alt="Sorry" /></a>
                        <h4>Clock</h4>
                        <p>Sass Javascript</p></li>
                    <li><a href="https://nicataliyev26.github.io/Portfolio-Template/#" target="_blank"  ><img src={Perfect} alt="Sorry" /></a>
                        <h4>Perfect Portfolio</h4>
                        <p> Sass Bootstrap  Jquery  </p>
                    </li>
                </ul>
            </div>
        )
    }
}


