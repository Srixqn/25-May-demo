console.log("Hello World!")
console.log("some new feature:")

const arr = [1,2,3,4,5]

const filterEven =()=>{
    const result = arr.filter((num)=>num % 2 === 0)
    return result
}

console.log(filterEven())