
/*
-> resolves with response headers
let response = await fetch(url, options); 
-> read body as json
let result = await response.json(); 
*/

//1. GET req
fetch('https://randomuser.me/api')
.then((response) => {console.log(response); return response.json()})
.then((json) => {
    const arr = json.results[0];
    const name = arr.name.first +" "+ arr.name.last;
    console.log(name)
    console.log(arr.email)
}).catch(e => console.log("failed "+e));

//2. POST req
const res = fetch('https://jsonplaceholder.typicode.com/todos',{
    method: "POST",
    headers:{
        "Content-Type":"Application/json",
    },
    body: JSON.stringify({
        "userId":20,
        "id":4,
        "title": "post method todo",
        "completed": true,
    })
})
// res.then((resp) => resp.json())
//     .then((jsondata) => console.log(jsondata))
//     .catch(err => console.error(err))

const ans = await res.json();
console.log(ans)//{userId: 20, id: 201, title: 'post method todo', completed: true}
//3.
async function f(){
    try{
        const raw = await fetch('https://jsonplaceholder.typicode.com/users/876')
        
        if( !raw.ok)
            throw new Error('HTTP Error '+raw.status);
        const data = await raw.json();
        console.log(data);
    }
    catch(e){
        console.log(e)
    }
}
f();

//4. headers - auth token
async function af(){
    const sendreq = await fetch('https://reqres.in/api/users', {
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer fake-token-12345",
        },
    });
    const data = await sendreq.json();
    console.log(data);
}
af();

