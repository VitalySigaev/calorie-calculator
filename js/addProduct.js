import { products } from "./data.js";
import { displayProducts } from "./display.js";
import {  updateChart } from './update.js'



const caloriesInput = document.getElementById("calories");
const productNameInput = document.getElementById("product-name");

export function addProduct() {
    const name = productNameInput.value;
    const calories = parseInt(caloriesInput.value);
    if (name && !isNaN(calories)) {
        products.push({ name, calories });
        productNameInput.value = "";
        caloriesInput.value = "";
        displayProducts(products);
        updateChart();
    }
}