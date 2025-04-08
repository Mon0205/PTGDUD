import React from 'react';
import { useParams } from 'react-router-dom';
import { product } from '../components/data';
import { Row, Col, Image, Button, Container } from 'react-bootstrap';
const Detail = () => {
    const { id } = useParams();
    const selectProduct = product.find((p) => p.id === parseInt(id));
    if (!selectProduct) {
        return <h3>Sản phẩm không tồn tại</h3>;
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src={selectProduct.img} fluid className='rounded'></Image>
                    </Col>
                    <Col>
                        <h1>{selectProduct.name}</h1>
                        <h2>{selectProduct.price.toLocaleString()} VNĐ</h2>
                        <p>{selectProduct.description}</p>
                        <Button>Thêm vào giỏ hàng</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Detail;