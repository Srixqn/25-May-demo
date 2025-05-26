const UserData=[
    {id:1,name:"Abdul",age:20,occupation:undefined},
    {id:2,name:"Nabin",age:19,occupation:"Berojgar"},
    {id:3,name:"Rabina",age:22,occupation:"Intern"},
    {id:4,name:"Rabin",age:19,occupation:"Bartender"},
    {id:5,name:"Prabin",age:19,occupation:"Nalla Berojgar"},
    {id:6,name:"Tripal",age:25,occupation:undefined},
]
const response={
    status:200,
    message:"User data fetched successfully",
    data:UserData
}

const fetchUserNames=()=>{
    if(response.status === 200){
        const result = response.data
        .filter((user)=> user.occupation !== undefined && user.age >= 20)
        .map((user)=> user.name)
        return result
    }else{
        const message="API fetch failed"
        return
    }
}
console.log(fetchUserNames())