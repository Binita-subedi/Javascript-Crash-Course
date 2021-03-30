// to get print//
console.log("hello");

// this showes up dilouge box when u go to the page//
//alert("you have to complete this course any how with in 2/3 days.....")

//variables//
var b=" smoothie";
console.log(b);

//var can print num as well//
var someNumber= 45;
console.log(someNumber);

//this allow to get elment of html to insert the data on it//
//document.getElementById("someText").innerHTML="Hey Binny How are you..!!";
//prompt shows dilouge box to enter data//

//prompt("where do you live");
 
//applying enter data in screen//
//var age = prompt("what is your age");
//document.getElementById("a").innerHTML = age;

// NNumber in Javascript//

var num1= 5.7;
console.log(num1);

var num1=10;
num1=num1+1 ;
console.log(num1);

console.log(50 / 10);

var num1= 12;
num1++;
num1++;
console.log(num1);

var num1=10;
num1--;
console.log(num1);

 num1 += 10;
 console.log(num1);

 num1 -=10;
 console.log(num1);

 /* functions
 1.creat a function
 2.call the function
 */
//creating fuction
 function fun() {
         console.log("hey you")
 }

 //call function

 fun();

 /* let's creat a function that takes in name and says hello followed by yours name 
  
 for example 
Name : "Binita"
Return: "Hello Binita"

*/

function  greeting(){

 var name = prompt("what is your name ");

 var result = "Hello" + " " + name;// string concatenation
 console.log(result);

}

//greeting();

/*1.how do argument works in function
 2.hw do we add to no together in function
3.returing argument with value*/

function sumNumber( num1, num2) {
  var result =num1 + num2;
  console.log(result);
}

sumNumber("hello ","subedi");

sumNumber(10,11);

 //while loops//

 var num=0;

 while (num<50)
 {
   num +=1;
   console.log(num);

 }
 
 //for loop//

 for (let num = 5; num <=10; num++){
 console.log(num);
 }

 //datatype//
 let yourage = 4;// number //
 let yourName ="Binita"; //string
 let name = {first: "name", last: "subedi" }; //object
 let truth = false; //boolean
 let groceries = ["apple", "bann9ana", "orange"];// array
 let nothing = null; //value null

 //string in javascript (common method)

let fruit ='bannana,apple,pappya,flower';
 let morefruits= 'apple\nbanna\npappya';

 console.log(fruit);
console.log(morefruits);
console.log(fruit.length);
console.log(morefruits.length);
console.log(fruit.indexOf("an"));
console.log(morefruits.indexOf("q"));
console.log(morefruits.indexOf("ssp"));
console.log(fruit.indexOf("an"));
console.log(fruit.slice(2,5));
console.log(morefruits.replace('anna', '12340'));
console.log(fruit.toUpperCase('fruit'));
console.log(fruit.toLowerCase('fruit'));
console.log(morefruits.toLowerCase('morefruits'));
console.log(morefruits.toUpperCase('morefruits'));
console.log(fruit[2]);
console.log(fruit.charAt(2));
console.log(fruit.split(""));
console.log(fruit.split(','));

//array in javascript//

let user = ['banna','apple','orange','mango','pineapple'];
 

// alert(user[4]);
 console.log(user[2]);//access value at index 2nd

 user[1]='pear';//change value
 console.log(user);

 for (let i=0; i < user.length; i++)
 {
   console.log(user[i]);
 }
 //array common methods
console.log('to string', user.toString());
console.log(user.join('*'));
console.log(user,user.pop(),user);
console.log(user,user.push('blackberry,pineapple'),user);
console.log(user[3]);


user[user.length]= 'new user';
console.log("user")
user.shift();       //remove first element from the list
console.log(user);
user.unshift('kiwi'); //add nw element in array
console.log(user);

let vegetables = ['asparagus','tomato','broccoli'];
let allgroceries = user.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,4));
console.log(allgroceries.reverse());
console.log(allgroceries.sort());

//to sort number in javascript we have to pass number through filter

let Number = [5, 10, 8, 3, 2, 1, 6, 4, 7, 9];
console.log(Number.sort(function(a, b) {return a-b})); //sort number in ascending order

console.log(Number.sort(function(a, b) {return b-a})); //sort number in decending order

let emptyArray = new Array();
for (let num= 0; num <= 10; num++)
{
  emptyArray.push(num);
} 
console.log(emptyArray);

 //object in javascript
 //dictionary in python


let student = {first: 'Binita', last: 'Subedi', age: 25, height: 152, 
studentInfo: function (){
  return this.first + '\n' + this.last;
}
 };
console.log(student.first);
console.log(student.last);
student.first = 'Bidur' //change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
 //condiional, control flows (if else )
 /* && And
    || or
    */

  var age = 45;

 if ((age >= 18) && (age <= 35)) {
     status = "target demo";
     console.log(status);
 }
 else {
   status = "not my audience";
   console.log(status);
 }

 //switch statement 
//differentiate between weekday vs. weekend
// day 0 --> Saturday -->
// day 1 --> Sunday -->
// day 2 --> Monday -->
// day 3 --> Tuesday -->
// day 4 --> Wednesday -->
// day 5 --> Thursday --> weekday 
// day 6 --> Friday -->
 switch (6) {
  case 0: 
  text = 'weekend';
  break;
  case 5:
    text = 'weekdend';
    break; 
    case 6:
      text = 'weekend';
      break;
      default:
        text = 'weekday';
}
console.log(text);



document.getElementById("button").onclick =function(){
  document.getElementById("confirm").innerHTML="Order placed.Check email for conformation.......";
  document.getElementById("button").style.display="none";
}
/* variables*/
 //var username = prompt("what is your name");
 //console.log(username);
 
 var age = 50;
 var newAge = age;
 var message = "newAge = " + newAge; //"neWAge = 50"
 console.log(message);
 


var y = 10;
const people = ["binita", "Biplov"]

let person = {
  name: "Binita", 
  age: 23,
  favfood: "momo, pizza",
  fun: function(){
  console.log("yahoo!");//method
  }
}
person.fun();
var date = [1,23,4];

{
  let myName = "Binita";
  myName = myName.toUpperCase();//toUpperCase method
    
    console.log(myName);
}
//for dtring or object
{
 let myName = "Binita";
 let yourName = new String ("Binay");
 console.log(typeof(myName));
 console.log(typeof(yourName));
}
//Numeric datatype
{
  let babies =36746498674967;
  console.log(Math.pow(babies, 201));//for power 
}
 