import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './projects.css'
import github from '../assets/github.png';

const Home = () => {

    return (
        <>
            <NavBar/>
            <div
                className="projects-container d-flex text-white bg-black flex-column justify-content-start align-items-start"
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    height: "100%",
                    paddingTop: "4rem",
                    paddingBottom: "10rem",
                    paddingLeft: "14rem",
                    gap: "130px"
                }}>

                <h1 className="projects">Projects</h1>

                <div className="d-flex flex-column justify-content-start align-items-start gap-5">

                    <div className="project-container d-flex flex-column ms-5">

                        <div className="project-header d-flex flex-row align-items-center">
                            <img src={github} alt="Project Logo" style={{width: "60px", height: "60px"}}/>
                            <h2 className="ms-4 pt-2">GPU-Accelerated Image Processing with CUDA</h2>
                        </div>

                        <div className="project-languages d-flex flex-row">
                            <hr className="vertical-line "/>

                            <div className="d-flex flex-column">
                                <p className="languages pt-3">C, C++, CUDA<i>&nbsp;&nbsp;|&nbsp;&nbsp;April 2024</i></p>

                                <div className="description-container d-flex flex-row">
                                    <hr className="vertical-line"/>

                                    <div className="d-flex flex-column">
                                        <p className="ms-5">
                                            -&nbsp;&nbsp;Achieved 1000x speed increase in image processing tasks through
                                            CUDA-based GPU optimizations.<br/>
                                            -&nbsp;&nbsp;Conducted detailed performance analysis using NVIDIA Nsight and
                                            profiling tools, identifying critical bottlenecks. .<br/>
                                            -&nbsp;&nbsp;Refined reduction kernels by employing atomic instructions and
                                            warp-level techniques including memory coalescing to improve scalability
                                            across blocks. <br/>
                                            -&nbsp;&nbsp;Leveraged spacial and temporal locality to strategically align
                                            memory accesses with hardware constraints.
                                        </p>

                                        <div className="d-flex flex-row ms-5">
                                            <hr className="vertical-line"/>

                                            <a className="ms-5 projects-button projects-button-view">View Project</a>
                                        </div>

                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                    <div className="project-container d-flex flex-column ms-5">

                        <div className="project-header d-flex flex-row align-items-center">
                            <img src={github} alt="Project Logo" style={{width: "60px", height: "60px"}}/>
                            <h2 className="ms-4 pt-2">Distributed Systems Particles Simulation</h2>
                        </div>

                        <div className="project-languages d-flex flex-row">
                            <hr className="vertical-line "/>

                            <div className="d-flex flex-column">
                                <p className="languages pt-3">C, C++, MPI, OpenMP<i>&nbsp;&nbsp;|&nbsp;&nbsp;May 2024</i>
                                </p>

                                <div className="description-container d-flex flex-row">
                                    <hr className="vertical-line"/>

                                    <div className="d-flex flex-column">
                                        <p className="ms-5">
                                            -&nbsp;&nbsp;Achieved a 200x speedup, reducing complexity from
                                            O(n<sup>2</sup>) to O(n) by optimizing computational algorithms.<br/>
                                            -&nbsp;&nbsp;Designed communication protocols among distributed nodes to
                                            ensure synchronization and minimize latency.<br/>
                                            -&nbsp;&nbsp;Implemented optimization techniques including binning to
                                            optimize performance by reducing unnecessary computations.<br/>
                                            -&nbsp;&nbsp;Refined cache-friendly algorithms to enhance data locality and
                                            optimize memory access patterns.
                                        </p>

                                        <div className="d-flex flex-row ms-5">
                                            <hr className="vertical-line"/>

                                            <a className="ms-5 projects-button projects-button-view">View Project</a>
                                        </div>

                                    </div>

                                </div>


                            </div>


                        </div>

                    </div>

                </div>


            </div>

        </>
    )
};

export default Home;
