//Setup Test
console.log("hello");

/*
Syntax:
            fetch(input: RequestInfo,
                init?: RequestInit):
                Promise<Response>

this is a fake api
    which will give us back fake data
            this gives us all the users inside the api
fetch('https://reqres.in/api/users', {                                  1. first property is a URL
                                                                                          2.  All the different option that you'd want to pass to it
})                                                                                              (optional)

*/
// Ex.1
console.log(fetch('https://reqres.in/api/users'))
// Returns "Promise {<pending>}"

//Fetch is promised based
    // which means that we can use async await
        // or .then or .catch with it

fetch('https://reqres.in/api/users')
    .then(res => console.log(res) )

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))

// Lets say we want to get info on a single user
    // in this example, user 23- which does not exsist 
fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))
// returns a 404 error
    // you would think that since we have a 404 error
        // it would endup in a catch statement- like:
    .catch(error => console.log(ERROR))
            // but we are not getting any ERROR text
                // this is bc fetch will always work
                    // except if you have no internet signal
                        // fetch always succeeds unless there is something wrong with the fetch itself
                            // not with the API it is calling
// Ex. 6
fetch('https://reqres.in/api/users/23')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(ERROR)) 

// Ex. 7
fetch('https://reqres.in/api/users/')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log("Not Successful")
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(ERROR)) 

// Ex. 8
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    body: {
        name: "User1"
    }
}).then(res => {
       return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR")) 

// Ex. 9
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    body: JSON.stringify ({
        name: "User1"
    }) 
}).then(res => {
       return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR")) 

 // Ex. 10
fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
        "Content-Type": "application/JSON"
    },
    body: JSON.stringify ({
        name: "User1"
    }) 
}).then(res => {
       return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log("ERROR")) 