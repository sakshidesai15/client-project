import './Pages.css';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>We are committed to delivering reliable, compliant, and cost-effective packaging products.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-content">
                    <div className="about-main">
                        <h2>Who We Are</h2>
                        <p className="text-primary" style={{ fontWeight: 600, marginBottom: '1rem' }}>
                            Aethon Plast Pvt Ltd is a premier manufacturer of high-quality plastic packaging solutions based in Hyderabad, Telangana.
                        </p>
                        <p>
                            We specialize in serving the pharmaceutical, cosmetic, healthcare, and FMCG industries with precision-molded HDPE, LDPE, and PET containers. Our facility is designed to support scalable production, catering to everyone from innovative startups to established large enterprises.
                        </p>
                        <br />
                        <p>
                            Quality and compliance are at the core of our operations. We follow strict quality control processes and hygienic manufacturing practices to ensure product safety, durability, and performance.
                        </p>
                    </div>
                    <div className="vision-mission">
                        <div className="vm-card">
                            <h3>Our Vision</h3>
                            <p>To become a globally trusted partner in plastic packaging through innovation and operational excellence.</p>
                        </div>
                        <div className="vm-card">
                            <h3>Our Mission</h3>
                            <p>To provide compliant, high-quality, and cost-effective packaging solutions that support our clients' growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
