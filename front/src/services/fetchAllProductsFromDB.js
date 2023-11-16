export async function fetchAllProductsFromDB(url) {
    try{
        const response = await fetch(url);
        const data = await response?.json();
        return(data.message)
    }catch(error){
        return console.log(error)
    }
}