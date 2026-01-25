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

// Tag: nodeName and tagName
console.log(document.body.nodeName); //BODY
console.log(document.body.tagName); //BODY - exists only for element node 
console.log(document.tagName); //undefined as document is not an element
console.log(document.nodeName); //#document 

// innerHTML - allows to get html inside the element as a string
// only valid for element nodes
document.body.innerHTML = "The new <b>bold"

// outerHTML - contains the full HTML of the element.
console.log(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>

