/*
    proper error handling
    Batch operations 
*/

(async () => {  
    const { Dexie } = await import('https://unpkg.com/dexie/dist/modern/dexie.mjs');

    try{
        const db = await new Dexie("Users Database");
        db.delete({disableAutoOpen: false}); 
        db.version(1).stores({
            Users:"id, mail"
        });
        onmessage = (e) => {
        const {type, req_id, data} = e.data;
        if(type === "addUser")
            addUser(req_id,data);
        else if(type === "update")
            updateUser(req_id,data);
        else if(type === "removeUser")
            removeUser(req_id,data.id);
        else if(type === "getUser")
            getUser(req_id,data.id)
        else if(type === "getAllUsers")
            getAllUsers(req_id)
        
        }
        async function addUser(req_id,{id,First_Name, Last_Name,Jdate, mail,pswd}){
            //console.log({id,FN, LN,Jdate, mail,pswd})
            try{
                const arr = await db.Users.where("mail").equals(mail).toArray() //prm resolve - undef
                if(arr.length>0)//undefined = doesnt exist
                throw new Error("user already exists");
                await db.Users.add({id,First_Name, Last_Name,Joining:Jdate, mail,pswd});
                postMessage({type:"addUser",result:"User added successfully",req_id})
            }  
            catch(err){
            
                postMessage({type:"addUser",error : err.message,req_id})
            }
        }

        async function updateUser(req_id,{id, obj}){
            try{
                const update = await db.Users.update(id,{...obj})
                if(!update)// 1 = updated
                    throw new Error("id not found")
                postMessage({type:"updateUser",result:"updated successfully",req_id})    
            }catch(e){
                postMessage({type:"updateUser",error:e.message,req_id})
            }
        }
        async function removeUser(req_id,id){
            //returns undefined no matter what(user exists or not) so we need to check if user exists before deleting
            try{
                const del =  await db.Users.delete(id);
                console.log(del)
                postMessage({type:"removeUser",result:"user deleted",req_id})
            }
            catch(err){
                postMessage({type:"removeUser",error:"id is not valid",req_id})
            }
        }

        async function getUser(req_id,id){
            try{
                const res = await db.Users.get(id); //returns undefined
                
                if(res === undefined)
                    return new Error("User not found!")
                postMessage({type:"getUser",result:res,req_id})
                        
            }catch(e){
                postMessage({type:"getUser",error:e.message,req_id})
            }
                    
        }
        async function getAllUsers(req_id){
            try{
                const res = await db.Users.toArray();
                postMessage({type:"getAllUsers",res ,req_id })

            }catch(e){
                postMessage({type:"getAllUsers",error:e.message,req_id})
            }  
        }
    }
    catch(e){
        postMessage()
    }

//created a store with mail index 

})();

