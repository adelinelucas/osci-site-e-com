/* 
/!\ CAUTION /!\
 - START JSON-SERVER BEFORE LUNCH APP 
 - TO OPEN JS : open with live server because JS file are module type
*/

// IMPORTS
import {sanitizedProductsList} from './utils-sanitizeProducts.js';
import {generateCatalogueArticleHTMLEl,renderCartItemsInNav} from './utils-productsRender.js';

// FUNCTIONS
const getProductsData = async(url) =>{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// GOBLALES
// update number of items in cart 
let numberCartItem = 0
let numberCartItemEl = document.getElementById('numCartItems')


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

    // display products
    let categoriesTypes = document.querySelectorAll('.offcanvas-body ul li a')
    const articlesContainer = document.getElementById('articles-container')
    displayProductsInDOM(articlesContainer, categoriesTypes,myProductsSanitized)

    // display bestSeller products
    const bestSellerContainer = document.getElementById('bestseller-container')
    displayBestSellerInDOM(bestSellerContainer, myProductsSanitized)

    // search products
    const searchbar = document.getElementById('search-input');
    const searchbutton = document.getElementById('search-button');

    // manage shearch bar
    searchbar.addEventListener('keyup', (e)=>{
        e.preventDefault();
        if(e.code ==='Enter' ){
            closeSearchModal()
            searchbar.blur()
            return
        }
        getSearchedProductsV2(e.target.value, articlesContainer, myProductsSanitized)
        manageCartItemCatalogue()
    })

    // manage click on search button
    searchbutton.addEventListener('click', (e) =>{
        e.preventDefault();
        getSearchedProductsV2(searchbar.value, articlesContainer, myProductsSanitized)
        closeSearchModal()
        searchbar.value = ''
        manageCartItemCatalogue()
    })
    manageCartItemCatalogue()    
    manageCartItemBestSeller()
})
/////
//////

// GET CATEGORY NAME USING DATA ATTRIBUT
const getCategoriesNames = () =>{
    let categoriesEl = document.querySelectorAll('.offcanvas-body ul li a')
    let categoriesList = [];
    categoriesEl.forEach((el) =>{
        categoriesList.push(el.dataset.category) 
    })
    return categoriesList
}

// 
const displayProductsInDOM = (containerElement, categoriesTypes, productsArray) =>{
    let filteredProducts = productsArray;
    // generate products loading the page
    filteredProducts.forEach((product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
    // generate products if filtering by categories
    categoriesTypes.forEach((category) =>{
        category.addEventListener('click', ()=>{
            containerElement.innerHTML = ''
            filteredProducts = productsArray.filter((product) => {
                if(category.dataset.category === 'all' ){
                    return productsArray
                }else{
                    return product.category.includes(category.dataset.category)
                }
            })
            filteredProducts.forEach((product) =>{
                containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)

            })
            manageCartItemCatalogue()
            return filteredProducts;
        })
    })
}

const displayBestSellerInDOM = (containerElement, productsArray) =>{
    let bestsellersproducts = productsArray.filter((product) => product.isBestSeller)
    bestsellersproducts.forEach(( product) =>{
        containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
    })
}

// Add an item in cart on click on "+" element of the card
const addItemsInCart =(btns) =>{
    btns.forEach((btn)=>{
        let addItem = btn.addEventListener('click', ()=>{
            numberCartItem += 1
            renderCartItemsInNav(numberCartItemEl, numberCartItem)
        })
        btn.removeEventListener('click', addItem)
    })
}

// Remove an item in cart on click on "+" element of the card
const removeItemsInCart =( btnsEl) => {
    btnsEl.forEach((btn)=>{
        let removeItem=  btn.addEventListener('click', ()=>{
            if(numberCartItem <= 0) {
                numberCartItem = 0
            }else{
                numberCartItem -= 1
            }
            renderCartItemsInNav(numberCartItemEl, numberCartItem)
        })
        btn.removeEventListener('click', removeItem)
    })
}

// manage Cart Item 
const manageCartItemCatalogue = () =>{
    let addItemToCartBtns = document.querySelectorAll('#articles-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #articles-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns)
    removeItemsInCart(removeItemToCartBtns)
}
const manageCartItemBestSeller = () =>{
    let addItemToCartBtns = document.querySelectorAll('#bestseller-container .add-product-to-cart')
    let removeItemToCartBtns = document.querySelectorAll(' #bestseller-container .remove-product-to-cart')
    addItemsInCart(addItemToCartBtns)
    removeItemsInCart(removeItemToCartBtns)
}

const closeSearchModal = () =>{
    const closeModalBtn = document.querySelector('#searchBarContent button');
    let closeModaleContainer = closeModalBtn.parentElement.parentElement
    const searchbar = document.getElementById('search-input');

    if(closeModaleContainer.classList.contains('show')){
        closeModalBtn.click();
        searchbar.value = ''
    }
}
const getSearchedProductsV2 = (searchedValue, containerElement, productsArray) =>{
    let matchProducts = []
    containerElement.innerHTML = '';
    productsArray.filter((product) =>{
        if((product.title).toLowerCase().includes(searchedValue) || (product.resume).toLowerCase().includes(searchedValue)){
            matchProducts.push(product)
        }
    })
    if(matchProducts.length === 0){
        containerElement.innerHTML += `<div class="no-product-found">
            <p>Oops, no product available ! e</p>
        </div>`
    }else{
        matchProducts.forEach((product) =>{
            containerElement.innerHTML += generateCatalogueArticleHTMLEl(product)
        })
    }
}


