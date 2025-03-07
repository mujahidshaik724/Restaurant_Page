export function createHeader(loadModule) {
    const header = document.createElement("header");
    header.classList.add("header");

    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const buttons = [
        { className: "home", text: "Home", module: "./home.js" },
        { className: "about", text: "About", module: "./about.js" },
        { className: "contact", text: "Contact", module: "./contact.js" },
    ];

    buttons.forEach((buttonData) => {
        const button = document.createElement("button");
        button.className = buttonData.className;
        button.textContent = buttonData.text;

        button.addEventListener("click", () => {
            loadModule(buttonData.module);

            document.querySelectorAll(".nav button").forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });

        nav.appendChild(button);
    });

    header.appendChild(nav);

    return header;
}
