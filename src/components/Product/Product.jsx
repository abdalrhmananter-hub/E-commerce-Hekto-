import Topper from '../Topper/Topper';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/products/${id}`);
                setProduct(res.data.product);
            } catch (err) {
                console.error("Error:", err);
            }
        };
        if (id) getProduct();
    }, [id]);

    if (!product) return <div className="text-center p-5 mt-5"><h3>Product not found!</h3></div>;

    return (
        <>
            <Topper title={"product"} breadcrumb={"product"} />

            <div className="container py-5">
                <div className="bg-white shadow-sm rounded p-4 p-md-5">
                    <div className="row align-items-center">
                        
                        <div className="col-md-5 mb-4 mb-md-0 text-center">
                            <img
                                src={`http://localhost:5000/${product.image.replace('\\', '/')}`}
                                className="img-fluid rounded"
                                alt={product.name}
                                style={{ maxHeight: '500px', objectFit: 'contain' }}
                            />
                        </div>

                        <div className="col-md-7 ps-md-5 d-flex flex-column justify-content-center">
                            
                            <h2 className="fw-bolder mb-3" style={{ color: '#151875', fontSize: '2.2rem' }}>
                                {product.name}
                            </h2>

                            <div className="d-flex align-items-center mb-3">
                                <div className="text-warning me-2" style={{ fontSize: '15px' }}>
                                    &#9733; &#9733; &#9733; &#9733; &#9733;
                                </div>
                                <span className="text-muted" style={{ fontSize: '15px' }}>(22)</span>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <span className="fw-bold me-3" style={{ color: '#151875', fontSize: '20px' }}>
                                    {product.price}
                                </span>
                                <span className="text-decoration-line-through" style={{ color: '#fb2e86', fontSize: "16px" }}>
                                    {product.price} 
                                </span>
                            </div>

                            <div className="mb-4 d-flex align-items-center">
                                <span className="fw-bold me-3" style={{ color: '#151875' }}>Color</span>
                                <span className="d-inline-block rounded-circle me-2 shadow-sm" style={{ width: '16px', height: '16px', backgroundColor: '#000' }}></span>
                                <span className="d-inline-block rounded-circle me-2 shadow-sm" style={{ width: '16px', height: '16px', backgroundColor: '#fb2e86' }}></span>
                                <span className="d-inline-block rounded-circle shadow-sm" style={{ width: '16px', height: '16px', backgroundColor: '#151875' }}></span>
                            </div>

                            <p className="text-muted mb-4 pb-4 border-bottom" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                                {product.description}
                            </p>

                            <div className="d-flex align-items-center mb-4 pb-2">
                                <button className="btn fw-bold px-4 py-2 me-4 shadow-sm" style={{ color: '#151875', backgroundColor: '#f4f6f8', borderRadius: '4px' }}>
                                    Add To Cart
                                </button>
                                <span style={{ color: '#151875', cursor: 'pointer', fontSize: '22px' }}>
                                    &#9825;
                                </span>
                            </div>

                            <div className="d-flex flex-column gap-3 mt-2" style={{ color: '#151875', fontSize: '15px' }}>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold me-2">Categories:</span>
                                    <span className="text-muted">Furniture</span> 
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold me-2">Tags:</span>
                                    <span className="text-muted">Chair, Minimalist</span>
                                </div>
                                <div className="d-flex align-items-center mt-1">
                                    <span className="fw-bold me-3">Share:</span>
                                    <div className="d-flex gap-2">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '26px', height: '26px', backgroundColor: '#151875', fontSize: '13px', cursor: 'pointer' }}>f</div>
                                        <div className="rounded-circle d-flex align-items-center justify-content-center text-white shadow-sm" style={{ width: '26px', height: '26px', backgroundColor: '#151875', fontSize: '13px', cursor: 'pointer' }}>t</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}