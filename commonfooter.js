export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.style.padding = "20px";
    footer.style.backgroundColor = "#333";
    footer.style.color = "#fff";
    footer.style.textAlign = "center";

    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer-container");

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "Contact us: +1 234 567 890 | email@example.com";
    footerContainer.appendChild(contactInfo);

    const socialMedia = document.createElement("div");
    socialMedia.classList.add("social-media");

    const socials = [
        { href: "#", text: "Facebook" },
        { href: "#", text: "Twitter" },
        { href: "#", text: "Instagram" },
    ];

    socials.forEach(({ href, text }) => {
        const link = document.createElement("a");
        link.href = href;
        link.textContent = text;
        link.style.color = "#fff";
        link.style.margin = "0 10px";
        link.style.textDecoration = "none";
        socialMedia.appendChild(link);
    });

    footerContainer.appendChild(socialMedia);

    const copyright = document.createElement("p");
    copyright.textContent = "© 2025 Your Restaurant. All rights reserved.";
    footerContainer.appendChild(copyright);

    footer.appendChild(footerContainer);

    return footer;
}
