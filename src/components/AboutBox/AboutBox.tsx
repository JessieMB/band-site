import React from 'react';
import {Box} from '@material-ui/core';
import snugz from "../../assets/snugz.jpg";

const AboutBox = (props: any) => {
    return(
        <div>
            <Box>
                <h1>
                    ABOUT US
                </h1>
                <Box>
                    <div className="team__item set-bg"
                         style={{backgroundImage: "url(" + snugz + ")", height: '200px', width: '430px'}}></div>
                </Box>
                <p style={{color: "red"}}>
                    We play music and stuff. We're from Connecticut. This is a verry very long
                    veryveryveryveryveryveryveryveryve ryveryveryveryveryveryveryveryveryveryvery veryveryv eryveryveryveryveryvery
                    veryveryver yveryveryveryveryveryve ryveryveryvery  veryveryveryveryveryveryveryveryveryveryvery
                    veryveryveryveryveryveryveryvery veryveryvery veryveryveryveryveryveryveryveryveryveryveryveryveryvery
                    veryveryveryvery veryveryveryveryve ryvery
                    veryveryveryveryver yveryveryvery veryveryveryvery
                    veryveryveryveryvery veryveryver yveryveryveryveryveryveryveryvery
                    veryveryveryveryveryveryveryv eryvery
                    veryveryveryveryv eryveryveryv eryveryveryveryvery
                    veryveryveryveryveryveryveryv ryvery
                    veryveryveryveryveryveryvery eryveryveryvery
                    block of text!
                </p>
            </Box>
        </div>
    )
}

export default AboutBox;