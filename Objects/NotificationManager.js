const notificationManager = {
    notifications : [],
    addNotification(notification){
        const newnotification = {
            name : notification,
            id : Date.now(),
            status : "unread",
            timestamp : new Date(),
        }
        this.notifications.push(newnotification);
        return newnotification.id;
    },
    get getunread(){
        const res = this.notifications.filter(notObj => notObj.status === "unread")
        if (res.length === 0) return "no unread notifications"
        return res;
    },
    changeStatus(id,newstatus){
        if(newstatus !=="unread" && newstatus !== "read" ) 
            return "invalid status";
        const not = this.notifications.find( notobj => notobj.id === id);
        if(!not) return "id not found"
        not.status = newstatus;
        return "status changed";
    }

}
//notificationManager.addNotification("Bug Issue");
const taskid = notificationManager.addNotification("Setmore: Event Scheduled...")

console.log(notificationManager.getunread);

console.log(notificationManager.changeStatus(taskid,"read"));
console.log(notificationManager.changeStatus(taskid,"banana"));
console.log(notificationManager.getunread);