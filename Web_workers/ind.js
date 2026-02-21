/*
    
    const set = new Set(); dupl check
*/

function User(){
   const requests = new Map();
   let counter = 0;
    //form logic
    const form_data = document.getElementById('userForm');

    form_data.addEventListener('submit',(e) => {
        e.preventDefault();// STOPs the page refresh
        const data = new FormData(e.target);
        const finalData = Object.fromEntries(data.entries())
        
        console.log({...finalData});
        addUser(finalData)
    })

    const search = document.getElementById("search");
    search.addEventListener('')

    const worker = new Worker('./worker1.js');
    worker.onmessage = receive;
    async function addUser({First_Name, Last_Name, Jdate}){
        const mail = (() => {
            return `${First_Name + Last_Name}@gmail.com`;
        })();
        const id = (() => { 
            return `U${crypto.randomUUID().slice(2,6)}`;
        })();

        const pswd = (() => {
            return crypto.randomUUID().slice(0,8);
        })();
        const data = {id,First_Name, Last_Name, Jdate, mail,pswd};
        try{
            const op = await helper("addUser",data);
            console.log(op) 
        }catch(e){console.log(e)}
    }
    
    async function updateUser(id, obj){
        console.log("updating user...");
        try{
            const op = await helper("update",{id,obj});
            console.log(op)     
        }catch(e){console.log(e)}
       
    }

    function helper(type,data){

        const req_id = `id${counter++}`
        return new Promise((resolve,reject) => {
            requests.set(req_id, ({result,error}) => {
                if(error)
                    return reject(error)
                resolve(result);
            })
            worker.postMessage({type,req_id,data:{...data}})
            setTimeout(()=>{
                requests.delete(req_id);
                reject("timer expired");
            },5000);
           
            
        })
        
    }
    function receive(e) {
        const {req_id,result,error} = e.data
        if(requests.has(req_id)){
                let fn = requests.get(req_id)
                fn({result,error});
                requests.delete(req_id);
        }
    }  


    async function getUser(id){
        console.log("Retrieving user...");
        try{
        const op = await helper("getUser",{id});
        console.log(op)  
        }catch(e){console.log(e)}
    }

    async function removeUser(id) {
        console.log("Deleing user...");
        try{
            const op = await helper("removeUser",{id});
            console.log(op);
        }catch(e){console.log(e)}
    }

    async function getAllUsers() {
        console.log("All users...");
        try{
            const op = await helper("getAllUsers",{});
            console.log(op);
        }catch(e){console.log(e)};
    }

    return {addUser,updateUser,removeUser,getUser,getAllUsers};
    
}

(function (root){
    const UMT = new User();
    root.UMT = UMT;
})(window)





