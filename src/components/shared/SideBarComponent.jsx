import React, { useState, useEffect } from 'react';

const SideBarComponent = () => {
    return (
        <div className='sidebar'>
            <div className='pl-3'>
                <a className='custom-anchor fw-bold' href=''>Price 0-500</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 500-1000</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 1,000-2,500</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 2,500-5,000</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 5,000-10,000</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 10,000-15,000</a><br></br>
                <a className='custom-anchor fw-bold' href=''>Price 15,000-20,000</a><br></br>
            </div>

            <div className="form-floating pt-3">
                <form>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="maxPrice" />
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="text" className="form-control" aria-label="Price example input" aria-describedby="inputGroup-sizing-sm" id="minPrice" />
                    <label htmlFor="minPrice">Min Price</label>

                </form>
                <button type="button" className="btn btn-dark">Search</button>
            </div>

            <div className='pl-3 pt-3'>
                <a className='custom-anchor fw-bold' href=''>4 <img src='./images/icons8-star-48.png' className='starimage'></img> and above</a><br></br>
                <a className='custom-anchor fw-bold' href=''>3-4 <img src='./images/icons8-star-48.png' className='starimage'></img></a><br></br>
                <a className='custom-anchor fw-bold' href=''>2-3 <img src='./images/icons8-star-48.png' className='starimage'></img></a><br></br>
                <a className='custom-anchor fw-bold' href=''>1-2 <img src='./images/icons8-star-48.png' className='starimage'></img></a><br></br>
            </div>

        </div>


    );
}

export default SideBarComponent;