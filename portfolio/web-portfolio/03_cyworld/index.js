const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src","home.html");
    document.getElementById("menu_home").style = "color: #000; background-color: #fff;"
    document.getElementById("menu_juckbox").style = "color: #fff; background-color: #298eb5;"
    document.getElementById("menu_game").style = "color: #fff; background-color: #298eb5;"

}
const menuJuckbox = () => {
    document.getElementById("contentFrame").setAttribute("src","juckbox.html");
    document.getElementById("menu_juckbox").style = "color: #000; background-color: #fff;"
    document.getElementById("menu_home").style = "color: #fff; background-color: #298eb5;"
    document.getElementById("menu_game").style = "color: #fff; background-color: #298eb5;"
}
const menuGame = () => {
    document.getElementById("contentFrame").setAttribute("src","game.html")
    document.getElementById("menu_game").style = "color: #000; background-color: #fff;"
    document.getElementById("menu_home").style = "color: #fff; background-color: #298eb5;"
    document.getElementById("menu_juckbox").style = "color: #fff; background-color: #298eb5;"
}