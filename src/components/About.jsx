import React from 'react';
import './about.css';
import ShinyText from './ShinyText';
import { FaBriefcase, FaCodeBranch } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-container bg-black"

             style={{
                 minWidth: "fit-content",
                 height: "100vh",
                 paddingLeft: "14vw",
                 paddingRight: "14vw",
                 paddingTop: "15vw",
                 zIndex: 1
             }}
        >
            <ShinyText
                className="display-3 about-heading parallax-layer"
                data-depth="0.8"
                text="about.md &#123;"
                shimmerSpeed={3}
                shimmerWidth={3}
                gradientSpeed={4}
            />

            <p className="about-text parallax-layer"
               data-depth="1.1"
            >
                I'm a dedicated backend developer with expertise in building robust and scalable server-side applications.
                I specialize in Python, Django, and database optimization, with a strong foundation in web technologies.
            </p>

            <div className="about-cards parallax-layer" data-depth="1.1">
                <div className="about-card border-orange">
                    <FaBriefcase className="icon orange" />
                    <div>
                        <p>Experience:</p>
                        <p className="text-white text-opacity-75">1+ Years</p>
                    </div>
                </div>

                <div className="about-card border-purple">
                    <FaCodeBranch className="icon purple" />
                    <div>
                        <p>Projects:</p>
                        <p className="text-white text-opacity-75">5+ Completed</p>
                    </div>
                </div>
            </div>

            <ShinyText
                className="display-3 about-heading parallax-layer"
                data-depth="0.8"
                text="&#125;"
                shimmerSpeed={3}
                shimmerWidth={3}
                gradientSpeed={4}
            />
        </div>
    );
};

export default About;
