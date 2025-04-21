// pages/HomePage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/products/productSlice';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const dispatch = useDispatch();
    const { data: products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
            dispatch(deleteProduct(id));
        }
    };

    return (
        <div className=" min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-emerald-700 mb-6">
                    Danh sách sản phẩm
                </h1>

                {/* 🔽 Nút chuyển trang thêm sản phẩm */}
                <div className="text-right mb-6">
                    <Link
                        to="/add"
                        className="inline-block bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                        Thêm sản phẩm mới
                    </Link>
                </div>

                {/* Trạng thái loading / error / danh sách */}
                {loading ? (
                    <p className="text-center text-sky-600 text-lg">Đang tải...</p>
                ) : error ? (
                    <p className="text-center text-red-500 text-lg">{error}</p>
                ) : products.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg">Chưa có sản phẩm nào.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {products.map(prod => (
                            <div
                                key={prod.id}
                                className="bg-white rounded-xl border border-emerald-200 shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between w-full"
                            >
                                <div>
                                    <h2 className="text-xl font-bold text-emerald-800 mb-2">{prod.name}</h2>
                                    <p className="text-gray-600 mb-4">{prod.description}</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-fuchsia-700 mb-4">
                                        {prod.price.toLocaleString()}đ
                                    </p>

                                    {/* 🔽 Các nút action */}
                                    <Link
                                        to={`/product/${prod.id}`}
                                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mr-2 mb-2 transition"
                                    >
                                        Xem
                                    </Link>

                                    <Link
                                        to={`/edit/${prod.id}`}
                                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full mr-2 mb-2 transition"
                                    >
                                        Sửa
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(prod.id)}
                                        className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full mb-2 transition"
                                    >
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
