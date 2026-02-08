/* What It Does:

Input box where you type a GitHub username
As you type, it searches GitHub's API (but waits 500ms after you stop typing - that's debouncing)
Shows the user's profile pic, name, and bio
Shows a loading spinner while fetching
Shows an error if user not found */

// 1. Get the input element
// 2. Add an event listener for 'input' event
// 3. When user types, call searchUser(username)

const userInput = document.getElementById('searchInput');
const div = document.getElementById('result');
const error = document.getElementById('error')
let timerId;
userInput.addEventListener('input',() => {
    clearTimeout(timerId)
    console.log(userInput.value)
    timerId = setTimeout(() => {
        div.innerHTML ="";
        error.innerHTML ="";
        searchUser(userInput.value)
    },500)
})


async function searchUser(username) {
    // Show loading, hide error and result 
    const load = document.getElementById('loading');
    load.classList.remove('hidden');
    try {
        // Fetch from: https://api.github.com/users/${username}
        // Parse JSON
        // Call displayUser(data)
        const raw = await fetch(`https://api.github.com/users/${username}`);
        if(!raw.ok)
            throw new Error('User not Found');
        const data = await raw.json();
        displayUser(data);
        load.classList.add('hidden');
        
    } catch (error) {
        // Call showError('User not found')
        load.classList.add('hidden');
        showError('User not Found');
    }
}
//result, img, user info h2 p
function displayUser(user) {
    // Show user's avatar_url, name (or login), and bio
    error.classList.add('hidden');
    div.classList.add('user-info')
    div.classList.remove('hidden');
    const img = document.createElement('img');
    img.setAttribute('src',user.avatar_url);
    

    const h2 = document.createElement('h2');
    h2.textContent = user.name;
   

    const p = document.createElement('p');
    p.textContent = user.bio;
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
}

function showError(message) {
    // Show error message
    div.classList.add('hidden');
    error.classList.remove('hidden');
    const msg = document.createElement('p');
    msg.textContent = message;
    error.appendChild(msg);
}