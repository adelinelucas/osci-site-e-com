import React from 'react';
import {useCatalogueContext} from '../../contextes/CatalogueContext';

const Categorie = ({category, categoryName}) => {
    const {setSearchCategory} = useCatalogueContext();
    return (
        <li className="nav-item my-3 ml-1">
            <a className="nav-link active" aria-current="page" data-category={category} onClick={()=>setSearchCategory(category)}>{categoryName}</a>
            <div className="separator"></div>
        </li>
    );
};

export default Categorie;