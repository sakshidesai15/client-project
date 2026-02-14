import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Package, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const bannerBottles = '/assets/pharma_banner_bottles_1769614352905.png';
const bannerProduction = '/assets/pharma_banner_production_retry_1769615616299.png';
const bannerCaps = '/assets/pharma_banner_caps_retry_1769615514861.png';
import './Home.css';

const Home = () => {
    const slides = [
        {
            id: 1,
            image: bannerBottles,
            title: "Your Trusted Partner in",
            subtitle: "Plastic Packaging Excellence",
            text: "Premium pharmaceutical and cosmetic packaging solutions meeting international standards."
        },
        {
            id: 2,
            image: bannerProduction,
            title: "Advanced Manufacturing",
            subtitle: "State-of-the-Art Technology",
            text: "Precision engineering and clean-room facilities ensuring highest hygiene standards."
        },
        {
            id: 3,
            image: bannerCaps,
            title: "Innovative Solutions",
            subtitle: "Custom Caps & Closures",
            text: "Tailored designs to enhance brand identity and ensure product safety."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="home-page">
            <section className="hero" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
                <div className="hero-overlay"></div>

                <div className="hero-arrow hero-prev" onClick={prevSlide}>
                    <ChevronLeft size={30} />
                </div>
                <div className="hero-arrow hero-next" onClick={nextSlide}>
                    <ChevronRight size={30} />
                </div>

                <div className="container hero-content fade-in-up">
                    <h1>{slides[currentSlide].title}</h1>
                    <span className="hero-title-sub">{slides[currentSlide].subtitle}</span>

                    <p>{slides[currentSlide].text}</p>

                    <div className="hero-btns">
                        <Link to="/products" className="btn btn-cta">Explore Our Products</Link>
                    </div>
                </div>

                <div className="slider-dots">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            </section>

            <section className="section features-section">
                <div className="container">
                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Pharma Grade</h3>
                            <p>Strict adherence to hygiene and regulatory compliance for medical packaging.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><Package size={32} /></div>
                            <h3>Custom Molding</h3>
                            <p>Tailored shapes and designs to make your brand stand out on the shelf.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-box"><CheckCircle size={32} /></div>
                            <h3>Quality Assured</h3>
                            <p>Rigorous testing and quality control processes for consistent durability.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container about-preview">
                    <div className="about-text">
                        <h2>Reliable Manufacturing <br /> Partner</h2>
                        <p>At Aethon Plast, we combine advanced technology with manufacturing expertise to deliver superior packaging solutions. From startups to enterprises, we enable growth through quality.</p>
                        <Link to="/about" className="learn-more">Learn More <ArrowRight size={16} /></Link>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h4>0+</h4>
                            <p>Units/Month</p>
                        </div>
                        <div className="stat-item">
                            <h4>0+</h4>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
