import React from 'react';
import './skills.css';
import ShinyText from "./ShinyText";

const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },

    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg' },

    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },

    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },

    { name: 'CUDA', icon: '/images/nvidia.png' },
];




const Skills = () => {
    return (
        <div className="skills-section bg-black"
             style={{
                 minWidth: "fit-content",
                 height: "100vh",
                 paddingLeft: "14vw",
                 paddingRight: "14vw",
                 paddingTop: "30vh",
                 zIndex: 1
             }}
        >

            <ShinyText
                className="display-3 about-heading parallax-layer"
                data-depth="0.8"
                text="skills.md &#123;"
                shimmerSpeed={3}
                shimmerWidth={3}
                gradientSpeed={4}
            />

            <div className="skills-grid parallax-layer" data-depth="1.1">
                {skills.map((skill, idx) => (
                    <div className="skill-card" key={idx}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon"/>
                        <p>{skill.name}</p>
                    </div>
                ))}
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

export default Skills;
