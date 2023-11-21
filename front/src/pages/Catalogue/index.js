import React from 'react';
import HeroSection from '../../components/HeroSection';
import Newsletter from '../../components/Newsletter';
import BestSellersList from '../../components/BestSellersList';
import CatalogueProductsList from '../../components/CatalogueProductsList';
import FilterByPrice from '../../components/FilterByPrice';
import PopInInfoModal from '../../components/PopInInfoModal';
import ModalsList from '../../components/ModalsList';

const Catalogue = () => {
    return (
        <>
            <HeroSection/>
            <FilterByPrice/>
            <CatalogueProductsList />
            <BestSellersList />
            <Newsletter/>
            <PopInInfoModal />
            {/* <ModalsList/> */}
        </>
    );
};

export default Catalogue;