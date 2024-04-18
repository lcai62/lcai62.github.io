import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import './projects.css'
import github from '../assets/github.png';

const Home = () => {

    return (
        <>
            <NavBar/>
            <div className="projects-container d-flex text-white bg-black flex-column justify-content-start align-items-start" style={{ minHeight: "100vh", maxHeight:"100%", height: "100%", paddingTop: "4rem", paddingBottom: "10rem", paddingLeft: "14rem", gap: "130px"}}>

                <h1 className="projects">Projects</h1>

                <div className="project-container d-flex flex-column ms-5">

                    <div className="project-header d-flex flex-row align-items-center">
                        <img src={github} alt="Project Logo" style={{ width: "60px", height: "60px" }} />
                        <h2 className="ms-4 pt-2">Distributed Particles Simulation</h2>
                    </div>

                    <div className="project-languages d-flex flex-row">
                        <hr className="vertical-line" />

                        <div className="d-flex flex-column">
                            <p className="languages pt-3">C, C++, MPI, OpenMP</p>

                            <div className="description-container d-flex flex-row">
                                <hr className="vertical-line" />

                                <div className="d-flex flex-column">
                                    <p className="ms-5">
                                        Nunc vel augue ut lorem fermentum mollis.<br />
                                        Mauris ultrices tellus commodo condimentum egestas.<br />
                                        Fusce elementum quam a mauris dapibus cursus.<br />
                                        Aliquam nec nulla tempus ex varius fermentum id id lacus.
                                    </p>

                                    <div className="d-flex flex-row ms-5">
                                        <hr className="vertical-line" />

                                        <a className="ms-5">asdlfkj</a>
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
