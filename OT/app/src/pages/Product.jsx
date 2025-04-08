import React from 'react';
import { product } from "../components/data";
import { Container, Col, Row, Button, Card, CardTitle } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
const Product = () => {
    const { addCart } = useCart();
    const navigate = useNavigate();
    const handleDetail = (id) => {
        navigate(`/product/${id}`)
        console.log(id);
    }
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    {product.map((product) => (
                        <Col key={product.id}>
                            <Card md={4} className='mb-4' >
                                <Card.Img src={product.img} variant='top'></Card.Img>
                                <Card className="body">
                                    <Card.Title>{product.name}</Card.Title>
                                    <h3>{product.price.toLocaleString()}VNĐ</h3>
                                    <Button onClick={() => addCart(product)}>Thêm giỏ hàng</Button>
                                    <Button onClick={() => handleDetail(product.id)}>Xem chi tiết</Button>
                                </Card>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Product;