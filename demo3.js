const fname = "Abdul"
const lname = "Kawari"

const addName=()=>{
    return `${fname} rehman ${lname}`
}
console.log(addName())

addName2()
function addName2(){
    console.log("normal func")
}

const arr1 = [-3,-2,-1]
const arr2 = [0,1,2,3]

const AddArray=()=>[...arr1,...arr2]

console.log(AddArray())

const UserData={
    name:"Tripal",
    email:"tripal123@gmail.com",
    phone:981234,
    hasPassedOut:false,
    occupation:undefined
}

const ApiResponse={
    status:404,
    message:"not found",
    data:{}
}

const ThisIsFinalUserData={}
const populateData=()=>{
    if(ApiResponse.status === 200 && ApiResponse.data){
        ThisIsFinalUserData = ApiResponse.data
    }else{
        ThisIsFinalUserData = UserData
    }
}



// const filterFalsyVal=()=>{
//     let finalUserData={}
//     for(let key in UserData){
//         if(UserData[key]){
//             finalUserData={...finalUserData,[key]:UserData[key]}
//         }
//     }return finalUserData
// }
// console.log(filterFalsyVal())