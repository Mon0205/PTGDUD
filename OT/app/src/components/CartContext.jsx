import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Lấy dữ liệu từ localStorage (nếu có)
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [cart, setCart] = useState(storedCart);

    // Cập nhật localStorage mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addCart = (product) => {
        setCart((prevCart) => {
            const existProduct = prevCart.find((item) => item.id === product.id);
            if (existProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quality: item.quality + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quality: 1 }];
            }
        });
    };

    const removeCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    const totalCart = cart.length;
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quality, 0);

    return (
        <CartContext.Provider value={{ cart, addCart, removeCart, totalCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
