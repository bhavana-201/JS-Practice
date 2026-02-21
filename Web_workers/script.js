const w = new Worker('./worker1.js', /* options */); //dedicated worker 

/* When a message is passed between the main thread 
and worker, it is copied or "transferred" (moved), not shared. */

/* .post(msg,[transfer/options])
postMessage() can only send a single object at once. 
msg = any value or JavaScript object, null/undefined if not needed
*/

w.postMessage({n : 10});

w.onmessage = (e) => {
    console.log("result => " + e.data)
}

// w.terminate();//kill that cutie 