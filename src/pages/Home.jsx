import NavBar from "../components/Nav";
import "./home.css"
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from "react";
import Footer from "../components/Footer";

const Home = () => {

    const intro_text = "Hi, I'm Leon";
    const body_text = "Backend Developer and";
    const body_text_2 = "Computer Science Student ";
    const body_text_3 = "@University of Toronto";

    const [intro, setIntro] = useState("");
    const [body, setBody] = useState("");
    const [body2, setBody2] = useState("");
    const [body3, setBody3] = useState("");

    const [textFade, setTextFade] = useState(false);

    const [introDone, setIntroDone] = useState(false);
    const [bodyDone, setBodyDone] = useState(false);
    const [body2Done, setBody2Done] = useState(false);
    const [body3Done, setBody3Done] = useState(false);

    const [showButtons, setShowButtons] = useState(false);

    useEffect(() => {
        let i = 0;
        let curr_intro = "";

        if (localStorage.getItem("introDone") === "true") {
            setIntro(intro_text);
            setBody(body_text);
            setBody2(body_text_2);
            setBody3(body_text_3);
            setShowButtons(true);
            setTextFade(true);
            return;
        }
        const timer = setInterval(() => {
            if (i < intro_text.length) {
                curr_intro += intro_text.charAt(i);
                setIntro(curr_intro);
                i++;
            } else {
                clearInterval(timer);
                setIntroDone(true);
                localStorage.setItem("introDone", "true");
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
            <NavBar />
            <div className="d-flex text-white bg-black flex-column justify-content-start" style={{
                minWidth: "fit-content",
                height: "100vh",
                paddingTop: "24vh",
                paddingLeft: "14vw",
                paddingRight: "14vw"
            }}>

                <div className={`typewriter ${textFade ? "fadeIn" : ""}`}>
                    <p className="intro display-3">{intro}{!introDone && !textFade &&
                        <span className="cursor"></span>}</p>
                </div>

                <div className={`fs-4 typewriter ${textFade ? "delayFadeIn" : ""}`}>{body}{introDone && !bodyDone &&
                    <span className="cursor"></span>}</div>
                <div
                    className={`fs-4 mb-4 typewriter ${textFade ? "delayFadeIn" : ""}`}>{body2}{bodyDone && !body2Done &&
                    <span className="cursor"></span>}
                    <span className="highlight">
                        {body3}
                        {(body2Done || textFade) && <span className="cursor"></span>}
                    </span>
                </div>

                {/* set fade in when showing buttons so animation is not missed */}
                <div id="home-buttons-container" className={`d-flex mt-5 gap-4 ${showButtons ? "delayFadeIn" : ""}`}>
                    {
                        showButtons &&
                        <>
                            <a href="/#" className="button button-resume">Resume</a>
                            <a href="/#/projects" className="button button-projects">Projects</a>

                        </>
                    }
                </div>
                <p className="mt-5">{`{ Website in development }`}</p>

            </div>
        </>
    )
};

export default Home;
