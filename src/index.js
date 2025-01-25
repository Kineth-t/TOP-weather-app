import "./style.css";
import { search } from "./modules/search.js";
import weatherIcon from "./images/day-forecast-hot-svgrepo-com.svg";

const weatherImgElement = document.querySelector(".logo");
weatherImgElement.src = weatherIcon;


const apiKey = process.env.API_KEY;
console.log("API Key:", apiKey);

const mainBody = document.querySelector(".mainBody");
document.addEventListener('DOMContentLoaded', () => {
    const searchSubmitButton = document.querySelector(".searchSubmit");

    searchSubmitButton.addEventListener("click", (e) => {
        console.log("Button pressed");
        e.preventDefault(); // Prevent form submission
        search(); // Trigger the search function
    });
});
