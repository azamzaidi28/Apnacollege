//Map Function 
let Arr = [2,3,4,5,6,7,8,9]
let newArr = Arr.map((e)=> {
    return e**2
})
console.log(newArr)

const Greterthan = (e) =>{
    if(e > 4){
        return true
    }
    else
        return false
    
}
console.log(Arr.filter(Greterthan))
// output 5 6 7 8 9

//reduce function 
let r = [,3,4,5,6,7,8,9]
let arr = (a,b) => {
    return a+b
}

console.log(r.reduce(arr))

//output 42