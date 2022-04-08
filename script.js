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

// Ex.2
fetch('https://reqres.in/api/users')
    .then(res => console.log(res) )

// Ex. 3
fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))

// Ex. 4 
fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))

// Ex. 5
fetch('https://reqres.in/api/users/23')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))

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