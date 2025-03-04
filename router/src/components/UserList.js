import { Link } from "react-router-dom";
import "./UserList.css";
const users = [
    { id: 1, name: "Nguyễn Văn A", img: "https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" },
    { id: 2, name: "Trần Thị B", img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg" },
    { id: 3, name: "Lê Văn C", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZrKmaxmMuJH5nA2futuzfHFA2766g7Axmg&s" }
];
function UserList() {
    return (
        <div className="container">
            {users.map((user) => (
                <div key={user.id}>
                    <Link className="link" to={`/user/${user.id}`}>
                        <img className="img" src={user.img} alt="" />
                        <p>{user.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default UserList;