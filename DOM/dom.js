// Constructor - new Document() - creates a new document object
const d = new Document()

//topmost tree nodes
console.log(document.documentElement); //<html><head></head><body></body></html>
console.log(document.body)//<body></body>
console.log(document.head)//<head></head>

//parent and siblings
console.log(document.body.parentNode); //<html><head></head><body></body></html>
console.log(document.body.previousSibling)//<head></head>
console.log(document.head.nextSibling)//<body></body>

// element navigation - return only the element node - no text or comment
console.log(document.body.previousElementSibling)//<head></head>
console.log(document.head.nextElementSibling) //<body></body>
console.log(document.documentElement.parentElement) //null

console.log(document.URL) // about:blank


console.log(d.URL) // about:blank

// Instance Properties

