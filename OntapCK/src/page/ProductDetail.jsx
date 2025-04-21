import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: product, loading, error } = useFetch(`http://localhost:3000/products/${id}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-danger">Error: {error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            {product.image && <img src={product.image} alt={product.name} className="img-fluid mb-3" />}
            <p><strong>Price:</strong> ${product.price}</p>
            <p>{product.description}</p>
            <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>Quay lại</button>
        </div>
    );
}

export default ProductDetail;
