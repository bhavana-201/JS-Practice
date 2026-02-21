
class User {
    constructor(){
        this.map = new Map(); 
    }

    w = new Worker("./worker.js");

    addUser({FN, LN, Jdate}){
            const id = (function generate_ID() { /*crypto.randomUUID()*/ return return_id })();
            const email = (function generate_Mail() { return return_email })();
            const pswd = (function generate_Pwsd() { return return_pswd })();
            send data to worker
    }

    removeUser(id) { send data to worker }
	updateUser(id, { }) { send data to worker }
	getUser(id) { send data to worker }
	getAllUsers() { req data from worker }
    
}

(function (root) { 
	// access to DB
	// ref
	const UMT = new User();
	root.UMT = UMT;
})(window);


//Worker.js

// create indexedDB 
// add objectStore 













/*
(function (root) { 
	// access to DB
	// ref
	const UMT = {
		addUser({ }) { },
		removeUser(id) { },
		updateUser(id, { }) { },
		getUser(id) { }
		getAllUsers() { }
	};
	root.UMT = UMT;
})(window)
*/




/*
    proper error handling
    remove repeating code -- imp
*/


const open = indexedDB.open("Users DB", 3);
open.onerror = function () {
    console.log("error occured!");
}
open.onupgradeneeded = (e) => {
    const db = e.target.result;
    const store = db.createObjectStore("User", {keyPath: "id"});
    const index = store.createIndex("id","id",{unique:true});
}
open.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction("User","readwrite");
        const store = tx.objectStore("User");

        onmessage = (e) => {
            const {type, data} = e.data;

            if(type === "addUser")
                addUser(store,data);

            else if(type === "update")
                updateUser(store,data);
            else if(type === "removeUser")
                removeUser(store,data.id);
            else if(type === "getUser")
                getUser(store,data.id)
            else if(type === "getAllUsers")
                getAllUsers()
            }
               
    }


function addUser(store,{id,FN, LN,Jdate, mail,pswd}){

    store.put({id,First_Name:FN, Last_Name:LN,Joining:Jdate, mail,pswd}); 
    postMessage("User added to database");
}

//data:{id,obj}
function updateUser(store,{id, obj}){
    const open = indexedDB.open("Users DB", 3);
    open.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction("User","readwrite");
        const store = tx.objectStore("User");
        const req = store.get(id);
        req.onsuccess = (e)=>{ 
            const res = e.target.result;
            Object.keys(obj).forEach(ele => res[ele] = obj[ele])
            store.put(res);
            postMessage("Data Updated successfully ");
        }    
    }
}

function removeUser(store,id){
    const open = indexedDB.open("Users DB", 3);
    open.onsuccess = (e) => {
       const db = e.target.result;
        const tx = db.transaction("User","readwrite");
        const store = tx.objectStore("User");
        store.delete(id);
    }

}

function getUser(store,id){
    const open = indexedDB.open("Users DB", 3);
    open.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction("User","readwrite");
        const store = tx.objectStore("User");
        const res = store.get(id);

        res.onsuccess = (e) => {
            const r = e.target.result
            postMessage(r);
        }
    }
    

}

function getAllUsers(store){
    
    const open = indexedDB.open("Users DB", 3);
    open.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction("User","readwrite");
        const store = tx.objectStore("User");
        const res = store.getAll();

        res.onsuccess = (e) => {
            const r = e.target.result
            postMessage(r);
        }
    }
}

// onmessage = (e) => {
//     const {type, data} = e.data;

//     if(type === "addUser")
//         addUser(data);

//     else if(type === "update")
//         updateUser(data);
//     else if(type === "removeUser")
//         removeUser(data.id);
//     else if(type === "getUser")
//         getUser(data.id)
//     else if(type === "getAllUsers")
//         getAllUsers()
       
// }
