import { getUser, getAllUsers } from '../JS/main.js'
//search logic
const search = document.getElementById("user-search");
const btn = document.getElementById("search-btn")
const status = document.getElementById("status");

function user() {
    btn.addEventListener('click', () => {
        const data = search.value.trim()
        getUser(data);
    })
}
user()


//get all users
const all_btn = document.getElementById("allUsers-btn")
all_btn.addEventListener('click', () => {
    getAllUsers(10);
})


