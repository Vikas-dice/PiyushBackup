/*

object - real world entity

human - rohan shalu puneet aarti aman 
animal - dogs bhed bakri 


Data types - array object string number boolean undefiend null - object --> prototype 

arr-->Array
object --->Object
number --->Number 
string -->String 


object={
key:value - property

}



*/

let mydetails={
    name:"vikas",
    age:27,
    ismarried:true,
    salary:10000,
    education:["10th","12th","btech"],
    task:function(){
        console.log("teaching")
    },
    otherdetails:{
        company:"dice",
        address:"delhi"

    }

}

//access . []

console.log(mydetails)
console.log(mydetails.education)
console.log(mydetails.age)
console.log(mydetails["salary"])

//loops - for in loops


for(let key in mydetails){
    console.log(key,mydetails[key])
}
