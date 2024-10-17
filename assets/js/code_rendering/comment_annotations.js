document.addEventListener("DOMContentLoaded", () => {
    const allComments = document.getElementsByClassName("comment");
    const annotationModal = new bootstrap.Modal("#annotation");

    for (let comment of allComments) {
        fetch("assets/js/hex_converter.js") // Fetches the raw HTML of the page
            .then((response) => response.text())
            .then((html) => {
                console.log(html); // Logs the raw HTML of the entire page
            });

        comment.addEventListener("click", () => {
            const key = comment.innerText.slice(0, 10) + "*";
            console.log(key);
            const html = document.getElementById(key).children[1].innerHTML;
            const title = document.getElementById(key).children[0].innerText;

            const modalBody = document.querySelector(".modal-body");
            modalBody.innerHTML = html;

            const modalTitle = document.querySelector(".modal-title");
            modalTitle.innerText = title;
            annotationModal.show();

            comment.appendChild(htmlDiv);
        });
    }
});
