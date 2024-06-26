//console.log("helloo2");


//TO INPUT DATA



// class customer{
//     name;
//     age;
//     address;
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }
//     setName(name){
//         this.name=name;
//     }
//     getname(name){
//         return this.name;
//     }
//     setage(age){
//         this.age=age;
//     }
//     getage(name){
//         return this.age;
//     }
//     setaddress(address){
//         this.address=address;
//     }
//     getaddress(address){
//         return this.address;
//     }
// }

// let customer01 = new customer("saman",12,"gampaha");
// console.log(customer01.getname());
// console.log(customer01.getage());
// console.log(customer01.getaddress());




//TO GET RANDOM NUMBERS
console.log(document.getElementById("numbertxt"));
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

document.getElementById("button1").addEventListener("click", button);

function button() {
    let number = parseInt(document.getElementById("numbertxt").value);
    
    if (isNaN(number)) {
        document.getElementById("textx").innerHTML = "Please enter a valid number";
        document.getElementById("textx").style.color = "red";
        return;
    }

    if (number === randomNumber) {
        document.getElementById("textx").innerHTML = "You are correct";
        document.getElementById("textx").style.color = "green";
    } else if (number > randomNumber) {
        document.getElementById("textx").innerHTML = "Your guess is higher than the number";
        document.getElementById("textx").style.color = "orange";
    } else {
        document.getElementById("textx").innerHTML = "Your guess is lower than the number";
        document.getElementById("textx").style.color = "blue";
    }
}




