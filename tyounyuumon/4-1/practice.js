document.getElementById('form').onsubmit = function(){
    // nameの値（word）でテキストボックスの値を取得する
    let word = document.getElementById('form').word.value;
    document.getElementById('output').textContent = word;
    return false;
}
