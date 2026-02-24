function NoteTaker() {
    let status, timer, data;
    const ip = document.getElementById('ip_text');
    const span = document.getElementById('status');
    let id = `note_${crypto.randomUUID().slice(0, 6)}`;
    const btns = document.getElementById('div_btns');

    btns.addEventListener('click', (e) => {

        const btn = e.target.closest("button");
        if (btn) {
            const btn_name = btn.dataset.action;
            const data = ip.value.trim();

            switch (btn_name) {
                case 'save':
                    saveToCloud(id, data)
                    break;
                case "new_note":
                    id = `note_${crypto.randomUUID().slice(0, 6)}`;
                    ip.value = "";
                    break
                case "all_notes":
                    allNotes()
                    break;
            }
        }
    })

    ip.addEventListener('input', () => {
        data = ip.value.trim();
        if (data.length > 0)
            type(id, data)
    })

    function type(id, text) {
        if (data.length === 0) return;
        if (timer)//timer already exists
            clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(text);
            localStorage.setItem(id, text);
            span.innerHTML = "Saving..."
            saveToCloud(id, text);
        }, 2000)

    }

    function allNotes() {
        // console.log("in fn")
        const div = document.getElementById("output");
        div.innerHTML = "";
        const fragment = new DocumentFragment();
        Object.values(localStorage).forEach((note, ind) => {
            const p = document.createElement('p')
            p.innerText = `${ind + 1}. ${note}`;
            fragment.append(p);
        })
        div.appendChild(fragment);
    }

    async function saveToCloud(id, data) {
        try {
            if (data.length === 0) return;
            clearTimeout(timer);
            //localStorage.setItem(id, data);
            status = await helper();
            span.innerText = status;
            setTimeout(() => { span.innerText = "Save" }, 200)
        } catch (e) {
            status = "Error"
            span.innerText = status;
        }
    }

    function helper() {
        return new Promise((resolve, reject) => {
            setTimeout(() => { localStorage.setItem(id, data); resolve("Saved") }, 1000);
        })
    }
    return { type, saveToCloud, allNotes }


}


(function (root) {
    const UMT = new NoteTaker();
    root.UMT = UMT;
})(window);




