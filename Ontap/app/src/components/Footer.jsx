import { useParams } from 'react-router-dom';
import './Product.css';
import p1 from "../img/dacnhantam.png";
import p2 from "../img/images2.jpg";
import p3 from "../img/images1.jpg";

const products = [
    { id: 1, name: "Đắc nhân tâm", price: 86000, img: p1, description: "Cuốn sách giúp thay đổi tư duy và cách giao tiếp." },
    { id: 2, name: "Sách 2", price: 86000, img: p2, description: "Một cuốn sách hay để đọc và học hỏi." },
    { id: 3, name: "Google Pixel 8", price: 799, img: p3, description: "Điện thoại thông minh cao cấp với nhiều tính năng hấp dẫn." }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Sản phẩm không tồn tại</h2>;
    }

    return (
        <div className="product-detail">
            <h2>📖 {product.name}</h2>
            <img className="img" src={product.img} alt={product.name} />
            <p><strong>Giá:</strong> {product.price} VND</p>
            <p><strong>Mô tả:</strong> {product.description}</p>
        </div>
    );
};

export default ProductDetail;
