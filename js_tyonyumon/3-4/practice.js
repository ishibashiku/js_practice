let answer = parseInt(window.prompt('0から5までの数を入力してね'));
let number = Math.floor(Math.random()*5);
let message;
if(answer===number){
    message = 'あたり！';
}else if(answer<number){
    message = 'もっとおおきい！';
}else if(answer>number){
    message = 'もっとちいさい！';
}else{
    message = '1から5までの数字を入力してね！';
}

window.alert(message);

;
