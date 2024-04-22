import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './projects.css'
import github from '../assets/github.png';
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Project from "../components/Project";

const Home = () => {

    return (
        <div className="bg-black">
            <NavBar/>
            <div
                className="projects-container d-flex text-white bg-black flex-column justify-content-start align-items-start"
                style={{
                    minHeight: "100vh",
                    maxHeight: "100%",
                    height: "100%",
                    paddingTop: "4rem",
                    paddingBottom: "10rem",
                    paddingRight: "12vw",
                    gap: "130px"
                }}>

                <h1 className="projects fadeIn" style={{ marginLeft: "10vw"}}>Projects</h1>

                <div className="project-parent-container d-flex flex-column justify-content-start align-items-start gap-5 delayFadeIn"  style={{ marginLeft: "12vw"}}>

                    <Project
                        title="GPU-Accelerated Image Processing with CUDA"
                        description={[
                            "Achieved 1000x speed increase in image processing tasks through CUDA-based GPU optimizations.",
                            "Conducted detailed performance analysis using NVIDIA Nsight and profiling tools, identifying critical bottlenecks.",
                            "Refined reduction kernels by employing atomic instructions and warp-level techniques including memory coalescing to improve scalability across blocks.",
                            "Leveraged spacial and temporal locality to strategically align memory accesses with hardware constraints."
                        ]}
                        languages="C, C++, CUDA"
                        date="April 2024"
                    />
                    <Project
                        title="Distributed Systems Particles Simulation"
                        description={[
                            "Achieved a 200x speedup, reducing complexity from O(n^2) to O(n) by optimizing computational algorithms.",
                            "Designed communication protocols among distributed nodes to ensure synchronization and minimize latency.",
                            "Implemented optimization techniques including binning to optimize performance by reducing unnecessary computations.",
                            "Refined cache-friendly algorithms to enhance data locality and optimize memory access patterns."
                        ]}
                        languages="C, C++, MPI, OpenMP"
                        date="May 2024"
                    />


                    <Project
                        title="FUSE Filesystems: VSFS"
                        description={[
                        ]}
                        languages="C, FUSE Filesystems"
                        date="December 2023"
                    />

                    <Project
                        title="Virtual Memory Page Translations and Replacement Policies"
                        description={[
                        ]}
                        languages="C, Linux, Paging"
                        date="November 2023"
                    />

                    <Project
                        title="Thread Management and Synchronization Library"
                        description={[
                        ]}
                        languages="C, Interrupts, Multithreading"
                        date="October 2023"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;
