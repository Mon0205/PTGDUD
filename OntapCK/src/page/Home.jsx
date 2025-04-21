import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import { Link } from 'react-router-dom';

function Home() {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.products);
    const handleDelete = async id => {
        if (confirm('Bạn có chắc chắn muốn xóa?')) {
            await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' });
            dispatch(fetchProducts());
        }
    };
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-danger">Error: {error}</p>;

    return (
        <div className="row">
            {items.map(product => (
                <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100 ">
                        {product.image && <img src={product.image} className="card-img-top card-product" />}
                        <div className="card-body">
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <p><strong>${product.price}</strong></p>
                            <Link to={`/product/${product.id}`} className="btn btn-info">Chi tiết</Link>
                            <button className="btn btn-danger ms-2" onClick={() => handleDelete(product.id)}>Xóa</button>
                            <Link to={`/edit/${product.id}`} className="btn btn-secondary ms-2">Sửa</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
