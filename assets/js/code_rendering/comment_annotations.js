document.addEventListener("DOMContentLoaded", () => {

    const url = document.querySelector('[type="hidden"]').value;
    console.log(url);

    fetch(url)
            .then((response) => response.text())
            .then((code) => {
                document.querySelector('#code-display').innerHTML = code;
                Prism.highlightAll();
            });
});
