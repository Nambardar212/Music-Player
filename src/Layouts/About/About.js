import React from "react";
import AboutHeader from "./AboutHeader";
import AboutHeadline from "./AboutHeadline";
import AboutImg from "./AboutImg";
import AboutQuestionAnswer from "./AboutQuestionAnswer";
import AboutQuestionTitle from "./AboutQuestionTitle";
import {RiInstagramLine, RiLinkedinBoxFill, RiMailLine} from "react-icons/ri"
import AboutButton from "./AboutButton";


const About = ({uiState, setUiState}) => {

    let questionOne = "What even is Music Player?";
    let answerOne = "In simple words, it is a music player without ads or distractions that allows you to listen to chillpop music (hence the name...) while you’re coding or doing other work. It is just a weekend project and uses music available on Chillhop (details below)"

    let questionTwo = "Who made this?";
    let answerTwo = "This project was created by Nikhil Saini. A Computer Applications student, developer, and designer who likes creating awesome things that live on the internet! If you like what you just saw and would like to see more, then scroll below to check his socials!";

    return (
        <div className={`about ${uiState.aboutShow ? "" : "about-hidden"}`}>
            <AboutHeader uiState={uiState} setUiState={setUiState} />
            <div className="about_wrapper">
                <div className="about-group">
                    <p>Hey There,</p>
                    <AboutHeadline content={"Welcome to MusicPlayer!"} />
                </div>
                <AboutImg />
                <div className="about-group">
                    <AboutQuestionTitle content={questionOne} />
                    <AboutQuestionAnswer content={answerOne} />
                </div>
                <div className="about-group">
                    <AboutQuestionTitle content={questionTwo} />
                    <AboutQuestionAnswer content={answerTwo} />
                </div>
                <hr />
                <div className="about-group">
                    <p>Nikhil's</p>
                    <AboutHeadline content="Socials" />
                </div>
                <div className="about-socials">
                    <div className="about-socials-group">
                        <RiInstagramLine className="about-socials-icon" />
                        <p className="about-socials-text">@nambardar212</p>
                    </div>
                    <div className="about-socials-group">
                        <RiLinkedinBoxFill className="about-socials-icon" />
                        <p className="about-socials-text">/in/nikhil-saini-6429a6138</p>
                    </div>
                    <div className="about-socials-group">
                        <RiMailLine className="about-socials-icon" />
                        <p className="about-socials-text">nikhilsaini0210@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div className="about-group">
                    <p>Like what you saw?</p>
                    <AboutHeadline content="See his work!" />
                </div>
                <AboutButton />
            </div>
        </div>
    )
}


export default About;