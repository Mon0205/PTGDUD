import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => setForm(data));
    }, [id]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        navigate('/');
    };

    return (
        <div>
            <h2>Chỉnh sửa sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Tên</label>
                    <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label>Giá</label>
                    <input name="price" type="number" value={form.price} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                    <label>Mô tả</label>
                    <textarea name="description" value={form.description} onChange={handleChange} className="form-control" required />
                </div>
                <button className="btn btn-warning" type="submit">Cập nhật</button>
            </form>
        </div>
    );
}

export default EditProduct;
