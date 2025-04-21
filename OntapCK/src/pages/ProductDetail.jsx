// pages/ProductDetail.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../features/products/productSlice';

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedProduct, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id, dispatch]);

    if (loading) return <p className="text-center text-blue-500 text-lg">Đang tải...</p>;
    if (error) return <p className="text-center text-red-600 text-lg">{error}</p>;

    return (
        <div className=" min-h-screen py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-emerald-200 p-8">
                <h1 className="text-3xl font-bold text-emerald-800 text-center mb-8">
                    📦 Chi tiết sản phẩm
                </h1>

                {selectedProduct ? (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {selectedProduct.name}
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {selectedProduct.description}
                        </p>
                        <p className="text-2xl font-bold text-pink-600">
                            {selectedProduct.price.toLocaleString()}đ
                        </p>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">Không tìm thấy sản phẩm.</p>
                )}

                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-block bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
                    >
                        Quay lại danh sách
                    </button>
                </div>
            </div>
        </div>
    );
}
