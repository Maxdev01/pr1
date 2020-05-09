const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const view = document.getElementById("view");
const chapter = document.getElementById("chapter");


one.addEventListener("click", () => {
        view.innerHTML = one.innerHTML;
    }
);