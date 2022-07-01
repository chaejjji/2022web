console.log('ok1');

document.getElementsByClassName("box")[0].innerHTML = "안녕하세요.";

// let btn = document.getElementsByClassName("btn");
// let box = document.getElementsByClassName("box");

// btn[0].addEventListener("click",function(){
//     console.log('click');
//     box[0].innerHTML = "안녕1";
// })

let btn = document.querySelector("button.btn");
let box = document.querySelector(".box");

btn.addEventListener("click",function(){
    console.log('click');
    box.innerHTML = "안녕1";
})
// querySelector는 선택자 필요 x

let array = [1,2,3,4]
