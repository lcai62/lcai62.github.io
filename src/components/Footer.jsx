
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import {NavItem, NavLink} from "react-bootstrap";
import './footer.css'
import Container from "react-bootstrap/Container";
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
            <Container fluid className="bg-black">
                <div className="d-flex justify-content-center gap-3 mb-2">
                    <a className="footer-image" href="https://www.github.com/lcai62" target="_blank" rel="noreferrer"><img src={github} alt="github" style={{width: "25px", height: "25px"}}/></a>
                    <a className="footer-image" href="https://www.linkedin.com/in/leoncai62" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" style={{width: "25px", height: "25px"}}/></a>
                    <a className="footer-image" href="mailto:leoncai@outlook.com"><img src={mail} alt="mail" style={{width: "25px", height: "25px"}}/></a>
                </div>
                <div className="footer-links d-flex flex-row justify-content-center pb-3 text-white bg-black">


                    <NavItem>
                        <NavLink href="/#/" onClick={scrollToTop} className="nav-link px-2 footer-text">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/about" onClick={scrollToTop} className="px-2 footer-text">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/projects" onClick={scrollToTop} className="px-2 footer-text">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:leoncai@outlook.com" className="px-2 footer-text">Contact</NavLink>
                    </NavItem>

                </div>
                <p className="text-center text-white bg-black m-0 py-3">Copyright © 2024 by Leon Cai</p>
            </Container>

    );
}

export default Footer;