import React, {useEffect, useRef, useState} from 'react';
import github from '../assets/github.png';  // Assuming the path is correct

const Project = ({ title, description, languages, date }) => {

    const projectRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: Stop observing once visible
                }
            });
        }, { threshold: 0.5 }); // Adjust threshold as needed

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={projectRef} className={`project-container d-flex flex-column ms-5 ${isVisible ? 'fadeIn' : 'opacity-0'}`}>

            <div className="project-header d-flex flex-row align-items-center">
                <img src={github} alt="Project Logo" style={{ width: "60px", height: "60px" }} />
                <h2 className="ms-4 pt-2">{title}</h2>
            </div>

            <div className="project-languages d-flex flex-row">
                <hr className="vertical-line" />

                <div className="d-flex flex-column">
                    <p className="languages pt-3">{languages}<i>&nbsp;&nbsp;|&nbsp;&nbsp;{date}</i></p>

                    <div className="description-container d-flex flex-row">
                        <hr className="vertical-line" />

                        <div className="d-flex flex-column">
                            <p className="project-description ms-5">
                                {description.map((line, index) => (
                                    <React.Fragment key={index}>
                                        -&nbsp;&nbsp;{line}<br />
                                    </React.Fragment>
                                ))}
                            </p>

                            <div className="project-button-container d-flex flex-row ms-5">
                                <hr className="vertical-line" />
                                <a className="ms-5 projects-button projects-button-view">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
