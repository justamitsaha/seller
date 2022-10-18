import React, { useState, useEffect } from 'react';

const CardComponent = ({ cardData }) => {
    return (

        <div className="card" >
            <a href='' className='custom-anchor'>
                <img src={cardData.productImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='product-title'>
                        <h6 className="card-title">{cardData.productName}</h6>
                    </div>
                    <p className="card-text">{cardData.productDetails}</p>
                    <div>
                        <span className="badge text-bg-success">
                            {cardData.rating}
                            <img src='./images/icons8-star-48.png' className='starimage'></img>
                        </span>
                        &nbsp;&nbsp;
                        <span>
                            &#x20B9; {cardData.discountPrice}
                        </span>
                        &nbsp;&nbsp;
                        <span><b>22% off</b> </span>
                    </div>
                    <div>
                        <span>Was </span> &nbsp;&nbsp;
                        <span className='disbled-span'><s>{cardData.actualPrice}</s></span> &nbsp;&nbsp;

                        <span>
                            {!!cardData.freeDelivery &&
                                <strong>
                                    Free Delivey
                                </strong>
                            }
                        </span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardComponent;