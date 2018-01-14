let hour = new Date().getHours();
var message;

if(hour>=19 && hour<21){
    message = 'お弁当30%オフ';
}else if(hour>=9 && hour<10 || hour>=15 && hour<16){
    message = 'お弁当一個買ったらおまけします！';
}else{
    message = 'お弁当はいかがですか？';
}

window.alert(message);
