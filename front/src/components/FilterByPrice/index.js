import React from 'react';
import './style.css';

const FilterByPrice = () => {
    return (
        <div className="container header__filter-section mt-4">
            <div className="row row-cols-2">
                <button className="col" id="filter-lowest-price"><p>Lowest Price</p></button>
                <button className="col" id="filter-highest-price"><p>Highest Price</p></button>
            </div>
        </div>
    );
};

export default FilterByPrice;