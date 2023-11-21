import React, {useState, useEffect} from 'react';
import PopInInfoModal from '../PopInInfoModal';
import {useCatalogueContext} from '../../contextes/CatalogueContext'
import {useCartContext} from '../../contextes/CartContext';

const ModalsList = () => {
    const {popInModalDisplay, products, favouritesList, setPopInModalDisplay, popInModalMessage} = useCatalogueContext();
    const {productsList,setProductsList, setTotalProducts, setQuantityProducts, totalProducts, quantityProducts} = useCartContext();
    const [compteur, setCompteur] = useState(0)
    const [modals, setModals] = useState([]);
    const [modalContent, setModalContent] = useState({});
    let intermediate = 0 ;

    useEffect(()=>{
        if(productsList|| favouritesList){
            setCompteur(compteur + 1)
            setModalContent({id: compteur})
            setModals([...modals, modalContent]);
            console.log('modals', modals)
            console.log('modalecontent', modalContent)
            
            let timer = setTimeout(()=>{
                removeModal(compteur)
            }, 2000)

            return ()=> clearTimeout(timer) 
        }
        setPopInModalDisplay(false)

    }, [popInModalDisplay])


    // const addModal = (modalData) => {
    //     setModals([...modals, modalData]);
    // };
     
    const removeModal = (compteur) => {
        console.log('remove modal')
        setModals(modals.filter(modal => modal.id !== compteur));
    };

    return (
        <div>
            {popInModalDisplay &&
                <div className="modal-list">
                    {
                    modals ? modals.map((modal, idx) => (
                        <PopInInfoModal key={modal.id} test={modal.id}/>
                    )):
                    ''
                }
                </div>
            }    
        </div>
    );
};
 
export default ModalsList;