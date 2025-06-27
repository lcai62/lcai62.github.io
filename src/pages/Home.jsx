import Navbar from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.css';
import Particles from "../components/Particles";
import About from "../components/About";
import Projects from "../components/Projects";
import Landing from "../components/Landing";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import "./home.css";
import Parallax from "../components/Parallax";



const Home = () => {

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 100,
                    pointerEvents: 'none'
                }}

            >
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={600}
                    particleSpread={20}
                    speed={0.1}
                    particleBaseSize={120}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={true}
                />
            </div>
            <Navbar/>

            <Parallax />
            <div id="parallax-root">
                <section id="home" className="snap-section"><Landing/></section>
                <section id="about" className="snap-section"><About/></section>
                <section id="projects" className="snap-section"><Projects/></section>
                <section className="snap-section scrollable"><Experience/></section>
                <section id="skills" className="snap-section"><Skills/></section>
                <section id="contact" className="snap-section"><Contact/></section>
            </div>
        </>
    )
};

export default Home;
