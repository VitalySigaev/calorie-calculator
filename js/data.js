import { displayProducts } from "./display.js";
import { clearChart } from "./update.js";


export let products = JSON.parse(localStorage.getItem("products")) || [];

export function clearData() {
    products = [];
    localStorage.removeItem("products");
    displayProducts([]);
    clearChart();
}

export function saveChartsData(consumedPercentage, remainingPercentage) {
    const chartsData = {
        consumedPercentage: consumedPercentage,
        remainingPercentage: remainingPercentage
    };
    localStorage.setItem("chartsData", JSON.stringify(chartsData));
}

export function loadChartsData() {
    const chartsData = JSON.parse(localStorage.getItem("chartsData"));
    if (chartsData) {
        return chartsData;
    }
    return { consumedPercentage: 0, remainingPercentage: 100 };
}
