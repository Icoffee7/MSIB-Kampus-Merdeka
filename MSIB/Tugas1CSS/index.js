const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Profile";
    }, 0);
    setTimeout(() => {
        text.textContent = "Experience";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Contact";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);
