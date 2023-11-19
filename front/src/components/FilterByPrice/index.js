import React from 'react';
import './style.css';
import {useCatalogueContext} from '../../contextes/CatalogueContext';

const FilterByPrice = () => {
    const {setFilterByPrice} = useCatalogueContext();


    return (
        <div className="container header__filter-section mt-4">
            <div className="row row-cols-2 w-100">
                <button className="col-6" id="filter-lowest-price" onClick={()=> setFilterByPrice('asc')}><p>Lowest Price</p></button>
                <button className="col-6" id="filter-highest-price" onClick={()=> setFilterByPrice('desc')}><p>Highest Price</p></button>
            </div>
        </div>
    );
};

export default FilterByPrice;