
//  ---Chapter # 04
//  --- Task # 01
//  1. Declare 3 variables in one statement.

// var a="apple" , b ="banana" , c="cherry";

//  --- Task # 02
// 2. Declare 5 legal & 5 illegal variable names.

// var myName = "Maryam";
// var _age = 12;
// var birth_month = "feb";
// var age1 = 3.5;
// var Message = "Hello";

// var my Name = "Maryam";
// var var = 12;
// var birth%month = "feb";
// var 2age = "20";
// var a$b = "Hey";

//  --- Task # 03

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain number, $ , _ and camelCase.For example $my_1stVariable. <br>");
// document.write("Variables must begin with a letter, $ , _ or camelCase. For example $name, _name or name.<br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS Keywords.");

//  ---Chapter # 05





// Math Expressions
//  --- Task # 01

// var a=5;
// var b=4;
// var c= a+b;
// document.write("Sum of "+a+ " and "+b+ " is "+ c);

//  --- Task # 02
// var a=5;
// var b=4;
// var c= a+b;
// document.write("Sum of "+a+ " and "+b+ " is "+ c +"<br><br> " );
// var c= a-b;
// document.write("Subtraction of "+a+ " and "+b+ " is "+ c +"<br><br>");
// var c= a*b;
// document.write("Multiple of "+a+ " and "+b+ " is "+ c +"<br><br>");
// var c= a/b;
// document.write("Division of "+a+ " and "+b+ " is "+ c +"<br><br>");
// var c= a%b;
// document.write("Modulus of "+a+ " and "+b+ " is "+ c +"<br><br>");


//  --- Task # 03

// var variable1 ;
// document.write("Value after variable declaration is: ",variable1 +"<br> <br>" );
// var variable1 =5;
// document.write("Initial value: ",variable1 +"<br> <br>");
// variable1++;
// document.write("Value after increment is: ",variable1 +"<br> <br>");
//  variable1=variable1+7;
// document.write("Value after addition is: ",variable1 +"<br> <br>");
// variable1--;
// document.write("Value after decrement is: ",variable1 +"<br> <br>");
// variable1 =variable1%3;
// document.write("The remainder is :",variable1 +"<br> <br>");

//  --- Task # 04
// Cost of Tickets

// var cost = 600;
// var price = 5*cost;
// document.write("Total cost to buy 5 tickets to a movie is "+price+ " PKR");

//  --- Task # 05
// Multiplication Table

// var number = prompt("Enter a number for Mutiplication Table");

// document.write("Table of ", number+"<br>");
// for(i=1;i<=10;i++)
// {
//     var num = number*i;
//     document.write(number+" "+"x"+i+" "+"="+num+ "<br>")
// }

//  --- Task # 06
// Temperature Convertor

// var Celsius = parseInt(prompt("Enter Celsius temperature"));

// var Fahrenheit = (Celsius*9/5)+32;

// document.write(Celsius+"<sup>o</sup>C"+" is "+Fahrenheit+"<sup>o</sup>F <br>");
// var Fahrenheit = parseInt(prompt("Enter Fahrenheit temperature"));

// var Celsius = (Fahrenheit-32)*5/9;

// document.write(Fahrenheit+"<sup>o</sup>F"+" is "+Celsius+"<sup>o</sup>C");

//  --- Task # 07
// Shopping Cart

// var price1 =parseInt(prompt("Enter Price of item 1"));
// var q1 =parseInt(prompt("Enter Ordered Quantity of item 1"));
// var price2 =parseInt(prompt("Enter Price of item 2"));
// var q2 =parseInt(prompt("Enter Ordered Quantity of item 2"));
// var shiping =parseInt(prompt("Enter Shipping charges"));

// p1=price1*q1;
// p2=price2*q2;
// total = p1+p2+shiping;


// document.write(
//     "<h1> Shopping Cart</h1>" + 
//     "Price of item 1 is: "+price1+ "<br> Quantity of item 1 is: "+q1+ 
//     "<br>Price of item 2 is: "+price2+ "<br> Quantity of item 2 is: "+q2+
//     "<br> Shiping Chareges: "+shiping+ "<br> <br> Total cost of your order is: "+total

// )

//  --- Task # 08
// MarkSheet

// var total = 980;
// var obt = parseInt(prompt("Enter your obtained marks"));

// var mark = obt*100/total;
// document.write("<h1> Mark Sheet </h1>"+
// "<br>  Total marks: "+total+ "<br> Marks obtained: "+obt+
// "<br> Percentage: "+mark+"%"
// )

//  --- Task # 09
// Currency Convertor

// var dollar = 10;
// var riyal = 25;

// var total = (dollar*104.80)+(riyal*28);
// document.write("<h1> Currency in PKR</h1>"+
// "Total currency in PKR is: "+total
// )

//  --- Task # 10
// Arithematics

// var num =10;
// num = ((num+5)*10)/2;
// document.write ("Answer is: ",num);

//  --- Task # 11
//The Age Calculator:

// var current = 2020;
// var birth =1992;

// var age = current-birth;
// document.write("<h1> Age Calculator</h1>"+
// "Current Year: "+current+
// "<br>Birth Year: "+birth
//  )
// document.write("<br>Your age is: "+age);

//  --- Task # 12
// The Geometrizer:

// var radius = 20;
// var cir = 2*3.142*radius;
// var area = 3.142*radius*radius;


// document.write("<h1>The Geometrizer</h1>"+
// "Radius of a Circle is: "+radius+
// "<br> The Circumference of a circle is; "+cir+
// "<br> The Area of circle is: "+area)

// //  --- Task # 13
// The Lifetime Supply Calculator:

var snack = "Chocolate Chip Cokkie";
var age = 20;
var max = 65;
var q1 = 3;

var total =(max*3)-(age*3);
document.write("<h1> The Lifetime Supply Calculator</h1>"
+"Favourite Snack: "+snack+ "<br> Current age: "+age+
 "<br> Estimated Maximum Age: "+max+
"<br> Amount of snacks per day: "+q1+ 
"<br> You will need "+total+
 " chocolate chip cookies to last you until the ripe old age to "+max);
