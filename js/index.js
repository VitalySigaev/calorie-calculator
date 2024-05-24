'use strict';

import { addProduct } from "./addProduct.js";
import { clearData, products } from "./data.js";
import { displayProducts, productItems } from "./display.js";
import { sortProductsByCalories, filterProducts, filterInput } from "./filter.js";
import { dailyGoalInput,  dailyGoal } from "./update.js";


document.addEventListener("DOMContentLoaded", function () {


    const clearButton = document.getElementById("clear-button");
    const addProductButton = document.getElementById("add-button");


    const sortButton = document.getElementById("sort-button");
    sortButton.addEventListener("click", sortProductsByCalories);

    addProductButton.addEventListener("click", addProduct);
    filterInput.addEventListener("input", filterProducts);

    clearButton.addEventListener("click", clearData);

    displayProducts(products);
    dailyGoalInput.value = dailyGoal;

    productItems.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            products.splice(index, 1);
            displayProducts(products);
        }
    });

});
