import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection';
import Newsletter from '../../components/Newsletter';
import BestSellersList from '../../components/BestSellersList';
import CatalogueProductsList from '../../components/CatalogueProductsList';
import FilterByPrice from '../../components/FilterByPrice';
import PopInInfoModal from '../../components/PopInInfoModal';

const Catalogue = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <FilterByPrice/>
            <CatalogueProductsList />
            <BestSellersList />
            <Newsletter/>
            <PopInInfoModal />
            <Footer />
        </div>
    );
};

export default Catalogue;