const customer=[
    {
        custId:1,
        name:"Aurum",
        bought:[
            {id:1,name:"T-shirt"},
            {id:2,name:"Earphone"},
        ]
    },
    {
        custId:2,
        name:"Ritesh",
        bought:[
            {id:3,name:"Shoes"},
            {id:4,name:"Mobile"},
        ]
    },
    {
        custId:3,
        name:"Ritu",
        bought:[
            {id:5,name:"Phone-cover"},
            {id:6,name:"Ear-ring"},
        ]
    },
    {
        custId:4,
        name:"Smriti",
        bought:[
            {id:7,name:"Momo"},
            {id:6,name:"Ear-ring"},
        ]
    },
]

const customerAPIresp={
    status: 200,
    message: "customer data fetched",
    data: customer,
};

const getProductName=()=>{
    if(customerAPIresp.status === 200){
        let boughtProducts=[]
        customerAPIresp.data.forEach((customer)=>
        {
            customer.bought.map((item)=>{
                boughtProducts.push(item.name);
            })
        })
        return boughtProducts;
    }
};
console.log(getProductName());

const getProductNum=()=>{
    if(customerAPIresp.status === 200){
        let productNumbers={};
        customerAPIresp.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                if(productNumbers[item.id]){
                    productNumbers[item.id]+= 1;
                }else{
                    productNumbers[item.id]=1;
                }
            })
        })
        return productNumbers;
    }
}

console.log(getProductNum());

// const data={
//     Ear-ring: 2,
//     Momo: 1,
//     Phone-cover: 1,
// }