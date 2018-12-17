//1.create an array which have two object
//2.objects will have 2 properties (title and body)
//3.create function1 to see titles(1second delay)
//4.create function2 to add new object(2second delay)

var DenverPost = [
    {title:"post one", body:"body one"},
    {title:"post two", body:"body two"},
];

function displayTitles() {
setTimeout(x=> {
    for(let i of DenverPost) {
        console.log(i.title)
    }
}, 1000)
}


function createNewPost(newPost) {
    return new Promise(function(resolve, reject) {
        setTimeout(y=> {
    DenverPost.push(newPost);
            let error = true;
            if(!error) {
                resolve("good job");
            } else {
                reject("Houston! We have a problem!")
            }
    })

    

}, 2000)
}

createNewPost({title:"post three", body:"body three"}). then(displayTitles); 