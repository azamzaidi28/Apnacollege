//for loop
let a = [1,2,3,4,5]
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element)
    
}
// output 1 2 3 4 5


//for each loop

let b = [1,2,3,4,5]

b.forEach((value, index, b)=> {
    console.log(value,index,b)
})

/* value      index       b
    1          0          1 2 3 4 5    
    2          1          1 2 3 4 5   
    3          2          1 2 3 4 5   
    4          3          1 2 3 4 5   
    5          4          1 2 3 4 5   
*/

// for in loop

// create object

let obj = {
    name : "Azam Zaidi",
    Age :   "20",
    Work :  "Developer",
    pakage : "50 LPA",
    Company : "Google"
}
 
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj,key)) {
        const element = obj[key];
        console.log(key,element)
        
    }
}


//for of  loop 
// only use for array

let Arr = [100,200,300,400,500]

for (const value of Arr) {
    console.log(value) 
}