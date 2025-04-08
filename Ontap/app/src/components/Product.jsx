import { useCart } from "./CartContext";
import './Product.css';
import p1 from "../img/dacnhantam.png";
import p2 from "../img/images2.jpg";
import p3 from "../img/images1.jpg";
import { useNavigate } from 'react-router-dom';

const products = [
    { id: 1, name: "Đắc nhân tâm", price: 86000, img: p1 },
    { id: 2, name: "Sách 2", price: 86000, img: p2 },
    { id: 3, name: "Google Pixel 8", price: 799, img: p3 }
];

const Product = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <div className="product">
                {products.map((product) => (
                    <div className="products" key={product.id}>
                        <div><img className="img" src={product.img} alt="" /></div>
                        <div>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                        </div>
                        <div className="container-btn">
                            <button className="button" onClick={() => addToCart(product)}>Add to Cart</button>
                            <button className="button" onClick={() => handleViewDetails(product.id)}>Xem chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
