import { products } from "./data.js";
import { displayProducts } from "./display.js";


export const filterInput = document.getElementById("filter");
export  let isAscendingSort = true;

export function sortProductsByCalories() {
    if (isAscendingSort) {
        products.sort((a, b) => a.calories - b.calories);
    } else {
        products.sort((a, b) => b.calories - a.calories);
    }

    displayProducts(products);
    isAscendingSort = !isAscendingSort;
}

export function filterProducts() {
    const filterText = filterInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterText));
    displayProducts(filteredProducts);
}