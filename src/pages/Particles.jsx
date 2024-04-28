import React, {useState, useEffect, useRef} from 'react';
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import './particles.css'

function Particles() {
    const [websocket, setWebsocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [numberOfParticles, setNumberOfParticles] = useState(1000);
    const [optimization, setOptimization] = useState('serial');
    const messagesEndRef = useRef(null);


    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView();
        }
    }, [messages]);

    useEffect(() => {
        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, [websocket]);

    const startSimulation = () => {



        setMessages([]);
        if (websocket) {
            websocket.close();
        }
        const ws = new WebSocket('ws://localhost:8080')
        ws.onopen = () => {
            ws.send(JSON.stringify({ numberOfParticles, optimization }));
        };
        ws.onmessage = (event) => {
            setMessages(prev => [...prev, event.data]);
        };
        setWebsocket(ws);
    };

    return (
        <div className="bg-black">
            <NavBar/>
            <div className="d-flex flex-column simulation-page bg-black text-white p-5 gap-3" style={{ marginLeft: '30vw', marginRight: '30vw'}}>
                <h1 className="display-4 pb-5">Particle Simulation</h1>
                <div className="d-flex flex-column gap-2">
                    <label>Number of Particles:</label>
                    <input
                        type="number"
                        className="dark-input"
                        value={numberOfParticles}
                        onChange={e => setNumberOfParticles(e.target.value)}
                    />
                </div>
                <div className="d-flex flex-column gap-2">
                    <label>Optimization:</label>
                    <select
                        value={optimization}
                        className="dark-input"
                        onChange={e => setOptimization(e.target.value)}
                    >
                        <option value="serial">Serial</option>
                        <option value="openmp">OpenMP</option>
                        <option value="mpi">MPI</option>
                    </select>
                </div>
                <button onClick={startSimulation} className="button-start-simulation">Start Simulation</button>
                {
                    messages.length > 0 &&
                    <div className="results mt-3" style={{ position: 'relative' }}>
                        {messages.map((message, index) => (
                            <p key={index} className="m-0">{message}</p>
                        ))}
                        {/* scrolling hook */}
                        <div ref={messagesEndRef} style={{ height: '1px' }} />
                    </div>
                }

            </div>
            <Footer/>
        </div>
    );
}

export default Particles;
