export default class MessageService {


 getAllMessages() {
    const request = new XMLHttpRequest();
    return new Promise(function (resolve, reject){
    // Setup our listener to process completed requests
    request.onload = function(){
        // Process the response
        if (request.status >= 200 && request.status < 300){
            const threads = JSON.parse(request.responseText);             // 'This is the returned text.'
            resolve(threads);
        } else {
                reject({
                    status: request.status,
                    statusText: request.statusText // An error occurred the request.
                });
             }
       };

        request.open("GET", "http://zipcode.rocks:8085/messages");

        request.send();
    })

    }

 createNewMessage(message) {
    const request = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {
        // Setup our listener to process completed requests
        request.onload = function () {
            // Process the response
            if (request.status >= 200 && request.status < 300){
                // If successful
                resolve(JSON.parse(request.responseText));
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
     };

     request.open("POST", "http://zipcode.rocks:8085/ids/tfitru/messages");

     request.send(JSON.stringify(message));


     })
  }
}