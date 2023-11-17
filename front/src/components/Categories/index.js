import React from 'react';
import Categorie from '../Categorie';

const Categories = () => {
    const categoryList = [["all","All products" ],["cleansers", "Cleansers"],["moisturizes", "Moisturizes"], ["suncare", "Suncare"],["men", "Men's"]]
    return (
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {
                categoryList.map((category, index)=><Categorie category={category[0]} categoryName={category[1]} key={index} />)
            }
        </ul>
    );
};

export default Categories;