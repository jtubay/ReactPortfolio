import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://www.shareicon.net/data/2015/09/18/103160_man_512x512.png"
                        alt="guy"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | BootStrap | JavaScript | React | NodeJS | Express | MySQL</p>
                            <div className="social-links">
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp"  aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;