//object ke ander bane function ko method kehte hai
//same object ki 2 keys ko usi object ke dusri key me impliment krna hota hai to use keyword kehte hai
let obj={
    name:"megha",
    "course":"mern",
    "batch":"p26",
    "num":90,
    "num1":10,
    "bool":10<11,
    run :function(){
// console.log("this is method class")
console.log(this.num+this.num1)
    },
    arr:[5,6,7,8,9]
}
console.log(obj.name);
console.log(obj.course);
console.log(obj.batch);
console.log(obj.num);
console.log(obj.bool);
obj.run();
console.log(obj.arr[4])

//destructure jb hume kisi object ki key ko bar bar use krna hota hai to use ek variable ke form me type krta hai
let {num,num1,course}=obj;
console.log(num);
console.log(num1);
console.log(course);