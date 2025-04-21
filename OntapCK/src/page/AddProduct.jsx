import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [form, setForm] = useState({ name: '', price: '', description: '' });
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (isSubmitting) return; // Ngăn gửi 2 lần
        setIsSubmitting(true);

        await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });

        navigate('/');
    };

    return (
        <div>
            <h2>Thêm sản phẩm</h2>
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
                <button className="btn btn-success" type="submit">Thêm</button>
            </form>
        </div>
    );
}

export default AddProduct;
