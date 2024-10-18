document.addEventListener("DOMContentLoaded", () => {
    const url = document.querySelector('[type="hidden"]').value;
    console.log(url);

    fetch(url)
        .then((response) => response.text())
        .then((code) => {
            document.querySelector("#code-display-js").innerHTML = code;
            Prism.highlightAll();
        });

    fetch(window.location.href)
        .then((response) => response.text())
        .then((code) => {
            document.querySelector("#code-display-html").textContent = code;
            Prism.highlightAll();
        });

    
    
});
