var canvas = document.getElementById('image');
var ctx = canvas.getContext('2d');
var images = [];
var maxHeight = 450;
var maxwidth =450;
var offSet = 20;
var isHorizontDirection = true;


document.querySelector(".inputs").addEventListener('change', fileSelected, false);
document.querySelector(".choiceRadio").addEventListener('change', radio, false);

function radio(e) {
    console.log(e);
    isHorizontDirection=!isHorizontDirection;
   drawImages();
}

function fileSelected(e) {
    var selector = e.target;
    var index = parseInt(selector.dataset["index"]);
    var img = new Image;
    img.onload = function read() {
        images[index] = img;
        drawImages();
    }
    img.src = URL.createObjectURL(selector.files[0]);
}



function drawImages() {
    if(isHorizontDirection){
        horizontal();
    }
    else{
        vertical();
    }

}

function horizontal() {
    var w = 0;
    var full = 0;
    for (var img of images) {
        if (!img) {
            continue;
        }
        let ratio = img.width / img.height;
        let width = maxHeight * ratio;

        full += width + offSet;
    }
    canvas.height = maxHeight;
    canvas.width = full;
    for (var img of images) {
        if (!img) {
            continue;
        }
        let ratio = img.width / img.height;
        let width = maxHeight * ratio;
        ctx.drawImage(img, w, 0, width, maxHeight);
        w += width + offSet;
    }

}

function vertical() {
    var h = 0;
    var full = 0;
    for (var img of images) {
        if (!img) {
            continue;
        }
        let ratio = img.height / img.width;
        let height = maxHeight * ratio;

        full += height + offSet;
    }
    canvas.width = maxwidth;
    canvas.height = full;
    for (var img of images) {
        if (!img) {
            continue;
        }
        let ratio = img.height / img.width;
        let height = maxwidth * ratio;
        ctx.drawImage(img, 0, h, maxwidth, height);
        h += height + offSet;
    }

}
