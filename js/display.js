import {updateChartDisplay, updateSummary} from './update.js'
import {loadChartsData} from './data.js'

export const productItems = document.getElementById("product-items");


export function displayProducts(productList) {
    productItems.innerHTML = "";
    productList.forEach(function (product, index) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${product.name} (${product.calories} калорий) 
            <button class="delete" data-index="${index}">Удалить</button`;
        productItems.appendChild(listItem);
    });
    updateSummary(productList);
    const chartsData = loadChartsData();
    updateChartDisplay(chartsData.consumedPercentage, chartsData.remainingPercentage);
}