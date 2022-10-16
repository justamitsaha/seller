import React, { useState, useEffect } from 'react';

const AddProductComponenet = () => {

    const [productName, setproductName] = useState('');
    const [imagepath, setimagepath] = useState('');
    const [price, setprice] = useState('');
    const [category, setcategory] = useState('');
    const [shippingIncluded, setshippingIncluded] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        switch (name) {
            case 'productName':
                setproductName(value);
                break;
            case 'imagepath':
                setimagepath(value);
                break;
            case 'price':
                setprice(value);
            case 'category':
                setcategory(value);
                break;
            case 'shippingIncluded':
                setshippingIncluded(value);
                break;
            default:
                break;

        };
    }

    const handleSubmit = (event) => {

    }

    return (
        <section>
            <div className="container-fluid text-center pt-5 pb-5">
                <div className="row align-items-start">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-10 ">
                        <figure className={`figure ${imagepath.length ? '' : 'display-none'}`}>
                            <img src={imagepath} className="figure-img img-fluid rounded image-style" alt="..." />
                        </figure>
                        <div>
                            <form >
                                <div className="form-floating mb-3">
                                    <input type="text" name="productName" className="form-control" id="productName" onChange={handleChange} />
                                    <label htmlFor="productName">Product Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="imagepath" className="form-control" id="imagepath" onChange={handleChange} />
                                    <label htmlFor="imagepath">Add image</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="price" className="form-control" id="price" onChange={handleChange} />
                                    <label htmlFor="price">App price</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <select id="cars" name="category" onChange={handleChange} className="custom-form-item custom-dropdown">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="fiat">Fiat</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="float-left mb-3 custom-form-item custom-checkox">
                                    <input className="form-check-input" type="checkbox" defaultValue id="shippingIncluded" />
                                    <label className="form-check-label" htmlFor="shippingIncluded">
                                        Is Shipping free
                                    </label>
                                </div>

                            </form>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                            <button className="btn btn-dark btn-primary" type="button" onClick={handleSubmit} >Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AddProductComponenet;