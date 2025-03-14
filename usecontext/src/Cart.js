import { useCart } from "./CartContext"; // ✅ Import useCart trước

const Cart = () => {
    const { cart, removeFromCart, totalItems, totalPrice } = useCart(); // ✅ Sử dụng useCart

    return (
        <div>
            <h2>🛒 Cart ({totalItems} items)</h2>
            <div className="cart">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((product) => (
                        <div className="cartlist" key={product.id}>
                            <img className="img" src={product.img} alt="" />
                            <span>{product.name} - ${product.price} x {product.quantity}</span>
                            <button className="button" onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            <span>Tổng tiền: {totalPrice}</span>
        </div>
    );
};

export default Cart;
