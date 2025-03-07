import { createComponent } from "./commoncomponent.js";

export default function aboutPage() {
  return createComponent({
    backgroundImage:
      "https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1741242111~exp=1741245711~hmac=ebe567942ff233d12b8f4e8cebf6f66eadd84e5f7ba3accbc4191a5411ebd2dc&w=1380",
    h1Text: "Contact Us for Orders ",
    h3Text: "10% Discount for preorders",
    h6Text: "Thank you for choosing us",
    buttonText: "Click Me",
  });
}
