//ES6 Inheritance
import React from 'react'
import ReactDOM from 'react-dom'; 
// class Person{
//     constructor(nam,yob){
//         this.name=nam
//         this.yearOfBirth=yob
//     }

//     getDetails=()=>{
//       return `Name :${this.name} and Age:${2021-this.yearOfBirth}`
//     }
// }

// class Pilot extends Person{
//     constructor(name,yearOfBirth,exp,type,license){
//         super(name,yearOfBirth);
//         this.experience=exp
//         this.type=type
//         this.license=license

//     }
//     getData=()=>{
//         console.log( `${this.getDetails()} and experience ${this.experience} ,type ${this.type} and licence ${this.license}`
//         )

//     }
// }

// const john=new Pilot("john",1980,20,"Private Jet","TC1234")
// john.getData()

// $.get("http://jsonplaceholder.typicode.com/posts",(response)=>{
//     console.log(response)
//     $.get("http://jsonplaceholder.typicode.com/posts/1",(res)=>{
//         console.log(res)
//     })
// })

//axios.get("http://jsonplaceholder.typicode.com/posts")

const promiseList=new Promise((resolve,reject)=>{
    console.log("SENDING LIST CALL")
    $.get("http://jsonplaceholder.typicode.com/posts",(data)=>{
     resolve(data);
        }).fail(err=>{
            reject(new Error(`Request One  Failed with status ${err.status}`));
        })
})

const promiseDetails=(data)=>new Promise((resolve,reject)=>{
    console.log("SENDING DETAILS CALL")
    $.get(`http://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data)=>{
      resolve(data);
        }).fail(err=>{
            reject(new Error(`Request  Two Failed with status ${err.status}`));
        })
})

promiseList
.then(promiseDetails)
.then((response)=>{
    console.log("Then response =>",response)
})
.catch((error)=>{
    console.log("Call Failed")
    console.log("Catch Error =>",error)
})
