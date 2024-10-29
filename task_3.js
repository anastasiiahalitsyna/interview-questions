function updateContent() {

    const div = document.createElement('div');
    div.textContent = "Loading...";

    document.body.appendChild(div);

    setTimeout(() => {
        div.textContent = "Data loaded!";
    }, 2000); 
}


updateContent();

