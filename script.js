console.log('start');

var variant = 6 % 6 + 4;
document.getElementById("variant").innerHTML = variant;
console.log(variant);

var rez = document.getElementById('var_x');
function calc_click() {
    var a = document.getElementById('var_a').value;
    var b = document.getElementById('var_b').value;
    if(a<0 || b<0){
        var c="  Катет не може бути від'ємним числом! Введіть інше значення.";
    }
    else if(a==0 || b==0){
        var c="  Катет не може бути рівним нулю! Введіть інше значення.";
    }
    else{
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    rez.innerHTML = c;
}