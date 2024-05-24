import { products, saveChartsData } from "./data.js";


const totalCaloriesDisplay = document.getElementById("total-calories");
export const dailyGoalInput = document.getElementById("daily-goal");
const remainingCaloriesDisplay = document.getElementById("remaining-calories");
export let dailyGoal = parseInt(localStorage.getItem("dailyGoal")) || 0;




export function updateSummary(productList) {
    const totalCalories = (productList || products).reduce((total, product) => total + product.calories, 0);
    totalCaloriesDisplay.textContent = `Итого калорий: ${totalCalories}`;
    const remainingCalories = dailyGoal - totalCalories;
    remainingCaloriesDisplay.textContent = `Осталось калорий: ${remainingCalories}`;

    if (remainingCalories < 0) {
        const warningMessage = `Превышен дневной лимит на ${Math.abs(remainingCalories)} калорий!`;
        document.getElementById("calorie-warning").textContent = warningMessage;
        document.getElementById("warning").style.display = "block";
    } else {
        document.getElementById("calorie-warning").textContent = "";
        document.getElementById("warning").style.display = "none";
    }

    localStorage.setItem("products", JSON.stringify(products));
}

export function updateChart() {
    const totalCalories = products.reduce((total, product) => total + product.calories, 0);
    const remainingCalories = dailyGoal - totalCalories;

    const consumedBar = document.getElementById("consumed-bar");
    const remainingBar = document.getElementById("remaining-bar");

    const consumedPercentage = (totalCalories / dailyGoal) * 100;
    const remainingPercentage = (remainingCalories / dailyGoal) * 100;

    consumedBar.style.width = consumedPercentage + "%";
    remainingBar.style.width = remainingPercentage + "%";
}


export function clearChart() {
    const consumedBar = document.getElementById("consumed-bar");
    const remainingBar = document.getElementById("remaining-bar");

    consumedBar.style.width = "0%";
    remainingBar.style.width = "100%";
}


export function updateChartDisplay(consumedPercentage, remainingPercentage) {
    const consumedBar = document.getElementById("consumed-bar");
    const remainingBar = document.getElementById("remaining-bar");

    consumedBar.style.width = consumedPercentage + "%";
    remainingBar.style.width = remainingPercentage + "%";
}

dailyGoalInput.addEventListener("input", function () {
    dailyGoal = parseInt(dailyGoalInput.value) || 0;
    localStorage.setItem("dailyGoal", dailyGoal);
    updateSummary();
    clearChart();
    updateChart();
});