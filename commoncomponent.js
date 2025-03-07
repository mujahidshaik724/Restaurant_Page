export function createComponent({
    backgroundImage,
    h1Text,
    h3Text,
    h6Text,
    buttonText,
}) {
    const container = document.createElement("div");
    container.classList.add("component");
    container.style.backgroundImage = `url(${backgroundImage})`;
    container.style.opacity="0.9"
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.padding = "20px";

    const h1 = document.createElement("h1");
    h1.textContent = h1Text;

    const h3 = document.createElement("h3");
    h3.textContent = h3Text;

    const h6 = document.createElement("h6");
    h6.textContent = h6Text;

    const button = document.createElement("button");
    button.textContent = buttonText;
    button.style.padding = "10px 20px";
    button.style.cursor = "pointer";

    container.appendChild(h1);
    container.appendChild(h3);
    container.appendChild(h6);
    container.appendChild(button);

    return container;
}
