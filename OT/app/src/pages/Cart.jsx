import React from 'react';
import { useCart } from '../components/CartContext';
import { Container, Col, Row, Button, Table, Image } from 'react-bootstrap';
import Footer from "../components/Footer";
const Cart = () => {
    const { cart, removeCart, totalCart, totalPrice } = useCart();
    return (
        <div>
            <Container>
                <h2>Cart {totalCart} item</h2>
                {totalCart === 0 ? (
                    <h2>Gio hàng trống</h2>
                ) : (
                    <>
                        <Table>
                            <tbody>
                                {cart.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <Image src={product.img}></Image>
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quality}</td>
                                        <td>{(product.price) * (product.quality)}</td>
                                        <td><Button onClick={() => removeCart(product.id)}>Xóa</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Row>
                            <Col>
                                <h1>
                                    TỔNG TIỀN: {totalPrice}
                                </h1>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
            <Footer></Footer>


        </div>
    );
};

export default Cart;