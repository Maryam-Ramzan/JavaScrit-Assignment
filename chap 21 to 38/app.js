// ---Chapter # 21 to 25---
// -----Task # 01 -----

var fname = prompt("Enter yours first Name");
var lname = prompt("Enter your last name");

alert("Hello "+fname+" "+lname);

// -----Task # 02 -----

var fav = prompt("Enter your favourite Phone Model");
alert("My favourite Phone Model is: "+fav+"\nLength of string is: "+fav.length);

// -----Task # 03 -----

var pak = "Pakistani";
document.write("String: "+pak+"<br> The index of n is: "+pak.indexOf("n"));

// -----Task # 04 -----

var pak = "Hello World!";
document.write("String: "+pak+"<br> The last index of l is: "+pak.lastIndexOf("l"));

// -----Task # 05 -----

var pak = "Pakistani";
document.write("String: "+pak+"<br> Character at index 3 is: "+pak.charAt(3));

// -----Task # 06 -----
var fname = prompt("Enter yours first Name");
var lname = prompt("Enter your last name");
var full = fname+lname
alert("Hello "+full);


// -----Task # 07 -----

var hy = "Hyderabad";
document.write("String: "+hy+"<br> After replacement: "+hy.replace("Hyder","Islam"));

// -----Task # 08 -----

 var hy = "Ali and Bali are best friends. They play cricket and football togetter.";
 document.write("String: "+hy+"<br><br> After replacement: "+hy.replace(/and/g,"&") );

// -----Task # 09 -----

var str = "472";
var st = typeof str;
document.write("Value: "+str+ "<br>Type: "+st);
num =Number(str);
document.write("<br> <br>Value: "+num+ "<br>Type: "+typeof num);

// -----Task # 10 -----

var any = prompt("Enter anything in string here");
alert(any.toUpperCase());
document.write("User input: "+any+"<br> Upper Case: "+any.toUpperCase());

// -----Task # 11 -----

var any = prompt("Enter anything in string here");
var capital = any.slice(0,1);
var lower = any.slice(1);
lower = lower.toLowerCase();
capital = capital.toUpperCase();
alert(capital+lower);

// -----Task # 12 -----

var num = '35.36';
var num1 = num.replace('.','');
document.write("Number: "+num+"<br> Result: "+num1);

// -----Task # 13 -----

var namme = prompt("Enter username");
var c = namme.split('');
for (i = 0; i < namme.length; i++) {

    if (c[i] === String.fromCharCode(64) || c[i] === String.fromCharCode(44) || c[i] === String.fromCharCode(46) || c[i] === String.fromCharCode(33)) {
        alert("Enter a valid username");
        break;
    }

}


// // -----Task # 14 -----

var A = ['cake','pineapple','cookie','chips','patties'];
var item = prompt("Welcome to ABC Bakery What do you want to order sir/ma'am");
item = item.toLowerCase();
    if(item==A[0])
    {
        alert(A[0]+" is avaliable in our bakery at index "+A.indexOf(item))
    }
    else if(item==A[1])
    {
        alert(A[1]+" is avaliable in our bakery at index "+A.indexOf(item))
    }
    else if(item==A[2])
    {
        alert(A[2]+" is avaliable in our bakery at index "+A.indexOf(item))
    }
    else if(item==A[3])
    {
        alert(A[3]+" is avaliable in our bakery at index "+A.indexOf(item))
    }
    else if(item==A[4])
    {
        alert(A[4]+" is avaliable in our bakery at index "+A.indexOf(item))
    }
else
{
    alert("We are sorry "+item+ "is not avaliable in our bakery");
}

// // -----Task # 15 -----


var namme = prompt("Enter username");
var c = namme.split('');
var check = /^[0-9a-zA-Z]+$/;
var letters = /^[0-9]+$/;
for(i=0;i<c.length;i++)
{
    if(c[0].match(letters))
    {
        alert("Invalid passward, Passward must not begin with number ")
          break;
    }
}
if(c.length < 6)
{
  alert("length of characters should be greater than 6");
}

// // -----Task # 16 -----

var uni = "University of Karachi".split('');
for(var i =0;i<uni.length;i++)
{
    document.write(uni[i]+"<br>")
}

// // -----Task # 17 -----

var input = prompt("Enter anything");
var c = input.charAt(input.length-1); 
alert("User Input: "+input+"\nLast character of input is: "+c);

// // -----Task # 18 -----

var text = "the quick brown fox jumps over the lazy dog.";

var count =0;
for(i=0;i<text.length;i++)
{
    if('the'==text.slice(i,i+3))
    {
     count = count+1;
    }
}
alert("Text: "+text+"\nOccurance of word 'the' "+count);




// ---Chapter # 26 TO 30---
// -----Task # 01 -----

var num = parseFloat(prompt("Enter any number in decimal point"));
document.write("Number: "+num+"<br> Rounf off Value: "+Math.round(num)+
"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num))

// -----Task # 02 -----


var num = parseFloat(prompt("Enter any negative number in decimal point"));
document.write("Number: "+num+"<br> Rounf off Value: "+Math.round(num)+
"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num))

// -----Task # 03 -----

var num = parseFloat(prompt("Enter any negative number in decimal point"));
document.write("The absolute Value of "+num+" is "+Math.abs(num));

// -----Task # 04 -----

var diceRoll = Math.ceil(Math.random()*6);
alert("The random dice value is "+diceRoll);

// -----Task # 05 -----

var coinToss = Math.ceil(Math.random()*2);
if(coinToss==1)
{
    alert(coinToss+"\nRandom coin value is Tail");

}
if(coinToss==2)
{
    alert(coinToss+"\nRandom coin value is Head");

}

// -----Task # 06 -----

var Num = Math.ceil(Math.random()*100);
   alert("Random number between 1 to 100 is: "+Num);

// -----Task # 07 -----

var weight = parseFloat(prompt("Enter your weight in KG","50kg"));
// var c =Math.round((weight));
alert(weight);

// -----Task # 08 -----

var secret = parseInt(prompt("Enter a number between 1 to 10"));
var num = 3;
if(num==secret)
{
    alert("***Congratulations You Won!***");
}
else{
    alert("Ooops wrong answer");
}


// ---Chapter # 31 TO 34---
// -----Task # 01 -----

var num = new Date();
document.write(num);

// -----Task # 02 -----

var num = new Date();
var month = ['January','February','March','April','May','June','July','August','September','October',
'November','December']
alert("Current Month: "+month[num.getMonth()]);

// -----Task # 03 -----

var num = new Date();
var day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
alert("Today is "+day[num.getDay()]);

// -----Task # 04 -----

var num = new Date();
var day = [0,1,2,3,4,5,6];
console.log(day[2]);
if(num.getDay() == day[6] || num.getDay() == day[0]  )
{
alert("It's Fun day");
}
else
{
    alert("It's Boring day");

}

// -----Task # 05 -----

var num = new Date();
if(num.getDate() < 16)
{
    alert("First fifteen Days of the Month");
}
else {
    alert("Last fifteen days of Month")
}

// -----Task # 06 -----

var date = new Date();
document.write("Current Date: "+date);
var c = date.getTime();
var d =c/(1000*60*60);
document.write("<br>Elapsed milliseconds since january 1, 1970: "+c);
document.write("<br>Elapsed minutes since january 1, 1970: "+d);

// -----Task # 07 -----

var num = new Date();
if(num.getHours() < 13)
{
    alert("It's AM");
}
else {
    alert("It's PM")
}

// -----Task # 08 -----

 var d =new Date("December 31,2020");
var a = new Date(d.setDate(31));
console.log(a);

// -----Task # 09 -----

var d =new Date("May 24,2020");
var a = new Date();
var c = a.getTime()-d.getTime();
var e = Math.floor(c/(1000*60*60*24));
console.log(e);
document.write(e+" days has passed since 1st Ramadan 2020");

// -----Task # 10 -----

var d =new Date("Dec 5,2015 22:50:16");
var a = new Date("Jan 1,2015");
var c = d.getTime()-a.getTime();
var e = Math.floor(c/(1000*60));
console.log(e);
document.write(e+" days has passed the begining of 2015");

// -----Task # 11 -----

var d = new Date();
var a = new Date();
var c = new Date(d.setHours(d.getHours()-1));
console.log("Current Date: "+a+"\n"+"1 hour ago: "+c);

// -----Task # 12 -----


var d = new Date();
var a = new Date();
var c = new Date(d.setFullYear(d.getFullYear()-100));
console.log("Current Date: "+a+"\n"+"100 years back: "+c);


// -----Task # 13 -----

var birhtDate = parseInt(prompt("Enter your age"))
var d= new Date();
var year = d.getFullYear();
var birthYear = year - birhtDate;
document.write("Your age is: "+birhtDate)
document.write("<br>Your birth year is: "+birthYear);

// -----Task # 14 -----

var name = prompt("Enter your name");
var date = new Date();
var mon= date.getMonth();
document.write("<h1> K-Electric Bill</h1> Customer Name: "+name+" Customer"+"<br> Month: "+mon);
var unit = prompt("Enter number of units in the bill");
var char = 16;
document.write("<br>Number of Units: "+unit+"<br>Charges per unit: "+char);

var pay = unit*char;
document.write("<br><br>Net Amount payable (within due Date): "+pay);
var late_char = 350;
document.write("<br>Late payment Charges: "+late_char);
var late =pay+late_char;
document.write("<br>Gross Amount Payable (after due date): "+late )


// ---Chapter # 26 TO 30---

// -----Task # 01 -----
// ----Functions----

function date1() {
    var d = new Date();
    alert(d);
}
date1();

// -----Task # 02 -----

function greetings(a,b){
    var a = prompt("Enter your first name");
    var b = prompt("Enter your last name");
    alert("Hello "+a+" "+b);
}
greetings();

// -----Task # 03 -----

function add(a,b){
    var a = parseInt(prompt("Enter your first number"));
    var b = parseInt(prompt("Enter your last number"));
     alert(a+b);

}
add();

// -----Task # 04 -----

function cal(a,b){
    var a = parseInt(prompt("Enter your first number"));
    var c = prompt("Enter the operation you wanna perform")
    var b = parseInt(prompt("Enter your last number"));
    if(c=="+")
    {
        alert(a+b);
    }
    if(c=="-")
    {
        alert(a-b);
    }
    if(c=="*")
    {
        alert(a*b);
    }
    if(c=="/")
    {
        alert(a/b);
    }
    if(c=="%")
    {
        alert(a%b);
    }
}
cal();

// -----Task # 05 -----

function square(a,b){
    var a = parseInt(prompt("Enter any number you want to square"));

     alert(a*a);

}
square();

// -----Task # 06 -----

function fac(){
    var a = parseInt(prompt("Enter any number to find its factorial"));
    var f=1;
    for(i=1;i<=a;i++)
    {
        f=f*i
    }
     alert("Factorial of "+a+" is "+f );

}
fac();

// -----Task # 07 -----

function count(){
    var a = parseInt(prompt("Enter the starting number for counting"));
    var b = parseInt(prompt("Enter the last number for counting"));

    for(i=a;i<=b;i++)
    {
        document.write(i+" ")

    }


}
count();

// -----Task # 08 -----

function calhyp(){
alert("To findout the hypotenous of right angle triangle enter value of base and perpendicular")
var a 
    function square(){
        var a = parseInt(prompt("Enter the value"));
        a=a*a;

        return a;
        }


    var c = square(a)+square(a);
        alert("The hypotenous of a right angle triangle is "+c )

    }

calhyp();

// -----Task # 09 -----
// Area of Rectangle

function rec(a,b=5)
{
    var a = parseInt(prompt("Enter the value of height of rectangle"));
    var b= parseInt(prompt("Enter the value of width of rectangle"));    
    var c=a*b;
    alert("The area of rectangle is "+c);
}
rec();

// -----Task # 10 -----
// Pallindrome

var a = prompt("Enter a palindrome word")
var b= a.split('').reverse().join('');

if(a==b)
{
    alert("The word "+a+" is a palindrome");
}
else
{
    alert("The word "+a+" is not a palindrome")
}

// -----Task # 11 -----

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

alert("the quick brown fox\n"+(capital_letter("the quick brown fox")));


// -----Task # 12 -----

function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function(str) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });
  return word;
}
alert("Web development tutorisl \n"+longestWord("Web Development Tutorial")); 


// -----Task # 13 -----

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert("Jsresource.com \no occurs "+char_count('JSresources.com','o')+" times");


// -----Task # 14 -----

function calcircumferance(c)
{
  var a = parseInt(prompt("Enter radius"));
  var c = 2*3.14*a;
  return c;
}
alert("Circumference of Circle "+calcircumferance());


function calarea(c)
{
  var a = parseInt(prompt("Enter radius"));
  var c = 3.14*a*a;
  return c;
}
alert("Area of Circle "+calcircumferance());

