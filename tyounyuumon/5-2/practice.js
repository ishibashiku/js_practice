// 初期表示でプルダウンの選択箇所をページにあわせる
var lang = document.querySelector('html').lang;

var opt;
if(lang==='ja'){
    opt = document.querySelector('option[value="index.html"]');
}else if(lang==='en'){
    opt = document.querySelector('option[value="us.html"]');
}else if(lang==='zh'){
    opt = document.querySelector('option[value="ch.html"]');
}

opt.selected = true;

// プルダウンが選択されたときの処理
document.getElementById('form').onchange = function(){
    location.href = document.getElementById('form').select.value;
}
