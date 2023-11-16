export async function fetchAllProductsFromDB(url) {
    return await fetch(url).then((response) =>
        response.json()
    );
}