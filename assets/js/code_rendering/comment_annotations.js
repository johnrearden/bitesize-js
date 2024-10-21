document.addEventListener("DOMContentLoaded", () => {
    const url = document.querySelector('[type="hidden"]').value;

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

    const commentToggleButton = document.querySelector('.toggle-js');
    if (commentToggleButton) {
        commentToggleButton.addEventListener('click', () => {
            const comments = document.getElementsByClassName('comment');
            for (let comment of comments) {
                comment.classList.toggle('hide');
            }
    })}
});
