/* 
/!\ CAUTION /!\
 - START JSON-SERVER BEFORE LUNCH APP 
 - TO OPEN JS : open with live server because JS file are module type
*/

// IMPORTS
import {sanitizedProductsList} from './utils.js';

// FUNCTIONS
const getProductsData = async(url) =>{
    let response = await fetch(url);
    console.log(response)
        let data = await response.json();
        return data;
}

// GET CATEGORY NAME USING DATA ATTRIBUT
const getCategoriesNames = () =>{
    let categoriesEl = document.querySelectorAll('.offcanvas-body ul li a')
    let categoriesList = [];
    categoriesEl.forEach((el) =>{
        categoriesList.push(el.dataset.category) 
    })
    return categoriesList
}

const filterProductsByCategories = (containerElement, categoriesTypes, productsArray) =>{
    let filteredProducts = productsArray;
    filteredProducts.forEach((product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)

    })
    categoriesTypes.forEach((category) =>{
        category.addEventListener('click', ()=>{
            // console.log(category.dataset.category)
            // console.log('line34', category)
            containerElement.innerHTML = ''
            filteredProducts = productsArray.filter((product) => {
                if(category.dataset.category === 'all' ){
                    return productsArray
                }else{
                    return product.category.includes(category.dataset.category)
                }
            })
            console.log(filteredProducts)
            filteredProducts.forEach((product) =>{
                containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)

            })
            return filteredProducts;
        })
    })
}

const generateBestSellerArticles = (containerElement, productsArray) =>{
    let bestsellersproducts = productsArray.filter((product) => product.isBestSeller)
    console.log(bestsellersproducts)
    bestsellersproducts.forEach(( product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
}


const generateCatalogueArticleHTMLEl = (data) => {
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
                            <button class="btn btn-light bg-white add-product" id="add-product-to-cart">+</button>
                        </div>
                        <div class=" col-2">
                            <button class="btn btn-light bg-white text-dark remove-product" id="remove-product-to-cart">-</button>
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

const getSearchedProducts = (searchInput, containerElement, productsArray) =>{
    let event = '';
    let searchedValue ;
    let elToListen = searchInput
    let searchModal = document.querySelector('#searchBarContent');
    let closeModalBtn = document.querySelector('#searchBarContent button');
    console.log(searchInput)
    let inputEl; 
    if(searchInput.dataset.type === 'input'){
        event = 'keyup';
    }
    if(searchInput.dataset.type === 'btn'){
        event = 'click';
        let parentEl = searchInput.parentElement;
        inputEl = parentEl.querySelector('input')
    }

    // LISTENING EVENT
    elToListen.addEventListener(event, (e)=>{
        let matchProducts = []
        containerElement.innerHTML = '';
        e.preventDefault();
        // get input value
        if(event === 'keyup'){
            searchedValue = e.target.value;
        }
        if(event === 'click'){
            searchedValue = inputEl.value;
        }
        // 

        productsArray.filter((product) =>{
            if((product.title).toLowerCase().includes(searchedValue) || (product.resume).toLowerCase().includes(searchedValue)){
                matchProducts.push(product)
            }
        })
        if(matchProducts.length === 0){
            containerElement.innerHTML += `<div>
                <p>Oops, no product available ! </p>
            </div>`
        }else{
            matchProducts.forEach((product) =>{
                containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
            })
        }
        if(e.code ==='Enter' ){
            closeModalBtn.click();
            elToListen.value= ''
        }
        if(event === 'click'){
            closeModalBtn.click();
            // empty input value
            inputEl.value = ''
        }
    })
}

// GET DATA ON PAGE LOAD
document.addEventListener('DOMContentLoaded', async()=>{
    const url = 'http://localhost:3000/products';
    /*
    errors products test
    const urlTestProducts = 'http://localhost:3004/products';
    let errorproductsList = await getProductsData(urlTestProducts)
    let myProducts = sanitizedProductsList(errorproductsList)
    */
    let productsList = await getProductsData(url)
    let catagoriesNames = getCategoriesNames()
    let myProductsSanitized = sanitizedProductsList(productsList)
    console.log(myProductsSanitized)

    // filter products
    let categoriesTypes = document.querySelectorAll('.offcanvas-body ul li a')
    const articlesContainer = document.getElementById('articles-container')

    let productFilter = filterProductsByCategories(articlesContainer, categoriesTypes,myProductsSanitized)

    // bestSeller products
    const bestSellerContainer = document.getElementById('bestseller-container')
    generateBestSellerArticles(bestSellerContainer, myProductsSanitized)

    // search bar
    const searchbar = document.getElementById('search-input');
    const searchbutton = document.getElementById('search-button');

    getSearchedProducts(searchbar, articlesContainer, myProductsSanitized)
    getSearchedProducts(searchbutton, articlesContainer, myProductsSanitized)

})

