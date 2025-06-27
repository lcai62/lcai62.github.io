import React, {Fragment, useEffect, useState} from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./nav.css";

export default function NavBar() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sectionIds = ["home", "about", "projects", "experience", "skills", "contact"];

        const observer = new IntersectionObserver(
            entries => {
                // pick the section with the largest visible area
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) setActive(visible.target.id);
            },
            {
                threshold: 0.3,           // >30 % in view
            }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    const links = [
        { id: "about", label: "0.", text: "about" },
        { id: "projects", label: "1.", text: "projects" },
        { id: "experience", label: "2.", text: "experience" },
        { id: "skills", label: "3.", text: "skills" },
        { id: "contact", label: "4.", text: "contact" }
    ];

    return (
        <Navbar fixed="top" expand="md" variant="dark" className="site-nav bg-black px-5 py-4">
            <Navbar.Brand href="#home">chazzybear.md</Navbar.Brand>

            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
                <Nav
                    activeKey={active}
                    onSelect={key => setActive(key)}
                    className="ms-auto d-flex align-items-center"
                >
                    {links.map((l, i) => (
                        <Fragment key={l.id}>
                            <Nav.Link eventKey={l.id} href={`#${l.id}`}>
                                <span className="nav-index">{l.label}</span> {l.text}
                            </Nav.Link>

                            {/* Divider between items (hide after the last) */}
                            {i < links.length - 1 && (
                                <span className="nav-divider d-none d-md-inline-block" />
                            )}
                        </Fragment>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
