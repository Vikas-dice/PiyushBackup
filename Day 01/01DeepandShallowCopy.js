


let num1=10;
let num2=num1;
console.log("bofore")
console.log("num1 ",num1)
console.log("num2 ",num2)


num1=num1+15;
console.log("after")
console.log("num1 ",num1)
console.log("num2 ",num2)



/*
pritimitve data types - number boolean string 
non primtive data types - function array object 

primtive - value pass
non - refer-address pass



*/

let arr1=[10,20,30]
let arr2=arr1;

console.log("bofore")
console.log("arr1 ",arr1)
console.log("arr2 ",arr2)

arr1.push(100)
console.log("after")
console.log("arr1 ",arr1)
console.log("arr2 ",arr2)

let obj1={
    name:"vikas",
    age:27,
    ismarried:false
}

let obj2=obj1;


console.log("bofore")
console.log("obj1 ",obj1)
console.log("obj2 ",obj2)

obj1.salary=1000;

console.log("after")
console.log("obj1 ",obj1)
console.log("obj2 ",obj2)




