const settings = {
    backgroundColor: "lightgreen",
    fontSize: "18px",
    content: "This a dynamic div",
};

function applySettings(settings) {

    const div = document.createElement('div');

    div.style.backgroundColor = settings.backgroundColor;
    div.style.fontSize = settings.fontSize;
    div.textContent = settings.content;

    document.body.appendChild(div);
}

applySettings(settings);