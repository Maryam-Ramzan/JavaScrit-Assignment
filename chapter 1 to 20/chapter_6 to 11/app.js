

// ----Chapter # 06 - 09
// ----Task # 01

// var num = parseInt(prompt("Enter a number!"));
// document.write("Result:" +
// "<br> The value of a is: "+num+
// "<br>.................................");

// ++num;
// document.write("<br><br> The value of ++a is: "+num+
// "<br> Now the value is: "+num );

// num++;
// document.write("<br><br> The value of a++ is: "+num+
// "<br> Now the value is: "+num );

// --num;
// document.write("<br><br> The value of --a is: "+num+
// "<br> Now the value is: "+num );

// num--;
// document.write("<br><br> The value of a-- is: "+num+
// "<br> Now the value is: "+num );

// ----Task # 02

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is ",a);
// document.write("<br>b is ",b);
// document.write("<br>Result is ",result);


// ----Task # 03

// var nam = prompt(" Enter your name");
// alert("Hi, "+nam);

// ----Task # 04

// var num = prompt("Enter a number for Multiplication Table.");
// if(num=="")
// { 
//     num =5;
//     document.write("<h1> Table of  "+num+" </h1>" );
//     for(i=1;i<=10;i++)
//     {
//         t=num*i;
//         document.write("<br>"+num+" "+"* "+i+" "+"= "+t )
         
//     }

// }
// else 
// {
//     document.write("<h1> Table of "+num+"</h1>");
//     for(i=1;i<=10;i++)
//     {
//         t=num*i;
//         document.write("<br>"+num+" "+"* "+i+" "+"= "+t )
         
//     }
// }

// ----Task # 05

// var sub1 = prompt("Enter the name of Subject 01");
// var sub2 = prompt("Enter the name of Subject 02");
// var sub3 = prompt("Enter the name of Subject 03");

// var total = 100;
// var total1 =total*3;

// var obt1 = parseInt(prompt("Enter marks you obtained in Subject 01"));
// var obt2 = parseInt(prompt("Enter marks you obtained in Subject 02"));
// var obt3 = parseInt(prompt("Enter marks you obtained in Subject 03"));

// var sum = obt1+obt2+obt3;
// var per1 =obt1*100/total;
// var per2 =obt2*100/total;
// var per3 =obt3*100/total;
// var per = (sum*100/total1);
// var per = parseInt(per);

// document.write("<table> <tr> <th>Subject </th> <th>Total Marks </th> <th>Obtained Marks </th> <th>Percentage  </th> </tr>");
// document.write("<tr><td>"+sub1+"</td>"+"<td>"+total+"</td>"+"<td>"+obt1+"</td>"+"<td>"+per1+"%</td></tr>");
// document.write("<tr><td>"+sub2+"</td>"+"<td>"+total+"</td>"+"<td>"+obt2+"</td>"+"<td>"+per2+"%</td></tr>");
// document.write("<tr><td>"+sub3+"</td>"+"<td>"+total+"</td>"+"<td>"+obt3+"</td>"+"<td>"+per3+"%</td></tr>");
// document.write("<tr><strong><th>"+"</th>"+"<th>"+total1+"</th>"+"<th>"+sum+"</th>"+"<th>"+per+"%</th></strong></tr></table>");


// Chapter # 09 to 11





// -----Task # 01

// var city = prompt("Enter your City name");
// if(city == "Karachi")
// {
//     alert("Welcome to the City of Lights");
// }

// -----Task # 02

// var gen = prompt("Enter your Gender like (Male/Female)");
// if(gen == "Male")
// {
//     alert("Good Morning Sir");
// }
// if(gen == "Female")
// {
//     alert("Good Morning Ma'am");
// }

// -----Task # 03
// var color = prompt("Enter the color of the Signal of traffic light e.g. (Red/Green/Yellow)");
// if(color=="Red")
// {
//     alert("You Must Stop !");
// }
// if(color=="Yellow")
// {
//     alert("Be ready to move !");
// }
// if(color=="Green")
// {
//     alert("Move Now !");
// }

// -----Task # 04
// var fuel = parseInt(prompt("Enter the fuel in your var e.g. (0.1 to 1)litre"));
// if(fuel<= 0.25)
// {
//     alert("Please refill the fuel in your car");
// }

// -----Task # 05
// var a = 4; if (++a === 5)
// { alert("given condition for variable a is true"); }
// document.write('Output Displayed in alert as given condition for variable a is true')

// var b = 82; 
// if (b++ === 83)
// {
//      alert("given condition for variable b is true");
//      }
//      document.write('Output Not displayed' )

// var c = 12; 
// if (c++ === 13)
// { 
//     alert("condition 1 is true");
//  }
//   if (c === 13)
//   { 
//       alert("condition 2 is true");
//      }
//       if (++c < 14)
//       { 
//           alert("condition 3 is true");
//          } 
//          if(c === 14)
//          { 
//              alert("condition 4 is true");
//              }

//              document.write("Condition 2 and 4 displayed");

// var materialCost = 20000;
//  var laborCost = 2000; 
//  var totalCost = materialCost + laborCost;
//   if (totalCost === laborCost + materialCost)
//   { alert("The cost equals"); }

//   document.write("The cost equals");

// if (true){ alert("True"); } if (false){ alert("False"); 
// document.write("No output displayed");

// if("car" < "cat"){ alert("car is smaller than cat"); } 
// document.write("car is smaller than cat")


// ----Task # 06



// var total = 100;
// var total1 =total*3;

// var obt1 = parseInt(prompt("Enter marks you obtained in Subject 01"));
// var obt2 = parseInt(prompt("Enter marks you obtained in Subject 02"));
// var obt3 = parseInt(prompt("Enter marks you obtained in Subject 03"));

// var sum = obt1+obt2+obt3;
// var per1 =obt1*100/total;
// var per2 =obt2*100/total;
// var per3 =obt3*100/total;
// var per = (sum*100/total1);
// var per = parseInt(per);



// document.write("<h1> Marks Sheet </h1> Total marks: "+total1+
// "<br>Marks obtained : "+sum+"<br>Percentage : "+per+"%");

// var grade;
// if (per >=80)
// {
//     document.write("<br>Grade : "+"A-one"+ " <br>Remarks : Excellent");
// }
// else if(per >= 70 && per <80)
// {
//     document.write("<br>Grade : "+"A <br>Remarks : Good");
// }
// else if(per >= 60 && per <70)
// {
//     document.write("<br>Grade : "+"B <br>Remarks : You Need to improve");
// }
// else if (per <=60)
// {
//     document.write("<br>Grade : "+"Fail  <br>Remarks : Sorry");
// }

// ----Task # 07
// --- Game


// var secret = 6;
// var game = parseInt(prompt("Let's Play a guess game.\nEnter any number between 1 to 10  "));
// if (game==secret)
// {
//     alert("Bingo! Correct answer");
// }
// secret++;
// if (game == secret++)
// {
//     alert("Close enough to the correct answer.");
// }

// ----Task # 08
// --- Division

// var number = parseInt(prompt("Enter a number to check if it's divisible by 3"));
// if(number %3 == 0)
// {
//     alert( number+" is divible by 3");
// }

// ----Task # 09
// --- Even and Odd

// var number = parseInt(prompt("Enter a number to check if it's even or odd"));
// if(number %2 == 0)
// {
//     alert( number+" is even number");
// }
// else
// {
//     alert( number+" is odd number");
// }

// ----Task # 10
// --- Temperature

// var tem = parseInt(prompt("Enter the temperature in number only!"))
// if (tem >=40)
// {
//     alert("It is too hot outside.");
// }
// else if(tem >= 30 && tem <40)
// {
//     alert("The Weather today is Normal.");
// }
// else if(tem >= 20 && tem <30)
// {
//     alert("Today’s Weather is cool.");
// }
// else if(tem >=10 && tem <20)
// {
//     alert("OMG! Today’s weather is so Cool.");
// }
// else if(tem >=0 && tem <10)
// {
//     alert("OMG! It's freezing point");
// }

// ----Task # 11
// --- Calculator

var first = parseInt(prompt("Simple Calculator\nEnter first operand (number)"));
var first1 = (prompt("Enter the operation you wanna perform"));
var first2 = parseInt(prompt("Enter second operand"));

if(first1 == "+" )
{
   total=first+first2;
    alert(first+" "+first1+" "+first2+" = "+total);
}
if(first1 == "-" )
{
   total=first-first2;
    alert(first+" "+first1+" "+first2+" = "+total);
}
if(first1 == "*" )
{
   total=first*first2;
    alert(first+" "+first1+" "+first2+" = "+total);
}
if(first1 == "/" )
{
   total=first/first2;
    alert(first+" "+first1+" "+first2+" = "+total);
}
if(first1 == "%" )
{
   total=first%first2;
    alert(first+" "+first1+" "+first2+" = "+total);
}