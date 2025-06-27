import React from "react";
import "./projects.css";
import Slider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShinyText from "./ShinyText";

const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} custom-arrow left-arrow`}
        style={{ ...style }}
        onClick={onClick}
    >
        &#10094;
    </div>
);

const NextArrow = ({ className, style, onClick }) => (
    <div
        className={`${className} custom-arrow right-arrow`}
        style={{ ...style }}
        onClick={onClick}
    >
        &#10095;
    </div>
);


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
};

const projects = [
    {
        title: "PyTorrent",
        description: "Modern BitTorrent client with torrent uploading, multi-peer downloads, and real-time progress tracking.",
        tech: ["Python", "React", "FastAPI", "Electron", "FastAPI"],
        liveDemo: null,
        viewCode: "https://github.com/lcai62/pytorrent",
        image: "/images/pytorrent2.jpg"
    },
    {
        title: "ML Food Survey Classification",
        description: "Multi-class model to classify foods based on user survey responses. ",
        tech: ["Python", "NumPy", "Pandas"],
        liveDemo: null,
        viewCode: "https://github.com/lcai62/ml-food-classification",
        image: "/images/ml.jpg"
    },
    {
        title: "PetPal",
        description: "ccc",
        tech: ["ccc"],
        liveDemo: null,
        viewCode: "https://github.com/lcai62/petpal",
        image: "/images/project3.jpg"
    },
    {
        title: "ddd",
        description: "ddd",
        tech: ["ddd"],
        liveDemo: "#",
        viewCode: "#",
        image: "/images/project4.jpg"
    },
    {
        title: "eee",
        description: "eee",
        tech: ["eee"],
        liveDemo: "#",
        viewCode: "#",
        image: "/images/project5.jpg"
    }
];

const Projects = () => {
    return (
        <div className="projects-section bg-black"
             style={{
                 minWidth: "fit-content",
                 height: "100vh",
                 paddingLeft: "14vw",
                 paddingRight: "14vw",
                 paddingTop: "8vw",
                 zIndex: 1
             }}
        >
            <ShinyText
                className="display-3 about-heading pb-5 parallax-layer"
                data-depth="0.8"
                text="projects.md &#123;"
                shimmerSpeed={3}
                shimmerWidth={3}
                gradientSpeed={4}
            />

            <div className="projects-slider-wrapper parallax-layer" data-depth="1.1">
                <Slider {...settings}>
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-slide">
                            <div className="project-card">
                                <div
                                    className="project-image"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="project-details">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="tech-pill">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.liveDemo && (
                                            <a href={project.liveDemo} className="live-link" target="_blank" rel="noreferrer">demo.sh</a>
                                        )}
                                        {project.viewCode && (
                                            <a href={project.viewCode} className="code-link" target="_blank" rel="noreferrer">code.sh</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
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

export default Projects;
