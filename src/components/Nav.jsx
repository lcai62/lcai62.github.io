import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';

function NavBar() {

    const getActiveClass = (path) => {
        const currentHash = window.location.hash || '#/';
        return currentHash === path || (path === "#/" && currentHash === '') ? 'active' : '';
    }


    return (
        <Navbar className="justify-content-around bg-black" data-bs-theme="dark" >
            <Nav className="ms-auto gap-3">
                <Nav.Link href="/#/" className={`${getActiveClass("#/")}`}><span className="highlight" >01</span> Home</Nav.Link>
                <Nav.Link href="/#/about" className={`${getActiveClass("#/about")}`}><span className="highlight" >02</span> About</Nav.Link>
                <Nav.Link href="/#/projects" className={`${getActiveClass("#/projects")}`}><span className="highlight">03</span> Projects</Nav.Link>
                <Nav.Link href="mailto:leoncai@outlook.com"><span className="highlight">04</span> Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;