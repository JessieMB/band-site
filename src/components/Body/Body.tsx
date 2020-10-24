import React from 'react';
import snugz from '../../assets/snugz.jpg'
import './Body.scss';

const Body = (props: any) => {
    return (
        <div className="Body">
            {/*<img className="Image" alt="snugz" src={snugz}/>*/}
            <div className="c-glitch" style={{backgroundImage: "url(" + snugz + ")"}}>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>
                <div className="c-glitch__img" style={{backgroundImage: "url(" + snugz + ")"}}/>

            </div>
        </div>
    )
}

export default Body;
