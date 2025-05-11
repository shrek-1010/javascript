console.log(`hello`);
console.log(`i like pizza`);
//window.alert(`you are too hot`);
//document.getElementById("myid").textContent="hello";
//document.getElementById("mypara").textContent="this is a paraaaa";
//let age=123;
//gpa=9.0;
//console.log(age);
//console.log(`my son is ${age}`);
//console.log(`my son has a ${gpa} gpa`);
//console.log(typeof age);
//let firstname = "harshita";
//let student = false;
//document.getElementById("p1").textContent=`my name is ${firstname}`;
//let username;
//username=window.prompt("what your username?");
//console.log(username);
//document.getElementById("mysubmit").onclick = function(){
    //username=document.getElementById("mytext").value;
    //document.getElementById("myid").textContent=`hello ${username}`
//}
/*let u;
document.getElementById("mysubmit").onclick=function(){
    u=document.getElementById("myr").value;
    window.alert('i love youuu💕💕💕💕💕😩😩😩😩😩😩')
}*/

/*const pi=3.14159;
let radius;
let circumference;
document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("myra").value;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById("myid").textContent=circumference+"cm"

}*/
/*//COUNTER PROGRAM
const increasebtn=document.getElementById("increasebtn");
const resetbtn=document.getElementById("resetbtn");
const decreasebtn=document.getElementById("decreasebtn");
const countlabel=document.getElementById("countlabel")
let count=0;
//increase
increasebtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
//decrease
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}
//reset
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
    */
/*math function
let randomnum=Math.floor(Math.random()*6);
console.log(randomnum);*/
//random number generator
/*const mylabel1=document.getElementById("mylabel1");
const mylabel2=document.getElementById("mylabel2");
const mylabel3=document.getElementById("mylabel3");
const mybutton=document.getElementById("mybutton");
const min=1;
const max=6;
let randomnum1;
let randomnum2;
let randomnum3;
mybutton.onclick=function(){
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;
    mylabel1.textContent=randomnum1;
    mylabel2.textContent=randomnum2;
    mylabel3.textContent=randomnum3;
}*/
/*let age;

let haslicense=false;
document.getElementById("mysubmit").onclick=function(){
    age=document.getElementById("myage").value;
if(age>100){
    window.alert(`you are too old`);
}
 else if(age>=18){
    window.alert(`you are eligible`);

    if(haslicense){
        window.alert(`you have your license`);
    }
    else{
        window.alert(`you do not have a license`)
    }paymentresult
}
else{
    window.alert(`you need to be 18+`);
}
}*/
/* .CHECKED PROPERTY const mycheckbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const mastercardbtn=document.getElementById("mastercardbtn");
const paypalbtn=document.getElementById("paypalbtn");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`you are subscribed`;
    }
    else{
        subresult.textContent=`you are not subscribed`;
    }
    if(visabtn.checked){
        paymentresult.textContent=`you are paying with visa`
    }
    else if(mastercardbtn.checked){
        paymentresult.textContent=`you are paying with mastercard`
    }
}*/
// let age=25;
// let message=age>=18?"you're an adult":"you're not an adult";
// console.log(message);
// let time=12;
// let greeting=time<12?"good morning!":"good afternoon";
// console.log(greeting);
//PURCHASE ABOVE 1000 DOLLARS
// let spending=700;
// let discount=spending>=1000?0.1:0;
// let total=spending-(spending*discount);
// let message=spending>=1000?"eligible for 10% discount":"you are not eligible";
// console.log(message);
// console.log(`your total is $${total}`);
// let score=12;
// let grade;
// switch(true){
//     case score>=90:
//         grade='A';
//         break;
//     case score>=80:
//         grade='B';
//         break;
//     case score>=70:
//         grade='C';
//         break;
//     case score>=60:
//         grade='D';
//         break;
//     default:
//         console.log('you are dumbbb')
// }
// console.log(grade);
// let username="brocode";
// result=username.startsWith("c");
// if(result){
//     console.log("your username cannot");
// }
// else{
//     console.log(username);
// }
// EVEN OR ODD CHECKER
// let number=Number(window.prompt('enter a number'));
// if(number%2==0){
//     console.log(`${number} is even`);
// }
// else {
//     console.log(`${number} is odd`);
// }
// GRADE CALCULATOR
// let engnumber=Number(window.prompt('english marks'));
// let mathnumber=Number(window.prompt('math marks'));
// let scinumber=Number(window.prompt('science marks'));
// let socialnumber=Number(window.prompt('social marks'));
// let chemnumber=Number(window.prompt('chem marks'));
// let grade; 
// result=(engnumber+mathnumber+scinumber+socialnumber+chemnumber)/5;

//     switch(true){
//         case result>=90:
//             grade='A'
//             console.log(`your grade is ${grade}`);
//             break;
//         case result>=80:
//             grade='B';
//             console.log(`your grade is ${grade}`);
//             break;
//         case result>=70:
//             grade='C';
//             console.log(`your grade is ${grade}`);
//             break;
//         default:
//             console.log("you are dumbb;")

//     }
// NUMBER GUESSING GAME
// let result=Math.floor(Math.random()*10)+1
// let guess=Number(window.prompt("guess numbers between 1 and 10"));
// if(result==guess){
//     console.log(`you guessed ${guess} right`);
// }
// else{
//     console.log(`booo loserrr`);
// }
// DICE ROLLER
// const mybutton=document.getElementById("mybutton");
// const mylabel=document.getElementById("mylabel");
// let randomnum;
// mybutton.onclick=function(){
//     randomnum=Math.floor(Math.random()*6)+1;
//     mylabel.textContent=randomnum;
// }
// ROCK PAPER SCISSORS
let playerchoice=prompt("rock,paper or scissors").toLowerCase();
//letting computer choose
let choices=["rock","paper","scissors"];
let computerChoice=choices[Math.floor(Math.random()*3)];
if(choices==computerChoice){
    alert("its a draw");
}
else if(){

}