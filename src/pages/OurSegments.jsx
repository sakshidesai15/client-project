
import { Link } from 'react-router-dom';
import { Pill, Leaf, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
const pharmaImg = '/assets/segment_pharma_1769615897321.png';
const nutraImg = '/assets/segment_nutra_1769616067190.png';
const cosmeticImg = '/assets/pharma_banner_bottles_1769614352905.png';
const fmcgImg = '/assets/pharma_banner_production_retry_1769615616299.png';
import { useEffect, useRef } from 'react';
import './OurSegments.css';

const OurSegments = () => {
    const rowRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        rowRefs.current.forEach((row) => {
            if (row) observer.observe(row);
        });

        return () => {
            if (rowRefs.current) {
                rowRefs.current.forEach((row) => {
                    if (row) observer.unobserve(row);
                });
            }
        };
    }, []);

    const segments = [
        {
            id: 'pharma',
            title: 'Pharmaceuticals',
            image: pharmaImg,
            icon: <Pill size={40} />,
            description: 'We provide regulatory-compliant packaging solutions for the pharmaceutical industry, ensuring safety, hygiene, and precision. Our products include bottles, caps, and closures designed for various dosage forms.',
            features: ['USFDA Compliant Materials', 'Clean Room Manufacturing', 'Child-Resistant Options']
        },
        {
            id: 'nutra',
            title: 'Nutraceuticals',
            image: nutraImg,
            icon: <Leaf size={40} />,
            description: 'Our packaging for nutraceuticals and supplements combines protection with shelf appeal. We offer a wide range of containers suitable for vitamins, protein powders, and herbal supplements.',
            features: ['UV Protection', 'Tamper-Evident Seals', 'Custom Colors']
        },
        {
            id: 'cosmetics',
            title: 'Cosmetics',
            image: cosmeticImg,
            icon: <Sparkles size={40} />,
            description: 'Premium packaging solutions for the beauty and personal care industry. We create aesthetically pleasing and functional containers for lotions, creams, and serums.',
            features: ['High-Quality Finish', 'Custom Shapes', 'Brand Customization']
        },
        {
            id: 'fmcg',
            title: 'FMCG',
            image: fmcgImg,
            icon: <ShoppingBag size={40} />,
            description: 'Durable and cost-effective packaging for Fast Moving Consumer Goods. From household cleaners to food products, we deliver high-volume solutions without compromising quality.',
            features: ['High Volume Production', 'Cost-Effective', 'Durable Design']
        }
    ];

    return (
        <div className="serve-page">
            <div className="serve-header">
                <div className="container">
                    <h1>Our Segments</h1>
                    <p>Delivering excellence across diverse industries with tailored packaging solutions.</p>
                </div>
            </div>

            <div className="container segments-container">
                {segments.map((segment, index) => (
                    <div
                        key={segment.id}
                        className={`segment-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                        ref={el => rowRefs.current[index] = el}
                    >
                        <div className="segment-image">
                            <img src={segment.image} alt={segment.title} />
                        </div>
                        <div className="segment-content">
                            <div className="segment-icon">
                                {segment.icon}
                            </div>
                            <h2>{segment.title}</h2>
                            <p>{segment.description}</p>
                            <ul className="segment-features">
                                {segment.features.map((feature, idx) => (
                                    <li key={`${segment.id}-feat-${idx}`}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSegments;
