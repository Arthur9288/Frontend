import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const generateRandomGrey = () => {
        const shade = Math.floor(Math.random() * 106) + 150; // Random number between 150 and 255
        return `rgb(${shade}, ${shade}, ${shade})`;
    };

    const changeBackground = () => {
        setBackgroundColor(generateRandomGrey());
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="cafe-homepage" style={{ 
            '--dynamic-color': backgroundColor,
            backgroundImage: `linear-gradient(to bottom, #f6f6f4 0%, ${backgroundColor} 20%)`,
            backgroundColor: 'transparent',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div className="content">
                <h2>Welcome to our Website</h2>
                <p>Try changing the background color!</p>
                <button className="cafe-button" onClick={changeBackground}>
                    Random Grey Shade Backgroundnd
                </button>
            </div>
            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
            <div className="landing-content">
                {/* CTA Section */}
                <section className="cta">
                    <h2>Start Converting Emails to Revenue Today</h2>
                    <p>Join 11,000+ companies already revolutionizing their email workflow</p>
                    <button className="signup">Start Free Trial</button>
                    <span className="cta-note">No credit card needed - Get started in 2 minutes</span>
                </section>
            </div>
        </div>
    );
};

export default HomePage;