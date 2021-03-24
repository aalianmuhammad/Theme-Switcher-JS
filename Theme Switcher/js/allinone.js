const button = document.querySelector(".light-off");
console.log(button);
let changeHandler = function () {
    const elements = document.querySelectorAll(
        "body, h1, h2, h3, h4, .normal-text, card, container"
    );
    for (let i = 0; i < elements.length; i++);{
        const element = elements[i];
        element.classList.toggle("theme-dark");
    }
}

function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}
