import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

//create InfoBox to show on each stage
const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)


//rendercontent means each stage when rotating - to show different things
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Jungwon</span> 👋🏻 A Software Engineer 👩🏻‍💻
            <br /> Welcome To My world!
            <br /> Try to scroll left if you want to know more about me🖱️
        </h1>
    ),

    2: (
        <InfoBox 
            text="You wanna know more about me? Click below 👇🏻"  link="/about" btnText="Learn more"
        />
    ),

    3: (
        <InfoBox 
            text="Led multiple projects to success over the years, Curious about the impact? Then come here 👇🏻" link="/projects" btnText="Visit my project repository"
        />
    ),

    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just a few keystrokes away" link="/contact" btnText="Let's talk 📲"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;