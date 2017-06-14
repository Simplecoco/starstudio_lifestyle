/**
 * Created by SimpleCoco on 2017/6/7.
 */
// class Ajax {
//     constructor(){
//         super();
//         this.proms=this.proms.bind(this);
//         this.xhr = new XMLHttpRequest();
//     }
//     proms(url){
//         this.promise = new Promise((resolve,reject)=>{
//         xhr.open("GET",url);
//         xhr.onreadystatechange = this.handler;
//         xhr.responseType = "json";
//         xhr.setRequestHeader("Accept","application/json");
//         xhr.send();
//         });
//     }
//     handler(){
//         if(this.xhr.readyState !== 4){
//
//         }
//         if(this.xhr.readyState === 200){
//             resolve(this.xhr.response);
//         }
//         else{
//             reject(new Error(this.xhr.statusText));
//         }
//     }
// }

var get = function(url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
};



// let promise = new Promise();

// let get = new Ajax();

export {get};