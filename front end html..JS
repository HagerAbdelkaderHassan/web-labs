// let a =5
// console.log(typeof a)
// let b="r"
// console.log(typeof b)
// let c=true
// console.log(typeof c)

// let d
// console.log(typeof d)
// let e=null
// console.log(typeof e)
// console.log(e==null)
// let f=Symbol(12)
// console.log(typeof f)
// let g=Symbol(12)
// console.log(g==f)
// console.log(g===f)

// let h =50n
// console.log(typeof h)
// let i =50
// i=String(5)
// console.log(typeof i)
// console.log(i)
// let j=15
// j=BigInt(15)
// console.log(typeof j)
// var k= parseInt("16.33pt")
// var l= parseFloat("16.33pt")
// console.log(k)
// console.log(l)
// console.log("9"+4)
// console.log("9"-4)
// console.log(3==="3")

// function hello(){
//     var u=1
//   console.log("hello")  
// }
// console.log(hello)
// // console.log(u)
// function subtract(num1=6,num2=3){
//     var value =num1-num2
//    return value

// }
// console.log(subtract(5,2))


// var y=function(){
//     console.log("this is y")


// }
// y()
// function first (first){
//       console.log("this is the first")
//       first()
// }
// first(y)
// first(function(n1,n2){
//     var sum=n1+n2
//     return sum
// })
// first(function(n3,n4){
//     var sub=n3-n4
//     return sub
// })


// for(let i=0;i<5;i++){
//     var k=1
//     let o=2
//     console.log(i)
// }
// console.log(k)
// console.log(o)

// var myarray=[1,2,3,"hager"]
// console.log(myarray)
// myarray[4]="network"
// console.log(myarray)
// console.log(myarray.length)
// myarray.pop()
// console.log(myarray)
// myarray.push(45,"name")
// console.log(myarray)

// myarray.splice(3)

// console.log(myarray)
// myarray.splice(3,2)
// console.log(myarray)
// myarray.splice(2,2,90,"hager",200)
// console.log(myarray)
// myarray.splice(3,0,88,5.4)
// console.log(myarray)
// يعمل ازاحه ناحيه الشمال  
// myarray.shift()
// console.log(myarray)
// myarray.unshift(0)
// بتضيف عنصر في اول ال اراي 
// console.log(myarray)
// console.log(myarray.indexOf(5.4))
// لو عايز يرجع اول حاجه عنده في ال ال اراي او حاجه في ال اراي متكرره  
// console.log(myarray.indexOf(200))
// console.log(myarray.lastIndexOf(200))
// لو بسال علي ال حاجه مش متكرره بترجع اخر حاجه في ال اراي لما 



// var newarr=myarray.slice(2,6)
// لو عايز يقطع  حاجه من ال اراي بس بيخلي الاصلي ززي ما هو من غير ما يتاثر
// console.log(newarr)

// var newarr=arr.concat(arr2)
// console.log(newarr)

// var arr3=["welcome ","hager"]
// var str=arr3.join(".")
// console.log(str)

// for(vari=0;i<arr2.length;i++){
//     console.log(arr2[i])

// }

// arr2.forEach(funcxtion(e){
//     console.log(str)
// })

// loop in all element in arrays

// ترتيب تصاعدي 
// var arr7=[10,20,30]
// arr.sort()

var obj3=document.getElementById("first")
console.log(obj3)



var person = {
    name: 'hager',
    major: 'ai',
    age: 19,
    hello: function () {
        console.log("welcome " + this.name);
    }
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

var p2 = {};
Object.assign(p2, person, { major: 'ai' });
console.log(p2);

for (var key in p2) {
    console.log(key + ":" + p2[key]);
}

function Person(name, major) {
    this.name = name;
    this.major = major;
}
var p3 = new Person("jojo", "cy");
var p4 = new Person("koko", "ds");
p3.name = "momo";

function Animal(name) {
    this.name = name;
}
Animal.prototype.sound = function () {
    console.log(this.name + " sound");
};

let a = new Animal("dog");
a.sound(); // calling the method

function Cat(name) {
    this.name = name;
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

let c = new Cat("kitty");
c.sound();

class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(this.name + " sound");
    }
}
var a2 = new AnimalClass("lion");
a2.sound();

class Ant extends AnimalClass {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    sound() {
        console.log(this.name + " meow ");
    }
}
a2.sound();

var c2=new Ant ("cat","siamese");
c2.sound();

let str=JSON.stringify(p2);
console.log(str);
let obj =JSON.parse(str);
console.log(obj);