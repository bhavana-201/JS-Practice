function change(){
    //console.log(document.readyState)
    switch(document.readyState){
        case 'loading' : 
            console.log('1. loading - document is still loading, and the HTML is still being parsed.');
            break
        case 'interactive' : 
            console.log("2. interactive - document's HTML has been completely loaded and parsed, and the DOM tree has been built.")
            break
        case 'complete' : 
            console.log("4. complete - The page is completely ready.")
            break;
    }
}
change();
for(let i =0; i<5; i++){
    console.log(i);
}

document.addEventListener("DOMContentLoaded", () => console.log("3. HTML IS PARSED AND DOM TREE IS COMPLETE "));
document.addEventListener('readystatechange',change);
//window.onbeforeunload = (e) => { alert("Do you want to close?")}

window.onload = (e) => console.log("window loaded from onload")