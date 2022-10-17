// const container = document.querySelector(".container");
// const error = documetn.querySelector(".error");
const date1 = new Date();
const year = date1.getFullYear();
const day = date1.getDate();
const month = date1.getMonth();
const btn = document.querySelector(".btn")
function getAge(){
    btn.addEventListener("click",displayAge)
    // return document.querySelector("#dob").value;
}
getAge()
function calcAge(){ 
    const dob = document.querySelector("#dob").value;
    // console.log(dob)
    const difAge = Date.now() - new Date(dob).getTime()
    const ageDt = new Date(difAge)
    // console.log(difAge)
    // console.log(ageDt)
 
    return ageDt;
}

function displayAge(){
    // console.log(calcAge())
    const year = document.querySelector(".age #years").innerHTML = Math.abs(calcAge().getUTCFullYear()-1970 );
    const month = document.querySelector(".age #months").innerHTML =(calcAge().getUTCMonth());
    const day = document.querySelector(".age #days").innerHTML = (calcAge().getUTCDate());
}
