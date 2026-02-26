function User() {
    const requests = new Map();
    let counter = 0;

    //form logic
    const form_data = document.getElementById('userForm');
    form_data.addEventListener('submit', (e) => {
        e.preventDefault();// stops the browser sending form to server + page refresh
        const data = new FormData(e.target);
        const finalData = Object.fromEntries(data.entries())
        console.log({ ...finalData });
        addUser(finalData)
    })
    //update logic
    const update_btn = document.getElementById('update');
    update_btn.addEventListener('click', (e) => {
        //e.stopImmediatePropagation();
        const data = new FormData(form_data);
        const finalData = Object.fromEntries(data.entries())
        const id = finalData.id;
        updateUser(id, { ...finalData });
    })

    //search logic
    const search = document.getElementById("user-search");
    const btn = document.getElementById("search-btn")
    btn.addEventListener('click', () => {
        const data = search.value.trim()
        if (data.length < 1) return;
        getUser(data)
    })

    //get all users
    const all_btn = document.getElementById("allUsers-btn")
    all_btn.addEventListener('click', () => {
        getAllUsers();
    })

    //status div
    const status = document.getElementById("status");

    const worker = new Worker('./worker1.js');
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
            }, 5000);


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
        } catch (e) { status_handle(e) }
    }

    async function removeUser(id) {
        try {
            return await helper("removeUser", { id });
        } catch (e) { status_handle(e) }
    }

    function userCard(obj) {
        const html_op = document.getElementById("user-output");
        const div = document.createElement("div");
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

    async function getAllUsers() {
        try {
            const op = await helper("getAllUsers", {});
            const html_op = document.getElementById("user-output");
            html_op.innerText = "";
            op.forEach(obj => userCard(obj));
        } catch (e) { status_handle(e) };
    }
    function status_handle(e) {
        status.innerText = e;
        status.removeAttribute("hidden")
        setTimeout(() => {
            status.setAttribute("hidden", "")
        }, 800)
    }

    return { addUser, updateUser, removeUser, getUser, getAllUsers };

}

(function (root) {
    const UMT = new User();
    root.UMT = UMT;
})(window)





