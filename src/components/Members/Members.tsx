import React from 'react';
import {Box, Grid} from "@material-ui/core";
import "./Members.css";
import snugz from "../../assets/snugz.jpg";
const Members = (props: any) => {
    return(
        <Grid className="container" spacing={10} alignItems="center" direction="row">
            <h1>
                INSURRECTOR IS...
            </h1>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg"
                         style={{backgroundImage: "url(" + snugz + ")"}}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>CJ</h4>
                                <span>GUITAR | VOCALS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg"
                         style={{backgroundImage: "url(" + snugz + ")"}}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>JIMMY</h4>
                                <span>DRUMS | VOCALS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg"
                         style={{backgroundImage: "url(" + snugz + ")"}}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>KEVIN</h4>
                                <span>GUITAR | VOCALS</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team__item set-bg"
                         style={{backgroundImage: "url(" + snugz + ")"}}>
                        <div className="team__text">
                            <div className="team__title">
                                <h4>JESS</h4>
                                <span>BASS | VOCALS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Grid>
    )
};

export default Members;