import { PlayCircleFilledRounded } from '@material-ui/icons'
import React, { Component } from 'react'
import AmazonIcon from './AmazonIcon';
import GoogleIcon from './GoogleIcon';
import "./Hero.css"
import Integration from './Integration';
import Northern from './Northern';
import SkrillIcon from './SkrillIcon';

function Hero() {
    const styles = {
        position: "absolute",
        fontSize: "2.2rem",
        left: "2.2rem"
    };


return (
    <div className="hero-section">
        <section className="section-hero">
            <div className="row">
                <div id="top-div" className="col-1-of-2">
                    <h1 className="heading-primary">
                        <span className="heading-top  heading-primary-main">Don't worry.</span>
                        <span className="heading-top  heading-primary-sub">We are here for</span>
                        <span className="heading-top heading-primary-sub-2">every solution.</span>
                    </h1>
                    <p className="hero-paragraph">
                        <span class="para-main" >Bushwick meh Blue Bottle park belly mustache skateboard 3 wolf</span>
                        <span class="para-sub">moon. Actually beard single-origin coffee, twee 90's PBR Echo Park</span>
                    </p>

                </div>
            </div>
            <div className="row">
                <div className="col-1-of-2">

                    <div className="buttons">
                        <a href="#" className="btn btn--blue">Get Started</a>
                        <a href="#" className="btn btn--white"><span><PlayCircleFilledRounded style={styles} /> Watch Video</span></a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-clients">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="icon-container">
                        <AmazonIcon />
                        <GoogleIcon />
                        <SkrillIcon />
                        <Integration/>
                        <Northern/>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default Hero
