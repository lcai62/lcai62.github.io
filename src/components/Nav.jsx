import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';

function NavBar() {

    const getActiveClass = (path) => {
        return window.location.hash === path ? 'active' : '';
    }

    return (
        <>
            <Navbar className="justify-content-around bg-black"  data-bs-theme="dark">
                <Container fluid>
                    <Nav className="ms-auto gap-3">
                        <Nav.Link href="/#/" className={`${getActiveClass("#/")}`}><span className="highlight" >01</span> About</Nav.Link>
                        <Nav.Link href="/#/projects" className={`${getActiveClass("#/projects")}`}><span className="highlight">02</span> Projects</Nav.Link>
                        <Nav.Link href="mailto:leoncai@outlook.com"><span className="highlight">03</span> Contact</Nav.Link>
                        <Nav.Link href="mailto:leoncai@outlook.com">leoncai@outlook.com</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    );
}

export default NavBar;