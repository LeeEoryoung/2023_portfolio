
// phone number auto Hyphen 
const number = (target) => {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
}

// timer
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;

    document.getElementById("token_btn").style = "background-color: #9ab106; cursor: pointer;"
    document.getElementById("token_btn").setAttribute("disabled", "true");
    document.getElementById("token_timer_btn").style="background-color: #9ab106; color: #fff; cursor: pointer;text-transform: uppercase;border: none;padding: 7px 8px;"
    document.getElementById("token_timer_btn").removeAttribute("disabled");
    getTokenTimer();
}

// code
let interval;
function getTokenTimer(){
    let timer = 10;
    interval = setInterval(() => {
    if(timer >= 0){
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;

            document.getElementById("token_timer").innerText = minutes + ":" + String(seconds).padStart(2, "0");
            timer -= 1;
        } else {
            document.getElementById("token").innerText = "000000"; 
            document.getElementById("token_btn").style = "" ;
            document.getElementById("token_btn").setAttribute("disabled", "true");

            document.getElementById("token_timer").innerText = "3:00";
            document.getElementById("token_timer_btn").style = "";
            document.getElementById("token_timer_btn").setAttribute("disabled", "true");

            clearInterval(interval)
        }
    }, 1000);
}
// confirmed 

function getTokenTimerConfirm(){
    clearInterval(interval)
    document.getElementById("token_timer_btn").style = "background-color: #FFF; cursor: default;";
    document.getElementById("token_timer_btn").setAttribute("disabled", "true");
    document.getElementById("token_timer_btn").innerText = "confirmed";
    alert("Verification completed!");

    document.getElementById("signup_btn").style = "background-color: #9ab106; color: #fff; border: 1px solid #9ab106 ;cursor: pointer;"
    document.getElementById("signup_btn").removeAttribute("disabled");
}

// signup
function signup(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error_email").innerText = "Email is incorrect"
        isValid = false
    } else {
        document.getElementById("error_email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error_name").innerText = "Name is incorrect"
        isValid = false
    } else {
        document.getElementById("error_name").innerText = ""
    }

    if(password1 === ""){
        document.getElementById("error_password1").innerText = "Enter Password"
        isValid = false
    } else {
        document.getElementById("error_password1").innerText = ""
    }

    if(password2 === ""){
        document.getElementById("error_password2").innerText = "Enter Password"
        isValid = false
    } else {
        document.getElementById("error_password2").innerText = ""
    }

    if(password1 !== password2) {
        document.getElementById("error_password1").innerText = "Different Password"
        document.getElementById("error_password2").innerText = "Different Password"
        isValid = false
    }

    if(isValid === true){
        alert("Congratulations on joining😉")
    }
}