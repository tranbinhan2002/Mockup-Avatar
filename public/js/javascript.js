const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});
optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});




const selectedYear = document.querySelector(".selected-year");
const optionsContainerYear = document.querySelector(".options-container-year");
const optionsListYear = document.querySelectorAll(".option-year");

selectedYear.addEventListener("click", () => {
    optionsContainerYear.classList.toggle("active");
});
optionsListYear.forEach(o => {
    o.addEventListener("click", () => {
        selectedYear.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerYear.classList.remove("active");
    });
});