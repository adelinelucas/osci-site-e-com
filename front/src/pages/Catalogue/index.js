import React from 'react';
import CardList from '../../components/CardList/CardList';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection';
import Newsletter from '../../components/Newsletter';
import BestSellersList from '../../components/BestSellersList';
import CatalogueProductsList from '../../components/CatalogueProductsList';
import FilterByPrice from '../../components/FilterByPrice';
import PopInInfoModal from '../../components/PopInInfoModal';
import { CataloguePanierProvider } from '../../contextes/CataloguePanierContext';


const Catalogue = () => {
    return (
        <>
            {/* <CataloguePanierProvider> */}
            {/* </CataloguePanierProvider> */}
            <HeroSection/>
            <FilterByPrice/>
            {/* <CataloguePanierProvider> */}
                <CatalogueProductsList />
                <BestSellersList />
            {/* </CataloguePanierProvider> */}
            <Newsletter/>
            <PopInInfoModal />
        </>
    );
};

export default Catalogue;