import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './projects.css'
import github from '../assets/github.png';
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Project from "../components/Project";
import {useEffect, useState} from "react";

const Home = () => {

    const [hideArrow, setHideArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
            setHideArrow(scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


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

                <h1 className="projects fadeIn" style={{marginLeft: "10vw"}}>Projects</h1>

                {!hideArrow && (
                    <div className="scroll-down-indicator fadeIn">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#bcbcbc" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.172L16.95 8.222L18.364 9.636L12 16L5.63604 9.636L7.05004 8.222L12 13.172Z" />
                            <path d="M12 19.172L16.95 14.222L18.364 15.636L12 22L5.63604 15.636L7.05004 14.222L12 19.172Z" />
                        </svg>
                    </div>
                )}

                <div
                    className="project-parent-container d-flex flex-column justify-content-start align-items-start delayFadeIn"
                    style={{marginLeft: "12vw", gap: "100px"}}>
                    <Project
                        title="PyTorrent: BitTorrent Client in Python"
                        languages="Python · React · Javascript · FastAPI"
                        date="May 2025"
                        description={[
                            "Built a 2.3k LOC BitTorrent engine in Python with a FastAPI backend and React dashboard, deployed via Docker (<175MB image).",
                            "Tested in a 1.4k-peer swarm with 105+ active seed connections and 30 Mbps throughput, using rarest-first piece selection and full BEP3/BEP23 compliance.",
                            "Exposed RESTful API (add, pause, re-announce, etc) and load-tested with Locust (15k reqs/2min, p50=150ms, p95=340ms, 0% error).",
                            "Implemented persistent torrent session saving and verified 48h+ uninterrupted seeding with 100% resume reliability.",
                            "Achieved 87% total test coverage (95% on protocol modules) with full unit test suite and CI-tested deployment.",
                        ]}
                        codeLink="https://github.com/lcai62/pytorrent"
                    />

                    <Project
                        title="ML Food Survey Classification"
                        languages="Python · Numpy · Pandas · Matplotlib"
                        date="April 2025"
                        description={[
                            "Achieved 88.4% test accuracy with a multiclass softmax regression with L2 regularization across 100 random splits, a 2.7x lift over the random classifier baseline.",
                            "Delivered 0.51ms single-core inference (~ 2000 predictions/s) by serializing weights, encoders, and vocab into a 90kB NPZ artifact.",
                            "Accelerated training 70% via Python scripted grid hyper-parameter search and validation loss early stopping to prevent overfitting.",
                            "Parsed over 2000 survey entries into 514 engineered features via regex-based extraction, tokenization, and a Bag-of-Words vocabulary of over 450 tokens.",
                            "Directed a 4-member team, to coordinate developer workflows and merge 1.5k lines of preprocessing modules"
                        ]}
                    />


                    <Project
                        title="GPU-Accelerated Image Processing with CUDA"
                        description={[
                            "Delivered up to 1000× speedup over a 4-core CPU baseline by optimizing kernel launch configuration, memory coalescing, and constant memory use.",
                            "Developed and benchmarked 5 CUDA kernels for applying discrete Laplacian filters on imagines, leveraging pixel-wise parallelism and memory optimizations across multiple strategies (row-major, column-major, etc).",
                            "Achieved up to 8% performance gains using constant memory by exploring tradeoffs across memory access patterns and thread workloads.",
                            "Executed detailed performance analysis using NVIDIA Nsight and profiling tools, identifying critical bottlenecks.",
                            "Conducted extensive experiments on filter and image size effects; profiled performance using CUDA events and fine-tuned thread block sizes.",
                        ]}
                        languages="C, C++, CUDA"
                        date="April 2024"

                    />
                    <Project
                        title="Distributed Systems Particles Simulation"
                        description={[
                            "Slashed runtime by 5100x (42 000s to 8.2s for 160k particles) by parallelizing with 16-thread OpenMP reworking core algorithm from quadratic to a binning-based linear algorithm.",
                            "Accelerated distributed runs 2900x (436s to 0.15s on 16k particles) with MPI-based workload splitting across 16 processors, sustaining 82% strong scaling efficiency.",
                            "Eliminated 3.8 seconds of lock overhead per timestep by replacing mutexes with atomic operations, improving multithreading performance by 32% at scale.",
                            "Automated performance checks with a 40-job SLURM pipeline that benchmarks 12 data sizes.",
                        ]}
                        languages="C, C++, MPI, OpenMP"
                        date="May 2024"
                    />

                    <Project
                        title="PetPal: Pet Adoption Site"
                        description={[
                            "Led a 3-person team to design and deploy a full-stack pet adoption platform using React, Django, and Django REST Framework, with full CRUD functionality, authentication, and RESTful API integration.",
                            "Designed and implemented 25+ REST API endpoints with Django REST Framework, enabling pet listing, blog posting, user management, notifications, and real-time adoption user flows.",
                            "Engineered secure JWT-based authentication with role-specific permissions and session handling, ensuring safe access across 40+ frontend route views.",
                            "Delivered a responsive React frontend with 15+ interactive pages, including profile management, application dashboards, searchable pet listings, and blog interaction features.",
                            "Implemented real-time comment threads on shelter profiles and adoption applications, with automated notification generation and tracking via RESTful updates.",
                            "Deployed the live application to Vercel with pre-populated demo data, meeting scalability and UI/UX expectations for stakeholder presentations.",
                        ]}
                        languages="Django, React, REST, PostgreSQL, Express.js, Node"
                        date="December 2023"
                    />

                    <Project
                        title="FUSE Filesystems: VSFS"
                        description={[]}
                        languages="C, FUSE Filesystems"
                        date="December 2023"
                    />

                    <Project
                        title="Virtual Memory Page Translations and Replacement Policies"
                        description={[]}
                        languages="C, Linux, Paging"
                        date="November 2023"
                    />

                    <Project
                        title="Thread Management and Synchronization Library"
                        description={[]}
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
