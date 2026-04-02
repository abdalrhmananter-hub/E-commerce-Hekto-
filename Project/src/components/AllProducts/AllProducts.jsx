import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Topper from '../Topper/Topper';
import footerpic from '../../assets/image 1174.png'

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const res = await axios.get('http://localhost:5000/products');
                setProducts(res.data.allProducts || res.data);
                
            } catch (err) {
                console.error("Error fetching all products:", err);
            
            }
        };
        fetchAll();
    }, []);

    

    return (
        <>
            <Topper title={"Shop Grid Default"} breadcrumb={"Products"} />

            <div className="container d-flex justify-contnet-center flex-column py-5">
              
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h4 style={{ color: '#151875' }} className="fw-bold">Ecommerce Acceories & Fashion item:</h4>
                        <p className="text-muted small">About {products.length} results</p>
                    </div>
                </div>

                <div className="row g-4">
                    {products.map((product) => (
                        <div key={product._id} className="col-12 col-md-6 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 text-center p-2 product-card">
                               
                                <div className="bg-light rounded p-3 mb-3" style={{ height: '220px' }}>
                                    <Link to={`/product/${product._id}`}>
                                        <img
                                            src={`http://localhost:5000/${product.image?.replace('\\', '/')}`}
                                            className="img-fluid h-100"
                                            style={{ objectFit: 'contain' }}
                                            alt={product.name}
                                        />
                                    </Link>
                                </div>

                                <div className="card-body p-1">
                                    <h6 className="fw-bold" style={{ color: '#151875' }}>{product.name}</h6>
                                    
                                    <p className="text-pink fw-bold mb-0">{product.price} EGP</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-center my-3' >
                    <img src={footerpic}></img>
                </div>
            </div>
        </>
    );
}