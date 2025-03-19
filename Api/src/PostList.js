import { useState, useEffect } from "react";
import { Button, Spinner, Card, Container, Row, Col } from "react-bootstrap";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
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
            <h2 className="text-center">Danh sách bài viết (Fetch API)</h2>
            <div className="text-center mb-3">
                <Button variant="success" onClick={fetchPosts} className="shadow">
                    🔄 Tải lại
                </Button>
            </div>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                    <p>Đang tải...</p>
                </div>
            ) : (
                <Row>
                    {posts.map((post) => (
                        <Col md={6} lg={4} key={post.id} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-success">{post.title}</Card.Title>
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

export default PostList;
