async function posts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) throw new Error(`error occured :${response.status}`)
        const json = await response.json();
        const div = document.getElementById("posts");
        console.log(json)//[{},{}]
        //create a div for each post
        const frag = new DocumentFragment();

        json.forEach(obj => {
            const { title, body } = obj;
            createPost({ title, body })
        })

        // div.append(frag);
    } catch (e) {
        console.log(e);
    }
}
const btns = document.getElementById('posts'); //current target
btns.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.tagName === 'BUTTON') {
        const name = btn.dataset.action;//the ele on which event has actually occured
        if (name === 'delete') {
            const parent_div = btn.parentElement;
            parent_div.remove();
        }
        else {
            btn.classList.toggle("with-like")
        }
    }
})


const frm = document.getElementById('form_id');
const post_btn = document.getElementById('post_btn');
frm.addEventListener('submit', (e) => {
    console.log("in event")
    e.preventDefault();
    const form = new FormData(e.target)
    const { title, body } = Object.fromEntries(form);
    createPost({ title, body })
    const ip_title = document.getElementById('title');
    ip_title.value = "";
    const ip_body = document.getElementById('body');
    ip_body.value = "";
})

frm.addEventListener('input', (e) => {
    //console.log(e.target)
    window.onbeforeunload = (e) => { console.log('alert'); e.preventDefault(); }
})

function createPost({ title, body }) {
    /* if incase post is there
    post code
    const req = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method : "POST",
                headers : {
                'Content-Type' : "application/json",
                //'authorization' : bearer token_nmae
                },
                body : JSON.stringify({title,body})
    })
     */

    const div = document.getElementById("posts");
    const frag = new DocumentFragment();
    const post_div = document.createElement("div")
    const p = document.createElement("p");
    const like_btn = document.createElement("button");
    const del_btn = document.createElement("button");

    post_div.classList.add("post")
    p.innerHTML = `${title} <br> ${body}`
    like_btn.innerText = '💗'
    del_btn.innerText = "🗑️"

    like_btn.setAttribute('type', 'button')
    del_btn.setAttribute('type', 'button')
    like_btn.setAttribute('data-action', 'like')
    del_btn.setAttribute('data-action', 'delete')


    frag.append(p)
    frag.append(like_btn);
    frag.append(del_btn)
    post_div.append(frag);
    div.prepend(post_div);
}

posts();

