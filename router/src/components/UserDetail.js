import { useParams } from "react-router-dom";
import "./UserDetail.css";
const users = [
    { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", img: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" },
    { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" },
    { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZrKmaxmMuJH5nA2futuzfHFA2766g7Axmg&s" }
];
function UserDetail() {
    const { id } = useParams();
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
        return <h2>Người dùng không tồn tại</h2>;
    }
    return (
        <div className="profile-card">
            <h1>{user.name}</h1>
            <img src={user.img} alt="" />
            <p>Tuổi: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}
export default UserDetail;