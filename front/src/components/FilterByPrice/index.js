import React from 'react';
import './style.css';
import {useCatalogueContext} from '../../contextes/CatalogueContext';

const FilterByPrice = () => {
    const {setFilterByPrice} = useCatalogueContext();


    return (
        <div className="container header__filter-section mt-4">
            <div className="row row-cols-2">
                <button className="col" id="filter-lowest-price" onClick={()=> setFilterByPrice('desc')}><p>Lowest Price</p></button>
                <button className="col" id="filter-highest-price" onClick={()=> setFilterByPrice('asc')}><p>Highest Price</p></button>
            </div>
        </div>
    );
};

export default FilterByPrice;