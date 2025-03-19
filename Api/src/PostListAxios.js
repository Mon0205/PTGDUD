import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Spinner, Card, Container, Row, Col } from "react-bootstrap";

const PostListAxios = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data.slice(0, 12));
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center fw-bold">📌 Danh sách bài viết</h2>
            <div className="text-center mb-3">
                <Button variant="success" onClick={fetchPosts} className="shadow">
                    🔄 Tải lại
                </Button>
            </div>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="success" />
                    <p>Đang tải dữ liệu...</p>
                </div>
            ) : (
                <Row className="g-4">
                    {posts.map((post) => (
                        <Col md={6} lg={4} key={post.id} className="mb-3">
                            <Card className="shadow-sm border-0 post-card">
                                <Card.Body>
                                    <Card.Title className="text-primary">{post.title}</Card.Title>
                                    <Card.Text>{post.body}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default PostListAxios;
