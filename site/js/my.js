// var company=new Object();

// company.name='facebook';

// console.log(company["name"]);

// company.name_of_branch="blockchain";
// console.log(company.name_of_branch);
// console.log(company['name_of_branch']);



// var facebook={

//     name:'Facebook',
//     ceo : {
//         firstName:'mark',
//         color:'blue'
//     },
//     "stock of company":110
// };

// console.log(facebook);

// console.log(facebook.ceo.firstName);

// function multiply(x,y){

//     return x*y;
// }

// console.log(multiply(4,4));
// multiply.varsion='version 1.0';

// console.log(multiply.varsion);


// function makeMultiplier(multiplier){

//     var myfun=function(x){
//         return multiplier * x;
//     };

//     return myfun;
// }

// var multiplyBy3=makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll=makeMultiplier(2);
// console.log(doubleAll(100));

// function doOperation(x,operation){

//     return operation(x);
// }

// var result=doOperation(5,multiplyBy3);
// console.log(result);
// result=doOperation(100,doubleAll);

// console.log(result);


// var a={name:"vivek"};
// var b=a;

// console.log(a);
// console.log(b);
// b.name="lalit";
// console.log(a);
// console.log(b);

// function changePrimitive(p_value){

//     console.log("in changePrimitive");
//     console.log("Before");
//     console.log(p_value);

//     p_value=5;
//     console.log("After");
//     console.log(p_value);
// }

// var value=7;
// changePrimitive(value);
// console.log(value);

// function changeObject(obj){

//     console.log(obj);

//     obj.x=5;
//     console.log(obj);
// }

// value={x:10};
// changeObject(value);
// console.log(value);


// function Circle(radius){
//     this.radius=radius;
//     console.log(this);

// }

// Circle.prototype.getArea=
// function(){
//     return Math.PI * Math.pow(this.radius,2);
// }

// var area=new Circle(10);
// console.log(area.getArea());

// var another=new Circle(30);
// console.log(another.getArea());

// var literalCircle = {

//     radius : 10,

//     getArea : function(){
//         var self=this;
//         console.log(this);

//         var increaseRadius= function(){
//             self.radius=20;
//         };
//         increaseRadius();
//         console.log(this.radius);

//         return Math.PI * this.radius;
//     }
// };

// console.log(literalCircle.getArea());


// function Dog(name) {

//     this.name=name;
// }

// Dog.prototype.bark= function() {
//     console.log(this.name + " likes barking Bark!");
// }

// var max=new Dog("Max","Buddy");
// max.bark();



// var array=new Array();
// array[0]="vivek";
// array[1]=2;
// array[2]= function(name){
//     console.log("Hello "+name);
// };
// array[3]={course : "JAvascript"};

// console.log(array);

// console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);


// var names=["vivek",2,"lalit"];
// console.log(names);

// var names=[
//     'vivek',
//     'lalit',
//     'pallav'
// ];

// for (var i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// var names2=["vivek","lalit","ashish"];

// var obj={
//     name:'visavadiya',
//     salary:22000,
//     job:'java'
// };

// for (var i in obj){
//     console.log(i + " : "+obj[i]);
// }

// for (var j in names2){
//     console.log(names2[j]);
// }

// names2.greeting='kunal';
//  for (var j in names2){
//      console.log(names2[j]);
//  }


// function name(value) {

//     function b(){
//         console.log("value "+value);
//     }
//     b();
//     return (
//         function(x){
//             console.log(value);
//             return value * x;
//         }
//     );
// }

// var temp=name(2);
// console.log(temp(3));


//IIFE or Imediately Invoked Function Expression
// (function (name){
//     console.log("Hello "+name);
// })("vivek");

// vivekGreeter.sayHello();
// visavdiyaGreeter.sayHi();

//DOM manipulation

// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

// document.addEventListener("DOMContentLoaded",

//     function (event) {

//         function sayHello(event) {

//             console.log(event);

//             this.textContent='said it';
        
            
//             var name=
//                 document
//                 .getElementById("name")
//                 .value;
        
//             var message="<h2>Hello " + name + "!</h2>";
//             //document.getElementById("content").textContent=message;
//             document
//             .getElementById("content")
//             .innerHTML=message;
        
//             if (name === "vivek") {
//                 var title =
//                     document.querySelector("#title")
//                     .textContent;
//                 title += "& Lovin it!!";
        
//                 document
//                 .querySelector("#title")
//                 .textContent=title;
//             }
            
//         }
        
//         //unobstructive event binding
        
//         document.querySelector("button")
//             .addEventListener("click", sayHello);
        
//         document.querySelector("body")
//             .addEventListener("mousemove",
            

//                 function (event) {

//                     if (event.shiftKey === true){
//                     console.log("X:" + event.clientX);
//                     console.log("Y:" + event.clientY);
//                     }      
//                 }
//             );
            
//     }

// );


// document.querySelector("button")
//     .onclick = sayHello;

//Event Handling
document.addEventListener("DOMContentLoaded",

    function (event) {

        //Unobstrusive event binding
        document.querySelector("button")
            .addEventListener("click", function() {
                
                

                //call server to get the name

                $ajaxUtils
                    .sendGetRequest("data/name.json",
                        function (res) {
                            var message = 
                            res.firstName + " " + res.lastName;

                            if(res.likesChineseFood) {
                                message += " likes indian Food"; 
                            }
                            else {
                                message += " doesn't like Chinese Food"
                            }

                            message += " and uses ";
                            message += res.numberOfDisplay + 1;
                            message += " display for coding.";


                        document.querySelector("#content")
                            .innerHTML = "<h2>"+ message + "</h2>";
                        });
                
                
            });
    }

);

//JSON 
// convert from json to object
//var obj = JSON.parse(jsonString);
// convert from object to json
//var str = JSON.stringify(obj);

