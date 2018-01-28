var goal = new Date;
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

// Dateオブジェクトを渡すと、現在時間との差分を表示するメソッド
function countdown(due){
    var now = new Date;
    var rest = due.getTime() - now.getTime();
    console.log(rest);
    var sec = Math.floor(rest/1000)%60;
    var min = Math.floor(rest/1000/60)%60;
    var hour = Math.floor(rest/1000/60/60)%24;
    var day = Math.floor(rest/1000/60/60/24);
    var count = [day, hour, min, sec];
    return count;
}

// 1秒ごとにrecalメソッドを呼ぶメソッド
function refresh(){
    setTimeout(recal, 1000);
}

// countタグの要素に対して、残り時分秒を設定するメインのメソッド
function recal(){
    var countdowntime = countdown(goal);
    var time = countdowntime[1] + '時間' + countdowntime[2]  + '分' + countdowntime[3] + '秒';
    document.getElementById('count').textContent = time;
    refresh();
}

recal();
