import React from 'react';

const Card = ({productInfos}) => {

    console.log(productInfos)
    return (
        <article className="main__product__card card mb-md-5 mb-3 mt-3 border-0" style={{maxWidth: '540px'}} data-productid="product_id">
            <div className="row row-cols-2 g-0">
                <div className="col-5 main__product__card__bg d-flex align-items-center h-75">
                    <img src={productInfos.img} className="card-img-top" alt={productInfos.title + '-' + productInfos.resume} />                
                </div>
                <div className="col-7 main__product__card__infos">
                    <div className="card-body">
                        <h5 className="card-title fw-bolder"><span className="title">{productInfos.title}</span><span className="resume"> - {productInfos.resume}</span></h5>
                        <p className="card-text">{productInfos.description}</p>
                    </div>
                    <div className="main__card__prices-infos card-body row row-cols-2 justify-content-end p-0 ">
                        <p className="text-end w-auto"><span className="current-price text-decoration-line-through">{productInfos.price}</span>$</p>
                        <p className="w-auto"><span className="current-price text-danger">{productInfos.oldPrice}$</span></p>
                    </div>
                    <div className="main__card__product-actions card-body row p-1">
                        <div className="col-8">
                            <div className="row justify-content-evenly">
                                <div className="col-2">
                                    <button className="btn btn-light bg-white rounded-pill border-dark">1</button>
                                </div>
                                <div className=" col-2">
                                    <button className="btn btn-light bg-white add-product add-product-to-cart">+</button>
                                </div>
                                <div className=" col-2">
                                    <button className="btn btn-light bg-white text-dark remove-product remove-product-to-cart">-</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <a className="icon-link icon-link-hover link--maroon-ara">
                                    <i className="bi bi-heart add-product-to-favorite"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;