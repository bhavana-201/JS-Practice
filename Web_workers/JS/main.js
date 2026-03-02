const requests = new Map();
let counter = 0;
let alreadyLoading = false;
//form logic
function form() {
    const form_data = document.getElementById('userForm');
    if (!form_data) return;
    form_data.addEventListener('submit', (e) => {
        e.preventDefault();// stops the browser sending form to server + page refresh
        const btn_name = e.submitter.name;
        const data = new FormData(e.target);
        const finalData = Object.fromEntries(data.entries())

        if (btn_name === 'newUser_btn') {
            console.log({ ...finalData });
            addUser(finalData)
        }
        else {
            const id = finalData.id;
            updateUser(id, { ...finalData });
        }

    })


}
form();
//random users
function random() {
    const random = document.getElementById('random_users');
    if (!random) return;
    random.addEventListener('click', async () => {
        try {
            console.log('btnn clickde')
            const response = await fetch(`https://dummyjson.com/users?limit=100`);
            const result = await response.json();
            console.log(result.users)
            result.users.forEach(obj => {
                const { firstName, lastName, birthDate } = obj;
                addUser({ First_Name: firstName, Last_Name: lastName, Joining: birthDate })
            })
        } catch (e) {
            console.log(e)
        }
    })
}
random()
//status div
const status = document.getElementById("status");

const worker = new Worker('../worker1.js');
worker.onmessage = receive;
async function addUser({ First_Name, Last_Name, Joining }) {

    const mail = (() => {
        return `${First_Name + Last_Name}@gmail.com`;
    })();
    const id = (() => {
        return `U${crypto.randomUUID().slice(2, 6)}`;
    })();

    const pswd = (() => {
        return crypto.randomUUID().slice(0, 8);
    })();
    const data = { id, First_Name, Last_Name, Joining, mail, pswd };
    try {
        const op = await helper("addUser", data);
        status_handle(op)
    } catch (e) { status_handle(e) }
}


async function updateUser(id, obj) {
    console.log("updating user...");
    try {
        const op = await helper("update", { id, obj });
        status_handle(op)
    } catch (e) { status_handle(e) }

}

function helper(type, data) {
    const req_id = `id${counter++}`
    return new Promise((resolve, reject) => {
        requests.set(req_id, ({ result, error }) => {
            if (error)
                return reject(error)
            resolve(result);
        })
        worker.postMessage({ type, req_id, data: { ...data } })
        setTimeout(() => {
            requests.delete(req_id);
            reject("timer expired");
        }, 100000);


    })

}
function receive(e) {
    const { req_id, result, error } = e.data
    if (requests.has(req_id)) {
        let fn = requests.get(req_id)
        fn({ result, error });
        requests.delete(req_id);
    }
}

async function getUser(id) {
    try {
        const op = await helper("getUser", { id });
        const html_op = document.getElementById("user-output");
        html_op.innerText = "";
        userCard(op);
        // html_op.firstChild.classList.add('show');
    } catch (e) { console.log(e); status_handle(e) }
}

async function removeUser(id) {
    try {
        return await helper("removeUser", { id });
    } catch (e) { status_handle(e) }
}

function userCard(obj) {

    const html_op = document.getElementById("user-output");
    const div = document.createElement("div");
    div.classList.add('user')
    const frag = new DocumentFragment()
    const del = document.createElement('button');
    del.innerText = "DELETE"
    del.classList.add("del_btn");
    del.setAttribute("id", `${obj.id}`)

    for (let ele of Object.keys(obj)) {
        const p = document.createElement("p");
        p.innerText = `${ele} : ${obj[ele]}`
        div.append(p)
    }
    div.appendChild(del);
    frag.appendChild(div);
    html_op.appendChild(frag)
    del.addEventListener('click', () => {
        const id = del.getAttribute("id");
        console.log(id)
        div.remove();
        removeUser(id);
    })
}

const observe = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        if (!alreadyLoading)
            getAllUsers(10);
        else return;
    }
}, { rootMargin: '20px', threshold: 0.5 })

observe.observe(document.getElementById('load'))

async function getAllUsers(limit) {
    try {
        console.log(limit)
        alreadyLoading = true;//!false = true
        const op = await helper("getAllUsers", { limit });
        // const html_op = document.getElementById("user-output");
        op.forEach(obj => {
            userCard(obj)
        });

    } catch (e) { status_handle(e) } finally { alreadyLoading = false }
}

function status_handle(e) {
    status.innerText = e;
    status.removeAttribute("hidden")
    setTimeout(() => {
        status.setAttribute("hidden", "")
    }, 20000)
}

//return { addUser, updateUser, removeUser, getUser, getAllUsers };

export { getUser, getAllUsers }
// (function (root) {
//     const UMT = new User();
//     root.UMT = UMT;
// })(window)





