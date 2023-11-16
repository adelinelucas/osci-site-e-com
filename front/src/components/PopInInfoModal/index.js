import React from 'react';
import {useCatalogueContext} from '../../contextes/CatalogueContext'

const PopInInfoModal = () => {
    const {popInModalDisplay} = useCatalogueContext();

    console.log(popInModalDisplay)
    return (
        
        <div id="alert-favourite-message">
           
           {
                popInModalDisplay && <p>ceci est un message de test depuis le component pop in modal</p>
           }
        </div>
    );
};

export default PopInInfoModal;