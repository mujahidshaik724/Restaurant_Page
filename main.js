import { createHeader } from "./headercomponent.js";
import { createFooter } from "./commonfooter.js";

const content = document.querySelector(".content");

// Function to dynamically load modules
function loadModule(modulePath) {
    import(modulePath)
        .then((module) => {
            let mainContent = document.querySelector(".main-content");
            if (!mainContent) {
                mainContent = document.createElement("div");
                mainContent.classList.add("main-content");
                const footer = document.querySelector("footer");
                if (footer) {
                    content.insertBefore(mainContent, footer);
                } else {
                    content.appendChild(mainContent);
                }
            }
            mainContent.innerHTML = "";
            if (module.default) {
                mainContent.appendChild(module.default());
            } else {
                console.error("Module does not have a default export.");
            }
        })
        .catch((error) => console.error(`Error loading module ${modulePath}:`, error));
}

// Ensure the content div exists before proceeding
if (content) {
    const header = createHeader(loadModule);
    content.appendChild(header);

    loadModule("./home.js");

    const footer = createFooter();
    content.appendChild(footer);
} else {
    console.error("Content div not found in the DOM.");
}
