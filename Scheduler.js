const schedule = {
    operations : new Map(),
     scheduleOperation(cb, time){
        const scheduleop = {
            id : Math.floor(Math.random() * Date.now()),
            callback: cb,
            notify : setTimeout(cb,time),
            timer : time,
            createdAt: Date.now();
            cancel: this.cancelfn,
        }
        this.operations.set(scheduleop.id, scheduleop);
        return { id:scheduleop.id, cancelfn: this.cancelfn}
    },
    getAllScheduledOperations(){
        for(let op of this.operations){
             console.log(op)
        }
    },
    getScheduledOperationByID(ID){
        const op = this.operations.get(ID);
        return {callback:op.callback, time:op.timer, cancelfn:op.cancel}
    },
    
}

schedule.scheduleOperation(()=>alert("setmore notification"), 1000)
schedule.getAllScheduledOperations()

