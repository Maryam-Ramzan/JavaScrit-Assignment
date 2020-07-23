// var array = [1][2];

// var num = [[0, 1, 2, 3],
//  [1,0,1,2],
//   [2,1,0,1]];


// for(var i = 0; i < num.length; i++)
//  { 
//     document.write(num[i].join(" ") + "<br>"); 
// }

// ----Task # 03
// Counting


// for (var i = 1;i<11;i++)
// {
//     document.write(i+"<br>")
// }

// ----Task # 03
// Multiplication Table

// var num = parseInt(prompt("Enter a number to print its Multiplication Table"));
// var len = parseInt(prompt("Enter length of Multiplication table"));
// document.write("Multiplication Table of "+num+"<br>Length "+len+"<br><br>");
// for (var i = 1;i<=len;i++)
// {
//     total = num*i;
//     document.write(num+" "+"*"+" "+i+" "+"="+total+"<br>")
// }

// ----Task # 05

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var i = 0;i<fruits.length;i++)
// {
//     document.write(fruits[i]+"<br>")
// }
// document.write("<br>")
// for (var i = 0;i<fruits.length;i++)
// {
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>")
// }

// ----Task # 05
// Generating Series
// document.write("<strong>Counting: <br><br>")
// for (var i = 1;i<16;i++)
// {
//     document.write(i+" ");
// }
// document.write("<strong><br><br>Reverse Counting: <br><br>")
// for (var i = 10;i>=1;i--)
// {
//     document.write(i+" ");
// }
// document.write("<strong><br><br>Even Numbers: <br><br>")
// for (var i = 0;i<=20;i++)
// {
//     if(i%2==0)
//     {
//     document.write(i+" ");
//     }
// }
// document.write("<strong><br><br>Odd Numbers: <br><br>")
// for (var i = 0;i<=20;i++)
// {
//     if(i%2!=0)
//     {
//     document.write(i+" ");
//     }
// }
// document.write("<strong><br><br>Even Numbers: <br><br>")
// for (var i = 1;i<=20;i++)
// {
//     if(i%2==0)
//     {
//     document.write(i+"k ");
//     }
// }

// ----Task # 07
// Bakery

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var ser = prompt("Welcome to ABC Bakery what do you wanna order sir/ma'am");


// if(ser==A[0])
// {
//     alert(ser+" is avaliable  at index "+[0]+" in our bakery.")
// }
// else if(ser==A[1])
// {
//     alert(ser+" is avaliable at index "+[1]+" in our bakery.")
// }
// else if(ser==A[2])
// {
//     alert(ser+" is avaliable at index "+[2]+" in our bakery.")
// }
// else if(ser==A[3])
// {
//     alert(ser+" is avaliable at index "+[3]+" in our bakery.")
// }
// else if(ser==A[4])
// {
//     alert(ser+" is avaliable at index "+[4]+" in our bakery.")
// }
// else
// {
//   alert("We are sorry "+ser+" is not avaliable in our bakery")
// }

// ----Task # 08
// Largest Number

// var A = [24, 53, 78, 91, 12];
// document.write("<h3>Array item : "+A)
// var num =0;
// for(i=0;i<=A.length;i++)
// {
    
//     if(num<A[i])
//     {
//        num = A[i];
      
//     }
// }
// document.write("<br><br>The largest number is "+num);

// ----Task # 09
// Smallest Number

// var A = [24, 53, 78, 91, 12];
// document.write("<h3>Array item : "+A)
// var num = A[0];
// for(i=0;i<=A.length;i++)
// {
    
//     if(num>=A[i])
//     {
//        num = A[i];
      
//     }
 
// }
// document.write("<br><br>The largest number is "+num);

// ----Task # 10
// Multiple of 5


document.write("<h2>Multiple of 5 <br></h2>")
for(var i =5;i<=100;i++)
{
    if(i%5==0)
    {
        document.write(i+"  ");
    }
}