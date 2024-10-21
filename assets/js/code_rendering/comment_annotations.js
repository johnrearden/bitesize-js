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

    const commentToggleButton = document.querySelector('.toggle-js');
    console.log(commentToggleButton);
    if (commentToggleButton) {
        console.log('adding event listener to toggle-js button');
        commentToggleButton.addEventListener('click', () => {
            const comments = document.getElementsByClassName('comment');
            for (let comment of comments) {
                console.log('hiding')
                
                comment.classList.toggle('hide');
            }
            
    })}

    
    
});
