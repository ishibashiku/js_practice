var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

// 初期化
var current = 0;
var imgsrc;

setCurrentpage(current);

function setCurrentpage(num){
var currentpage = num + 1;
var page = currentpage + '/' + images.length;
document.getElementById('page').textContent = page;
}

document.getElementById('next').onclick = function(){
    if(current !== images.length -1){
        current++;
    }
    setCurrentpage(current);
    imgsrc = './_common/images/' + images[current];
    document.getElementById('main_image').src = imgsrc;
}

document.getElementById('prev').onclick = function(){
    if(current !== 0){
        current--;
    }
    setCurrentpage(current);
    imgsrc = './_common/images/' + images[current];
    document.getElementById('main_image').src = imgsrc;
}
