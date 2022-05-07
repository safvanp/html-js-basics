// let age =25;
// console.log(age);
// //function
// const calcArea = function(radius){
//     return 3.14*radius**2;
// };
// let msg ='Hai';
// if(msg==='Hello'){
//     console.log('true');
// }
// 

// const area = calcArea(5);
// console.log('area is :',area);

// // arrow function
// const calcAreaS = (radius)=> 3.14*radius**2;

// const area1 = calcAreaS(5);
// console.log('area is :',area1);

// const bill = function(products , tax){
//     let total = 0;
//     for(let i = 0; i < products.length ; i++){
//         total += products[i] + products[i] * tax;
//         console.log('line total:' + total);
//     }
//     return total;
// };

// const bill = (products, tax)=>{
//     let total = 0;
//     console.log(products.length);
//     for(let i = 0; i < products.length ; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30],0.2));


// compare fuction and methods

// function

// const messageF = ()=>'hello';

// let result = messageF();
// console.log(result);

// // methods

// const developer = 'MAC';

// let result1=developer.toUpperCase();
// console.log(result1);


// const myFunction = (callbackFunction)=>{
//     let value = 'this is the value';
//     callbackFunction(value);
// };
// //normal
// myFunction(function(value){
//     console.log(value);
// });

// //arrow
// myFunction(value => {
//     console.log(value);
// });
// const ul = document.querySelector('.company');

// let company = ['Facebook','Microsoft','Twitter'];

// company.forEach((name,index) => {
//     console.log(index,name);
// });

// const logCompany = (name,index) => {
//     console.log('${index} - Name :${name}');
// };

// company.forEach(logCompany);

// let html = ``;
// company.forEach((name) => {
//     //html temp
//     html += `<li style="color: blue">${name}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;


// let user = [{
//     name:'Mac',
//     age:26,
//     email:'Mac@gmail.com',
//     location:'US',
//     blogs:['top 10 Indian place', 'top 10 Srilangan place'],
//     login: function(){
//         let msg ='login';
//     },
//     logout: function(){
//         let msg ='logout';
//     },
//     logBlogs: function(){
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         });
//     }
// },
// {
//     name:'Jaggary',
//     age:26,
//     email:'Jaggary@gmail.com',
//     location:'UK',
//     blogs:['top 5 Paris place', 'top 5 Delhi place'],
//     login: function(){
//         let msg ='login';
//     },
//     logout: function(){
//         let msg ='logout';
//     },
//     logBlogs: function(){
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         });
//     }
// },];

// user[0].logBlogs();
// console.log(this);


// const area = 7.7;

// console.log(Math.round(area));


//primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`,`scoreTwo :${scoreTwo}`);
// scoreOne=100;
// console.log(`scoreOne: ${scoreOne}`,`scoreTwo :${scoreTwo}`);

//reference values

// const userOne = {name:'abu',age:28};
// const userTwo = userOne;

// console.log(userOne,userTwo);

// userOne.age=35;
// console.log(userOne,userTwo);

