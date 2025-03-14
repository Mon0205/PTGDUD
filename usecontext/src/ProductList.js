import { useCart } from "./CartContext";
import "./Format.css";
const products = [
    { id: 1, name: "iPhone 15", price: 999, img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/334864/iphone-16e-black-1-638756437699035701-750x500.jpg" },
    { id: 2, name: "Samsung Galaxy S24", price: 899, img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/334864/iphone-16e-black-1-638756437699035701-750x500.jpg" },
    { id: 3, name: "Google Pixel 8", price: 799, img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/334864/iphone-16e-black-1-638756437699035701-750x500.jpg" }
];
const ProductList = () => {
    const { addToCart } = useCart();
    return (
        <div>
            <h2>📦 Available Products</h2>
            <div className="product">
                {products.map((product) => (
                    <div className="products"
                        key={product.id}
                    >
                        <div><img className="img" src={product.img} alt="" /></div>
                        <div><span>{product.name} - ${product.price}</span></div>
                        <div><button className="button" onClick={() => addToCart(product)}>Add to
                            Cart</button></div>

                    </div>
                ))}

            </div>

        </div>
    );
};
export default ProductList;