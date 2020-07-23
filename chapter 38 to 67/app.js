// !---Chapter 38-42---!
// Task # 01


var a = prompt("Enter the value of a ");
var b = prompt("Enter the value of b ");

function power(a,b)
{

    var c = Math.pow(a,b)
    alert(a+" raise to "+b+" is "+c);
   return c;
}

power(a,b);

// Task # 02

var year = prompt("Enter any year to check if its leap year or not");

function leap(a){
    if(a%4==0 && a%100==0)
    {
        alert(year+" is leap year");
    } 
    else
    {
        alert(year+" is not leap year");
    }
}

leap(year);

// Task # 03

var a = prompt("Enter the first side length of triangle ");
var b = prompt("Enter the second side length of triangle ");
var c = prompt("Enter the third side length of triangle ");
var s;

function area(a,b,c){
    var s = (a+b+c)/2;
    return s;
} 

function tri(s){
     var z =s*(s-a)*(s-b)*s*(s-c);
     alert("The area of Triangle is "+z);
     return z;
}
area(a,b,c);
tri(s);

// Task # 04

var s1 = prompt("Enter marks of Subject 1");
var s2 = prompt("Enter marks of Subject 2");
var s3 = prompt("Enter marks of Subject 3");
var a;

function avg(){
    var a = Math.floor((s1+s2+s3)/3);
    alert("The average marks are "+a);
    return a;

}

function per(){
    var p = ((s1+s2+s3)*100)/300;
    alert("The percentage obtained is "+p);
    return p;
}

function main(a,p){
    avg();
    
    per();
    
}
main();

// Task # 05
var a = "Pakistan"

function ind()
{
    var i = prompt("Enter any character of word Pakistan to find index ; ","n");
    var j = a.indexOf(i);
    j=j+1;
    alert("The index of "+i+" is "+j);

}
ind();

// Task # 06
var a = prompt("Enter a sentence");

function vowelcut(){
    var b = a.replace(/[aeiuo]/g, "")
    alert(b)
}
vowelcut();

// Task # 07

// Task # 08
var distance = prompt("Enter the distance between two cities in kilometers");

function meter()
{
    var meter = distance*1000
    alert("The Distance is meter is "+meter)
}
function feet()
{
    var ft = distance*3280.84;
    alert("The Distance is meter is "+ft);
}
function inches()
{
    var inc = distance*39370.079;
    alert("The Distance is meter is "+inc)

}

function cm()
{
    var cm = distance*1000*100
    alert("The Distance is meter is "+cm)
}

meter();
feet();
inches();
cm();

// Task # 09
var i, time_worked, over_time, overtime_pay = 0;
function overtime()
{    

		var time_worked  = parseInt(prompt("Enter the time employee worked in hr ","42"));
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	
	alert("Total Overtime Pay Of an Employee is "+overtime_pay);
	return 0;
}

overtime();

// Task # 10

    var amount = parseInt(prompt("Please input amount for withdraw : "));

    //calculations
   function amt(){ 

    alert("You will have "+Math.floor((amount / 100))+" hundered notes "+Math.floor(((amount % 100) / 50))+" fifty notes "+ Math.floor((((amount % 100) % 50) / 10))+" ten notes "+" Remaining "+ Math.floor((((amount % 100) % 50) % 10)));
    return 0;
   }
   amt();

// !---Chapter 43-48---!
// Task # 01

function Click(){
    alert("Hi Facebook User");
}

// Task # 02
function Click1(){
    alert("Thanks For purchasing a Phone from us!");
}

// Task # 03

function Del(e){
       var i = e.parentNode.parentNode.rowIndex;
        document.getElementById("r1").deleteRow(i);
      }
      
    

// Task # 04 in HTML only Task # 05
var x=0;
function Inc()
{
    document.getElementById("incre").innerHTML =++x;
}


function dc()
{
    document.getElementById("incre").innerHTML =--x;
}


// !---Chapter 49-52---!
// Task # 01
// sIGN uP fORM

function showinput()
{
    document.getElementById('display').innerHTML = document.getElementById("user").value;
    document.getElementById('display1').innerHTML = document.getElementById("user1").value;
    document.getElementById('display2').innerHTML = document.getElementById("user2").value;
    document.getElementById('display3').innerHTML = document.getElementById("user3").value;
}
// Task # 02
function Read(){
    var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dignissimos deseruna'
    var para = document.getElementById("para")

    para.innerHTML = text;
}

// !---Chapter 53-57---!
// Task # 01
function showImage(e){
    var model = document.getElementById("model");
    model.src=e.src;
}

// Task # 02
function zoom()
{
    document.getElementById("i1");
}

function inzoom()
{
    document.getElementById("paragraph").style.fontSize="30px";
}
function Out()
{
    document.getElementById("paragraph").style.fontSize="20px";
}


// !---Chapter 58-67---!

var main = document.getElementById("main-content");
var p = main.childNodes;
console.log(p)
var name = "";
var element = main.getElementsByClassName("render");
for(var i=0;i<element.length;i++)
{
    name +=element[i].innerHTML;
        
}
document.write("<br>"+name);

document.getElementById("first-name").value="Maryam";
document.getElementById("last-name").value="Ramzan";
document.getElementById("email").value="maryamramzan@gmail.com";

var nodElement = document.getElementById("form-content").nodeType;
console.log(nodElement);

var nodElement1 = document.getElementById("last-name").nodeType;
var a = document.getElementById("last-name").childNodes;
console.log(a);
console.log(nodElement1);

var mainEle = document.getElementById("main-content").firstChild;
var mainEle1 = document.getElementById("main-content").lastChild;
console.log(mainEle);
console.log(mainEle1);

var sib = document.getElementById("last-name").nextSibling;
var sib1 = document.getElementById("last-name").previousSibling;
console.log(sib,sib1);

var email = document.getElementById("email").parentNode;
console.log(document.getElementById("email").nodeType);
console.log(email);
