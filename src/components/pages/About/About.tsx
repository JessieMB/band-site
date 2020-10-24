import React from 'react';
import AboutBox from "../../AboutBox/AboutBox";
import {Container, Grid} from '@material-ui/core';
import Members from "../../Members/Members";
import "./About.css";

const About = (props: any) => {
    return (
            <div className="container">
                <div className="layout">
                    <div className="col col-main">
                        <Members />
                    </div>
                    <div className="col col-complementary">
                        <AboutBox/>
                    </div>
                </div>
            </div>
    )
}

export default About;