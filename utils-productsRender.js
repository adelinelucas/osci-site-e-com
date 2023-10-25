export const generateCatalogueArticleHTMLEl = (data) => {
    return `<article class="main__product__card card mb-md-5 mb-3 mt-3 border-0" style="max-width: 540px;">
    <div class="row row-cols-2 g-0">
        <div class="col-5 main__product__card__bg d-flex align-items-center h-75">
            <img src=${data.img} class="card-img-top" alt="${data.title} - ${data.resume}">                
        </div>
        <div class="col-7 main__product__card__infos">
            <div class="card-body">
                <h5 class="card-title fw-bolder">${data.title}<span> - ${data.resume}</span></h5>
                <p class="card-text">${(data.description).slice(0,50)}...</p>
            </div>
            <div class="main__card__prices-infos card-body row row-cols-2 justify-content-end p-0 ">
                <p class="text-end w-auto"><span class="current-price text-decoration-line-through">${data.price}</span>$</p>
                <p class="w-auto"><span class="promotion-price text-danger">${data.oldPrice}$</span></p>
            </div>
            <div class="main__card__product-actions card-body row p-1">
                <div class="col-8">
                    <div class="row justify-content-evenly">
                        <div class="col-2">
                            <button class="btn btn-light bg-white rounded-pill border-dark">1</button>
                        </div>
                        <div class=" col-2">
                            <button class="btn btn-light bg-white add-product add-product-to-cart">+</button>
                        </div>
                        <div class=" col-2">
                            <button class="btn btn-light bg-white text-dark remove-product remove-product-to-cart">-</button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div>
                        <a class="icon-link icon-link-hover link--maroon-ara">
                            <i class="bi bi-heart" id="add-product-to-favorite"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>`;   
}


export const renderCartItemsInNav = (numberCartItemEl, numberCartItem) =>{
    if(numberCartItem == 0){
        numberCartItemEl.innerHTML = `
        <i> </i>`;
    }else{
        numberCartItemEl.innerHTML = `
        <i>${numberCartItem}</i>`;
    }
}