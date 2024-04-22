import NavBar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../assets/profile.png';
import Footer from "../components/Footer";
import './about.css';

const About = () => {

    return (
        <>
            <NavBar/>
            <div className="d-flex flex-row justify-content-center align-items-start bg-black" style={{ height: "100vh", maxWidth: "100vw", width: "100%"}}>
                <div className="d-flex flex-row align-items-center justify-content-around"
                     style={{ maxWidth: "100%", width: "100%", paddingTop: "10rem", gap: "10vw", paddingLeft: "10vw", paddingRight: "10vw"}}
                >
                    <img src={profile} alt="picture of me" className="profile-picture delayFadeIn rounded-5"/>
                    <div className="d-flex flex-column align-items-start fadeIn">
                        <p className="text-white intro display-3">About Me</p>
                        <p className="text-white fs-4">
                            I am a third year student at the <span className="highlight">University of Toronto </span>studying
                            <span className="highlight"> Computer Science </span>
                            who has a passion for learning new technologies and
                            developing products that positively impact others.
                        </p>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
};

export default About;
