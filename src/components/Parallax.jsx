import { useEffect, useState } from 'react';

export default function Parallax() {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section.snap-section');
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries.find(e => e.isIntersecting);
                if (visible) setActiveSection(visible.target);
            },
            { threshold: 0.6 } // must be mostly visible
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!activeSection) return;

        const handleMouseMove = e => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            const layers = activeSection.querySelectorAll('.parallax-layer');
            layers.forEach(layer => {
                const depth = parseFloat(layer.dataset.depth || 1);
                const translateX = (deltaX / centerX) * depth * 14;
                const translateY = (deltaY / centerY) * depth * 14;

                layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        };

        const resetTilt = () => {
            const layers = activeSection.querySelectorAll('.parallax-layer');
            layers.forEach(layer => {
                layer.style.transform = 'translate(0, 0)';
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', resetTilt);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', resetTilt);
        };
    }, [activeSection]);

    return null;
}
