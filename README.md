# Restaurant_Page which is a a basic page for SPAs (Single page Application)

## Okey lets understand the main.js file

Root (Script Execution)
│
├── Import Modules
│   ├── headercomponent.js → createHeader()
│   ├── commonfooter.js → createFooter()
│
├── Select Content Container
│   └── document.querySelector(".content")
│
├── Function: loadModule(modulePath)
│   ├── Dynamically Import Module
│   │   ├── import(modulePath)
│   │   ├── If success → Get default export
│   │   ├── If failure → Log error
│   │
│   ├── Check for Existing `.main-content`
│   │   ├── If exists → Use it
│   │   ├── If not → Create `<div class="main-content">`
│   │
│   ├── Insert Content
│   │   ├── Clear previous `.main-content`
│   │   ├── Append module’s default export
│   │
│   ├── Place `.main-content` in `.content`
│       ├── Before footer (if exists)
│       ├── Otherwise, at the end
│
├── Initialize Page Content
│   ├── If `.content` exists:
│   │   ├── Create & append header (`createHeader(loadModule)`)
│   │   ├── Load initial module (`loadModule("./home.js")`)
│   │   ├── Create & append footer (`createFooter()`)
│   │
│   ├── Else → Log error: "Content div not found in the DOM"


How It Works
The script imports header and footer components.
It selects the .content container where everything will be placed.
It defines loadModule() to dynamically load and display modules inside .main-content.
It initializes the page by:
Creating the header
Loading the default home module
Adding the footer

## Lets understand the header.js file in detail :

createHeader(loadModule)
│
├── Create <header> Element
│   ├── Add class "header"
│
├── Create <nav> Element
│   ├── Add class "nav"
│
├── Define Buttons Array
│   ├── Home Button → { class: "home", text: "Home", module: "./home.js" }
│   ├── About Button → { class: "about", text: "About", module: "./about.js" }
│   ├── Contact Button → { class: "contact", text: "Contact", module: "./contact.js" }
│
├── Loop Through Buttons
│   ├── Create <button>
│   │   ├── Set class from buttonData.className
│   │   ├── Set text from buttonData.text
│   │
│   ├── Add Click Event Listener
│   │   ├── Call loadModule(buttonData.module)
│   │   ├── Remove "active" class from all buttons
│   │   ├── Add "active" class to clicked button
│   │
│   ├── Append <button> to <nav>
│
├── Append <nav> to <header>
│
└── Return <header>

Creates a <header> element and assigns it a class "header".
Creates a <nav> element and assigns it a class "nav".
Defines an array of button data for "Home", "About", and "Contact", each linked to a module.

Loops through the array:

Creates a <button> element.
Sets class name and text based on the button data.

Adds an event listener to:

Load the corresponding module using loadModule(modulePath).
Highlight the active button by adding the "active" class.
Appends the <nav> to <header>.
Returns the fully constructed <header> element.



## the other are the reusable compoent
which i created in the commoncomponent.js
and the footer component if we want we can use it in the multiple places