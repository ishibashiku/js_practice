function total(price){
    var totalprice =  price*1.08;
    return totalprice;
}

var message = '合計は'+total(500)+'です';
document.getElementById('output').textContent = message;
console.log(message);
