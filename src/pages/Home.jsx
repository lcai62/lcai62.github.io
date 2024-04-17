import NavBar from "../components/Nav";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react";

const Home = () => {

    const intro_text = "Hi, I'm Leon";
    const body_text = "Backend Developer and";
    const body_text_2 = "Computer Science Student ";
    const body_text_3 = "@University of Toronto";

    const [intro, setIntro] = useState("");
    const [body, setBody] = useState("");
    const [body2, setBody2] = useState("");
    const [body3, setBody3] = useState("");

    const [introDone, setIntroDone] = useState(false);
    const [bodyDone, setBodyDone] = useState(false);
    const [body2Done, setBody2Done] = useState(false);
    const [body3Done, setBody3Done] = useState(false);

    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        let i = 0;
        let curr_intro = "";
        const timer = setInterval(() => {
            if (i < intro_text.length) {
                curr_intro += intro_text.charAt(i);
                setIntro(curr_intro);
                i++;
            } else {
                clearInterval(timer);
                setIntroDone(true);
                console.log("set intro done to true")
            }
        }, 100);
    }, []);


    useEffect(() => {

        let j = 0;
        let bodyTimer;
        let curr_body = "";
        if (introDone) {
            bodyTimer = setInterval(() => {
                if (j < body_text.length) {
                    curr_body += body_text.charAt(j);
                    setBody(curr_body);
                    j++;
                } else {
                    clearInterval(bodyTimer);
                    setBodyDone(true);
                }
            }, 35);
        }
        return () => {
            if (bodyTimer) {
                clearInterval(bodyTimer);
            }
        };

    }, [introDone]);

    useEffect(() => {

        let j = 0;
        let bodyTimer;
        let curr_body = "";
        if (bodyDone) {
            bodyTimer = setInterval(() => {
                if (j < body_text_2.length) {
                    curr_body += body_text_2.charAt(j);
                    setBody2(curr_body);
                    j++;
                } else {
                    clearInterval(bodyTimer);
                    setBody2Done(true);
                }
            }, 35);
        }

        return () => {
            if (bodyTimer) {
                clearInterval(bodyTimer);
            }
        };

    }, [bodyDone]);

    useEffect(() => {

        let j = 0;
        let bodyTimer;
        let curr_body = "";
        if (body2Done) {
            bodyTimer = setInterval(() => {
                if (j < body_text_3.length) {
                    curr_body += body_text_3.charAt(j);
                    setBody3(curr_body);
                    j++;
                } else {
                    clearInterval(bodyTimer);
                    setBody3Done(true);
                }
            }, 35);
        }

        return () => {
            if (bodyTimer) {
                clearInterval(bodyTimer);
            }
        };

    }, [body2Done]);


    useEffect(() => {

        if (body3Done) {
            setTimeout(() => {
                setShowButtons(true);
            }, 200);
        }

    }, [body3Done]);

    return(
        <>
            <NavBar/>
            <div className="d-flex text-white bg-black flex-column justify-content-start" style={{ height: "100vh", paddingTop: "11rem", paddingLeft: "14rem" }}>

                <div className="typewriter">
                    <p className="intro display-3">{intro}{!introDone && <span className="cursor"></span>}</p>
                </div>

                <div className="fs-4">{body}{introDone && !bodyDone && <span className="cursor"></span>}</div>
                <div className="fs-4 mb-4">{body2}{bodyDone && !body2Done && <span className="cursor"></span>}
                    <span className="highlight">{body3}{body2Done && <span className="cursor"></span>}</span>
                </div>

                {/* set fade in when showing buttons so animation is not missed */}
                <div className={`d-flex mt-5 gap-4 ${showButtons ? "fadeIn" : ""}`}>
                    {
                        showButtons &&
                        <>
                            <a href="#resume" className="button button-resume">Resume</a>
                            <a href="#projects" className="button button-projects">Projects</a>
                        </>
                    }
                </div>

            </div>

        </>
    )
};

export default Home;
