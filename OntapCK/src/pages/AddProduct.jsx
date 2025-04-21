// pages/AddProduct.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price: parseInt(price),
    };
    dispatch(addProduct(newProduct));
    navigate('/'); // Quay lại trang home sau khi thêm sản phẩm thành công
  };

  return (
    <div className="bg-green-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Thêm sản phẩm mới</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border rounded-md"
            required
          />
          <textarea
            placeholder="Mô tả sản phẩm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border rounded-md"
            required
          />
          <input
            type="number"
            placeholder="Giá sản phẩm"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-4 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Thêm sản phẩm
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
}
