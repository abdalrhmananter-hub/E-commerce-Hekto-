import React, { useState, useEffect } from 'react';
import homeImage from '../../assets/promotional.png'
import './carousel.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import freeDelivery from '../../assets/free-delivery 1.png'
import cashback from '../../assets/cashback 1.png'
import premium from '../../assets/premium-quality 1.png'
import promotional from '../../assets/24-hours-support 1.png'
import homeImage2 from '../../assets/unique feature sofa.png'


export default function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data.allProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className=" carousel-item active ">
                        <img src={homeImage} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block text-start" style={{ left: '10%', top: '50%', bottom: 'auto' }}>
                            <Link to="../Allproducts"><button className="btn px-4 py-2 fw-bold text-white" style={{ backgroundColor: '#fb2e86', borderRadius: '2px' }}>
                                Shop Now
                            </button></Link>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={homeImage} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block text-start" style={{ left: '10%', top: '50%', bottom: 'auto' }}>
                            <Link to="../Allproducts"><button className="btn px-4 py-2 fw-bold text-white" style={{ backgroundColor: '#fb2e86', borderRadius: '2px' }}>
                                Shop Now
                            </button></Link>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={homeImage} className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block text-start" style={{ left: '10%', top: '50%', bottom: 'auto' }}>
                            <Link to="../Allproducts"><button className="btn px-4 py-2 fw-bold text-white" style={{ backgroundColor: '#fb2e86', borderRadius: '2px' }}>
                                Shop Now
                            </button></Link>

                        </div>
                    </div>
                </div>
                <button className=" carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon cColor" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className=" carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon cColor " aria-hidden="true"></span>
                    <span className="visually-hidden ">Next</span>
                </button>
            </div>


            <div className="container-fluid d-flex align-items-center justify-content-center p-5" style={{ minHeight: '60vh' }}>
                <div className="container width_control d-flex flex-column align-items-center">
                    <h1 className='tilte mb-5'>Featured Products</h1>
                    <div className="flex-row d-flex justify-content-center gap-3 px-5">

                        {products.slice(0, 4).map((product) => (
                            <div key={product._id} className="card shadow p-0 col-3" style={{ width: '18rem' }}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={`http://localhost:5000/${product.image.replace('\\', '/')}`}
                                        className="card-img-top cardImage" alt={product.name} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-pink text-center">{product.name}</h5>
                                    <p className='text-center'>{product.price} EGP</p>
                                    <p className="card-text text-center ">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="container-fluid d-flex align-items-center justify-content-center p-5" style={{ minHeight: '60vh' }}>
                <div className="container width_control d-flex flex-column align-items-center">
                    <h1 className='tilte mb-5'>Featured Products</h1>
                    <div className="row mx-auto d-flex justify-content-center gap-3">

                        {products.slice(0, 6).map((product) => (
                            <div key={product._id} className=" col-3 card shadow p-0 " style={{ width: '18rem' }}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={`http://localhost:5000/${product.image.replace('\\', '/')}`}
                                        className="card-img-top cardImage" alt={product.name} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-pink text-center">{product.name}</h5>
                                    <p className='text-center'>{product.price} EGP</p>
                                    <p className="card-text text-center ">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="container-fluid d-flex align-items-center justify-content-center p-5" style={{ minHeight: '60vh' }}>
                <div className="row mx-auto d-flex justify-content-center align-items-center gap-3">
                    <div><h1 className='text_color text-center my-2'>What Shopex Offer!</h1></div>
                    <div className="card featureCards d-flex align-items-center justify-content-center  " style={{ width: '18rem' }}>
                        <img src={freeDelivery} className="card-img-top w-50 featureCards" />
                        <div className="card-body bg-light">
                            <h5 className="card-title text-center">27/7 Support</h5>
                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..</p>
                        </div>
                    </div>
                    <div className="card featureCards d-flex align-items-center justify-content-center  " style={{ width: '18rem' }}>
                        <img src={cashback} className="card-img-top w-50 featureCards" />
                        <div className="card-body bg-light">
                            <h5 className="card-title text-center">27/7 Support</h5>
                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..</p>
                        </div>
                    </div>
                    <div className="card featureCards d-flex align-items-center justify-content-center  " style={{ width: '18rem' }}>
                        <img src={premium} className="card-img-top w-50 featureCards" />
                        <div className="card-body bg-light">
                            <h5 className="card-title text-center">27/7 Support</h5>
                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..</p>
                        </div>
                    </div>
                    <div className="card featureCards d-flex align-items-center justify-content-center  " style={{ width: '18rem' }}>
                        <img src={promotional} className="card-img-top w-50 featureCards" />
                        <div className="card-body bg-light">
                            <h5 className="card-title text-center">27/7 Support</h5>
                            <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida..</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container-fuild bgPic'>
                <img src={homeImage2} className="d-block w-100 "  />
            </div>


            
            <div className="container-fluid d-flex align-items-center justify-content-center p-5" style={{ minHeight: '60vh' }}>
                <div className="container width_control d-flex flex-column align-items-center">
                    <h1 className='tilte mb-5'>Trending Products</h1>
                    <div className="flex-row d-flex justify-content-center gap-3 px-5">

                        {products.slice(5, 9).map((product) => (
                            <div key={product._id} className="card shadow p-0 col-3" style={{ width: '18rem' }}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={`http://localhost:5000/${product.image.replace('\\', '/')}`}
                                        className="card-img-top cardImage" alt={product.name} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-pink text-center">{product.name}</h5>
                                    <p className='text-center'>{product.price} EGP</p>
                                    <p className="card-text text-center ">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>
    )
}