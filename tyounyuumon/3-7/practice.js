var monster = 100;
var damage;

window.alert('戦闘スタート');
while(monster>0){
    damage = Math.floor(Math.random()*30);
    window.alert('モンスターに'+damage+'の攻撃');
    monster = monster - damage;
}
window.alert('モンスターをやっつけた');
