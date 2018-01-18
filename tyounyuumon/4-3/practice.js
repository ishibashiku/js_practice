var music =['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'II'];

function adjust(num, target){
    var StNum = String(num);
    while(StNum.length<target){
        StNum = '0' + StNum;
    }
    return StNum;
}

for(i=0; i<music.length; i++){
    musiclist = document.createElement('p');
    musiclist.textContent = adjust(i+1, 2) + '.' + music[i];
    document.getElementById('list').appendChild(musiclist);
}
