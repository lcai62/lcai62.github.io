import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../assets/profile.png';
import Footer from "../components/Footer";

const About = () => {

    return (
        <>
            <NavBar/>
            <div className="d-flex flex-row justify-content-center align-items-start bg-black" style={{ paddingTop: "11rem", height: "100vh", maxWidth: "100vw", width: "100%"}}>
                <div className="d-flex flex-row align-items-center justify-content-around" style={{ maxWidth: "100%", width: "100%"}}>
                    <img src={profile} alt="picture of me" className="delayFadeIn rounded-5"/>
                    <div className="d-flex flex-column align-items-start fadeIn">
                        <p className="text-white intro display-3">About Me</p>
                        <p className="text-white fs-4">
                            Fusce dapibus nulla nec mauris aliquet mollis. <br/>
                            Morbi non felis pretium, lobortis diam ac, luctus tellus. <br/>
                            Proin sit amet dui sit amet libero vestibulum sollicitudin.<br/>
                            Vivamus feugiat sapien ut faucibus gravida.<br/>
                            Aenean scelerisque dui quis urna consequat malesuada.</p>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
};

export default About;
