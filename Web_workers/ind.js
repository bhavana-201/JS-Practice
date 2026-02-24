function User() {
    const requests = new Map();
    let counter = 0;

    //form logic
    const form_data = document.getElementById('userForm');
    form_data.addEventListener('submit', (e) => {
        e.preventDefault();// STOPs the page refresh
        const data = new FormData(e.target);
        const finalData = Object.fromEntries(data.entries())
        console.log({ ...finalData });
        addUser(finalData)
    })
    //update logic
    const update_btn = document.getElementById('update');
    update_btn.addEventListener('click', () => {
        const data = new FormData(form_data);
        const finalData = Object.fromEntries(data.entries())
        const id = finalData.id;
        updateUser(id, { ...finalData });
    })

    //search logic
    const search = document.getElementById("user-search");
    const btn = document.getElementById("search-btn")
    btn.addEventListener('click', () => {
        console.log("working")
        getUser(search.value)
    })

    //get all users
    const all_btn = document.getElementById("allUsers-btn")
    all_btn.addEventListener('click', () => {
        getAllUsers();
    })

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
            alert(op)
        } catch (e) { console.log(e) }
    }


    async function updateUser(id, obj) {
        console.log("updating user...");
        try {
            const op = await helper("update", { id, obj });
            alert(op)
        } catch (e) { alert(e) }

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
        //console.log("Retrieving user...");
        try {
            const op = await helper("getUser", { id });
            console.log(op)

            const html_op = document.getElementById("user-output");
            html_op.removeAttribute('hidden')
            html_op.innerText = "";
            const del = document.createElement('button');
            del.innerText = "DELETE"
            del.classList.add("del_btn");
            del.setAttribute("id", `${op.id}`)

            const frag = new DocumentFragment()
            for (let ele of Object.keys(op)) {

                const p = document.createElement("p");

                p.innerHTML = `${ele} : ${op[ele]}`

                frag.appendChild(p);
            }
            html_op.appendChild(frag)
            html_op.appendChild(del)
            del.addEventListener('click', () => {
                const id = del.getAttribute("id");
                console.log(id)
                removeUser(id);
            })
        } catch (e) { console.log(e) }
    }

    async function removeUser(id) {

        console.log("Deleing user...");
        try {
            const op = await helper("removeUser", { id });
            console.log(op);
            const html_op = document.getElementById("user-output");
            html_op.innerText = "";

        } catch (e) { console.log(e) }
    }

    async function getAllUsers() {
        try {
            console.log("All users...");
            const op = await helper("getAllUsers", {});
            const frag = new DocumentFragment(); // i dont think i need htis because im
            const html_op = document.getElementById("user-output");
            html_op.removeAttribute('hidden')
            html_op.innerText = "";//clear past data
            op.forEach(obj => {
                const div = document.createElement("div");
                console.log(Object.entries(obj))
                Object.entries(obj).forEach((arr) => {
                    const p = document.createElement("p");
                    p.innerText = `${arr.join(" : ")}`
                    div.append(p)
                })
                frag.append(div);
            })
            html_op.append(frag)


        } catch (e) { console.log(e) };
    }

    return { addUser, updateUser, removeUser, getUser, getAllUsers };

}

(function (root) {
    const UMT = new User();
    root.UMT = UMT;
})(window)





