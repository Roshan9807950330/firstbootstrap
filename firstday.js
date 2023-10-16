//(1)  Ways to print in Javascript
var a = 5
console.log(a);
// document.write("This is document write")
//alert("Hello world")

//(2)  Javascript console API   
console.log("This is first day of javascript tutorial");
console.warn("This is a serious warning");
console.error("This is an error");
console.log("I study in class",9+4,"in Purwanchal Campus")

//(3)  Javascript Variables
//Numbers
var num1=50;
var num2=60;
console.log(num1+num2);
var a=9,b=8;
console.log(a-b);
//Strings
var str1="I am Roshan";
var str2='I am doing Bachelor in Engineering';
console.log(str1);
//Objects
var marks={
    sumit:47,
    sujan:39,
    roshan:49
}
console.log(marks);
//Booleans 
var c=true;
var d=false;
console.log(c,d);
//Undefined
var und;
console.log(und);
var e=undefined;
console.log(e);
//Null
var f=null;
console.log(f);
//Arrays
var arr=[1,2,3,"Roshan",9];
console.log(arr);
 
//(4)  Operators in Javascript
//Arithmetic Operators   (Same as in C programming)
var x=20,y=2;
console.log("The value of x+y is",x+y);
console.log("The value of x-y is",x-y);
console.log("The value of x*y is",x*y);
console.log("The value of x/y is",x/y);
//Assignment Operators
     /* It includes equal to (=),(+=),(-=),(*=),(/=) */
//Comparison Operators
     /*  It includes greater than(>) ,less than(<),double equal to(==),greater than or equal to(>=) and less than or equal to(<=) */
//Logical Operators
     /* It includes logical and(&&),logical or(||) and logical not(!) */

//(5)  Functions in Javascript
function add(a,b,c)
{
    sum=a+b+c;
    return sum;
}
sum1=add(4,5,6);
sum2=add(10,15,20);
console.log(sum1,sum2);

//(6)  Control structure in Javascript
      /* It includes if statement,if else statement,if else ladder and nested if else statement */
//If else ladder
var age=16;
if (age<1)
console.log("Infant");
else if (age<5)
console.log("Toddler");
else if(age<10)
console.log("Kid");
else if(age<19)
console.log("Adoloscent");
else if(age<30)
console.log("Youth");
else if(age<60)
console.log("Adult");
else
console.log("Old age");

//(7)  Loops in Javascript
//For loop
var arr2=["Ram",1,"Shyam",2,"Hari",3,"Sita",4,"Gopal",5,"Narayan"];
for(var i=0;i<arr2.length;i++)
{
    if(i==2)
    continue;
    console.log(arr2[i]);
}
//While and do while loop is same as that in C-programming
//Let declare temporary variable
//const declare constant variable

//(8)  Break and Continue statement
//Break statement leaves the loop and come out of it while continue statement only leaves one execution and continue its function in loop

//(9)  Array manipulation
var myarr=["Bowl","Plate",true,null,undefined,64,37];
myarr.pop();
myarr.push("Chomu");
myarr.shift();
myarr.unshift("Matargasti");
myarr.sort();
console.log(myarr);

//(10)  String methods in Javascript
let firststring="Roshan has passed class 12";
console.log(firststring.length);
console.log(firststring.indexOf("passed"));
console.log(firststring.slice(6,15));
z=firststring.replace("Roshan","Prachit");
console.log(z,firststring);

//(11)  DOM Manipulation
let elem=document.getElementById("help");
console.log(elem);
let elemclass=document.getElementsByClassName("container");
console.log(elemclass);

//(12)  Events in Javascript
function clicked(){
console.log("Your button was clicked");
}
window.onload=function(){
    console.log("Document was loaded");
}
roshan.addEventListener('mouseover',function(){
    console.log("Mouse aaya");
})
roshan.addEventListener('mouseout',function(){
    console.log("Mouse gaya");
})

//(13)  setTimeout and setinterval
logkaro=()=>{                                               //Arrow function
    console.log("You have been logged");
}
clr=setInterval(logkaro,1500);
//Use clearTimeout and clearInterval to cancel setTimeout and setInterval

//(14)  JSON

