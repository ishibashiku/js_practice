pi1 = Math.PI;
pi2 = Math.floor(pi1);
pi3 = point(pi1, 2);

function point(num, digit){
    var time = Math.pow(10, digit);
    return Math.floor(num*time)/time;
}

document.getElementsByClassName('pi')[0].textContent = pi1;
document.getElementsByClassName('pi')[1].textContent = pi2;
document.getElementsByClassName('pi')[2].textContent = pi3;
