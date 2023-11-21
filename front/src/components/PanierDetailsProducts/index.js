import React,{useEffect} from 'react';

const PanierDetailsProducts = ({productInfos}) => {

    useEffect(() => {
        console.log(productInfos)
       
    }, [productInfos])

    return (
        <div>
            <p>{productInfos[0]}</p>
            <p>{productInfos[1]}</p>
            <p>{productInfos[2]}</p>
            <p>{productInfos[3]}</p>
            <p>{productInfos[4]}</p>
            <p>{productInfos[5]}</p>
            <p>{productInfos[6]}</p>


        </div>
    );
};

export default PanierDetailsProducts;