// thumbクラスの要素の配列を取得してthumbに代入する
var thumb = document.querySelectorAll('.thumb');

for(i=0; i<thumb.length; i++){
    thumb[i].onclick = function(){
        document.getElementById('bigimg').src = this.dataset.image;
    }
}
