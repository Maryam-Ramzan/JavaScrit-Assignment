

// Chapter # 12 to 13
// ---- Task # 02

// var fir = parseInt(prompt("Enter a number"));
// var sec = parseInt(prompt("Enter another number"));

// if(fir>sec)
// {
//     alert(fir+" It's a greater number");
// }
// else
// {
//     alert(sec+" It's a greater number");
// }
// if(fir==sec)
// {
//     alert("Both are equal");
// }

// ---- Task # 03

// var fir = parseInt(prompt("Enter a number"));


// if(fir>0)
// {
//     alert(fir+" is a positive number");
// }
// else if(fir<0)
// {
//     alert(fir+" is a negative number");
// }
// if(fir==0)
// {
//     alert("The inputted number is 0");
// }

// ---- Task # 04
// Vowel

// var letter= prompt("Enter a letter between a to z")

// if(letter === "a")
// {
//    alert("Its a vowel")
// }
// else if(letter === "e")
// {
//    alert("Its a vowel")
// }
// else if(letter === "i")
// {
//    alert("Its a vowel")
// }
// else if(letter === "o")
// {
//    alert("Its a vowel")
// }
// else if(letter === "u")
// {
//    alert("Its a vowel")
// }
// else
// {
//     alert("Its not a vowel")
// }

// ---- Task # 05
// Passward

// var pass = "Hello"
// var check = prompt("Enter passward");
// if(check=="")
// {
//     alert("Please enter your password");
//     var check = prompt("Enter passward");
//     if(check == pass)
// {
//     alert("Correct! The password you entered matches the original password.");
// }
// else{
//     alert("Incorrect password");
// }
// }
// else if(check == pass)
// {
//     alert("Correct! The password you entered matches the original password.");
// }
// else{
//     alert("Incorrect password");
// }

// ---- Task # 06

// var greeting;
//  var hour = 13;
//   if (hour < 18)
//    { 
//        alert("Good day");
//     }
//     else{ 
//         alert("Good Evening");
//          }

// ---- Task # 07
// var time = parseInt(prompt("Enter the time in 2400 format"));

//     if(time>=0000 && time<1200)
//     {
//         alert("Good Morning");
//     }
//     else if(time>=1200 && time<1700)
//     {
//         alert("Good Afternoon");
//     }
//     else if(time>=1700 && time<2100)
//     {
//         alert("Good Evening");
//     }
//     else if(time>=2100 && time<2359)
//     {
//         alert("Good Night");
//     }





//   Chapter # 14-16




// Task # 01 to 07
// var books =  Array();
// var arr = [];
// var arr1 = ['ali', 'karachi', 'cat'];
// var arr2 = [1,2,3,4,5];
// var arr3 =[0,1]
// var arr4 =[1,'ali',0.32];
// var edu = ['SSC','HSC','BCS','BS', 'B.COM', 'MS','M.PHIL','PhD'];

// document.write("<h1>Qualifications: <br><br>"+edu[0]+"<br>"+edu[1]+"<br>"+edu[2]+"<br>"+edu[3]+"<br>"
// +edu[4]+"<br>"+edu[5]+"<br>"+edu[6]+"<br>"+edu[7]+"<br>");

// Task # 08

// var inputArray = [];
// var size = 3; 

// for(var i=0; i<size; i++) {
	

// 	inputArray[i] = prompt('Enter name of student' + (i+1));
// }

// console.log(inputArray);

// var inputArr = [];
// var size = 3; 

// for(var i=0; i<size; i++) {
	

// 	inputArr[i] = prompt('Enter score of student' + (i+1));
// }

// console.log(inputArr);

// var total = 500;
// var inputArra =[];
// for(var i=0; i<size; i++) {
	

// 	inputArra[i] = inputArr[i]*100/500
// }

// console.log(inputArra+"%");

// for(var i=0; i<size; i++) {
	
//  document.write("<h1>Score of "+inputArray[i]+" is "+inputArr[i]+". Percentage: "+inputArra[i]+"%<br></h1>")
// }

// Task # 09

// var color = ['brown','blue','aqua','green','yellow'];
// console.log(color);
//  var col= prompt("Enter the colour name you want to add at begining");
//  color.unshift(col);
//  console.log(color);
//  var col= prompt("Enter the colour name you want to add at end");
//  color.push(col);
//  console.log(color);
//  var col= prompt("Enter two more colour names \n Enter first one");
//  var col1= prompt("Enter another colour name you want to add at begining");
//  color.unshift(col,col1);
//  console.log(color);
//  alert("By deleting colour at begining")
//  color.shift(color)
//  console.log(color);
//  alert("By deleting colour at end")
//  color.pop(color)
//  console.log(color);
//  var col= parseInt(prompt("Enter the index you wants to add color"));
//  var col1= prompt("Enter another colour name ");
//  color.splice(col,0,col1);
//  console.log(color);
//  var col= parseInt(prompt("Enter the index you wants to remove color "));
//  var col1 = parseInt(prompt("How many colors you want to remove"))
//  color.splice(col,col1);
//  console.log(color);

// Task # 10
// ---Sorting in Ascending order

// var array1 =[];
// var size = 5;

// for(i=0;i<size;i++)
// {
//     array1[i] = parseInt(prompt('Enter score of student' + (i+1)))
// }
// console.log(array1);
// document.write("<h3>Scores of Student: "+array1)
// for (i = 0; i < size; i++) 
// {

//     for ( var j = i + 1; j < size; j++)
//     {

//         if ( array1[i] > array1[j]) 
//         {

//             a =  array1[i];
//             array1[i] = array1[j];
//            array1[j] = a;

//         }

//     }

// }
//     document.write("<br>Ordered scores of Student: "+array1+"</h3>");

// // Task # 11
// var city = ['Karachi','Islamabad','Lahore','Quetta','Peshawar'];
// // document.write("<h3>Cities List: <br> "+city);
// city.slice(1,3);
// // document.write("<h3>Selected Cities List: <br> "+city+"</h3>");
// console.log(city);

// Task # 12
//  var arr = ['This','is','my','cat'];
//  document.write("<h1> Array: <br> "+arr);
// //  var ar = arr.toString();
//  document.write("<h1> String: <br> "+arr.join(' '));

// Task # 13
// ----FIFO 
// var arrray = ['Keyboard','Mouse','Printer','Monitor'];
// document.write("<h2> Devices: <br> "+arrray);
// for(i=0;i<4;i++)
// {
//     document.write("<h2> Out: <br>"+arrray[i])
// }

// Task # 14
// ----LIFO 
// var arrray = ['Keyboard','Mouse','Printer','Monitor'];
// document.write("<h2> Devices: <br> "+arrray);
// for(i=3;i>=0;i--)
// {
//     document.write("<h2> Out: <br>"+arrray[i])
// }

// Task # 15
// ----Drop Down

// var arry = ['Apple','Samsung','Motorola','Nokia','Sony','Haier']
// document.write("<select>");
// for(i=0;i<arry.length;i++)
// {
//     document.write("<option>"+ arry[i]+" </option>")
// }
// document.write("</select>");