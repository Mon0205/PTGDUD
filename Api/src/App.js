import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import PostList from "./PostList";
import PostListAxios from "./PostListAxios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Container className="mt-3">
        <h1 className="text-center">🚀 Ứng dụng Fetch API</h1>

        {/* Thanh điều hướng */}
        <Nav className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link as={Link} to="/">📜 Fetch API</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/axios">⚡ Axios</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Định tuyến các trang */}
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/axios" element={<PostListAxios />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
