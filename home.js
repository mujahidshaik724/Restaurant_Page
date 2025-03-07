import { createComponent } from "./commoncomponent.js";

export default function homePage() {
    return createComponent({
        backgroundImage: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?semt=ais_hybrid",
        h1Text: "Welcome To Food Heaven",
        h3Text: "Indian, Continental, Chinese",
        h6Text: "Built with JavaScript",
        buttonText: "Click Me",
    });
}
