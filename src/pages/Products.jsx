
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const pharmaImg = '/assets/segment_pharma_1769615897321.png';
const nutraImg = '/assets/segment_nutra_1769616067190.png';
const cosmeticImg = '/assets/pharma_banner_bottles_1769614352905.png';
const fmcgImg = '/assets/pharma_banner_production_retry_1769615616299.png';
import './Products.css';

const Products = () => {
    const categories = [
        {
            id: 'pharmaceuticals',
            name: 'Pharmaceuticals',
            image: pharmaImg,
            description: 'Regulatory-compliant packaging solutions ensuring safety, hygiene, and precision.',
            tag: 'Industry Standard'
        },
        {
            id: 'nutraceuticals',
            name: 'Nutraceuticals',
            image: nutraImg,
            description: 'Protective packaging for supplements combining shelf appeal with safety.',
            tag: 'Health & Wellness'
        },
        {
            id: 'cosmetics',
            name: 'Cosmetics',
            image: cosmeticImg,
            description: 'Aesthetically pleasing and functional containers for beauty and personal care.',
            tag: 'Premium Design'
        },
        {
            id: 'fmcg',
            name: 'FMCG',
            image: fmcgImg,
            description: 'Durable, cost-effective packaging solutions for fast-moving consumer goods.',
            tag: 'High Volume'
        }
    ];

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <h1>Market Segments</h1>
                    <p>Explore our specialized packaging solutions across key industries.</p>
                </div>
            </div>

            <div className="container products-section">
                <div className="products-grid">
                    {categories.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} />
                                <span className="product-tag">{product.tag}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <Link to={`/products/${product.id}`} className="btn-product-view">View Products <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container cta-section">
                <h2>Need a Custom Solution?</h2>
                <p>We specialize in custom molding to meet your specific requirements.</p>
                <Link to="/contact" className="btn btn-primary">Contact Us <ArrowRight size={18} /></Link>
            </div>
        </div>
    );
};

export default Products;
