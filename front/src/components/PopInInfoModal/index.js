import React, { useEffect, useState } from 'react';
import {useCatalogueContext} from '../../contextes/CatalogueContext'
import {useCartContext} from '../../contextes/CartContext';
import './style.css';

const PopInInfoModal = () => {
    const {popInModalDisplay, productsList, favouritesList, setPopInModalDisplay, popInModalMessage} = useCatalogueContext();
    const [icon, setIcon] = useState('');
    const [message, setMessage] = useState('')

    useEffect(()=>{
        if(popInModalDisplay){
            setIcon(popInModalMessage.icon)
            setMessage(popInModalMessage.message)
            let timer = setTimeout(()=>{
                setPopInModalDisplay(false)
            }, 3000)

            return ()=> clearTimeout(timer) 
        }
    }, [popInModalDisplay])

    return (
        
        <>
           {

                popInModalDisplay && 
                <div id="alert-favourite-message">
                    <div className="alert alert-dismissible fade show" role="alert">
                        <strong>
                            <i className={icon}></i> {message}
                        </strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
           }
        </>
    );
};

export default PopInInfoModal;