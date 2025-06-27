import React from 'react';
import './experience.css';
import NavBar from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
library.add(faStar);
library.add(faGraduationCap);

const experienceData = [
    {
        title: 'University of Toronto',
        company: 'B.Sc. Computer Science',
        // subtext: 'asdf',
        date: 'June 2025',
        description: ['Specialized in systems and infrastructure with advanced coursework in Operating Systems, Computer Networking, Databases, and AI.']
    },
    {
        title: 'Full Stack Developer - Contract',
        company: 'MyEdMaster',
        subtext: "ReactJS, Next.js, Tailwind, Prisma, MySQL, AWS RDS",
        date: 'Jan 2025 – April 2025',
        description: [
            "Built a full-stack AI fitness app for 100+ users in a 7-developer scrum team using React, Tailwind and Next.js.",
            // "Developed 10+ responsive views and integrated 20+ RESTful endpoints with secure JWT-based auth.",
            // "Designed and implemented a scalable 11-table database schema using Prisma + MySQL, deployed to AWS RDS with full documentation.",
            // "Wrote and debugged 30+ integration tests for user flows and data validation.",
            // "Deployed to staging and production via Vercel CI/CD, ensuring fast load times and consistent behavior across environments."
        ]
    },
    {
        title: 'Software Engineer - Intern',
        company: 'FCAR Technologies',
        subtext: "Python, Java",
        date: 'May 2024 - Aug 2024',
        description: [
            'Engineered robust Java and Python-based automation tools to streamline data analysis and testing workflows with a MySQL database.',
            // 'Designed and implemented MySQL-based data handling systems, improving data storage efficiency and accelerating data retrieval.',
            // 'Mastered diverse communication protocols include CAN and KWP2000 used in automotive interactions, facilitating enhanced vehicle diagnostics.'
        ]
    },

];

const Experience = () => {
    return (
        <div id="experience" className="bg-black"
             style={{
                 minWidth: "fit-content",
                 minHeight: "100%",
                 paddingLeft: "14vw",
                 paddingRight: "14vw",
                 paddingBottom: "30vh",
                 paddingTop: "10vh",
                 zIndex: 1
             }}
        >
            {/*<h1 className="text-white text-center intro display-5">Professional Experience and Education</h1>*/}

            <div className="timeline-wrapper">
                <div className="timeline-line"/>

                <div className="timeline-items">
                    {experienceData.map((item, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            {index % 2 === 0 ? (
                                <p className="timeline-date">{item.date}</p>
                            ) : null}

                            <div className="timeline-circle">
                                <div className="timeline-circle-inner">
                                    <FontAwesomeIcon
                                        icon={item.title === "University of Toronto" ? "graduation-cap" : faBriefcase}
                                        className="timeline-logo"
                                    />
                                </div>
                            </div>

                            <div className="timeline-content">
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="fw-bold">{item.company}</p>

                                <p className="text-white text-opacity-50">{item.subtext}</p>
                                <ul>
                                    {item.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            {index % 2 !== 0 ? (
                                <p className="timeline-date">{item.date}</p> // right side date
                            ) : null}
                        </div>
                    ))}

                    <div className="timeline-end-node">
                        <div className="timeline-circle">
                            <div className="timeline-circle-inner">
                                <FontAwesomeIcon icon="star" className="timeline-logo"/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Experience;
