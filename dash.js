let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale= document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let downloaod = document.getElementById("download");
let img = document.getElementById("img");
let reset =document.querySelector('span');
let imgbox =document.querySelector('.img-box');
window.onload = function() {
    downloaod.style.display = 'none';
    reset.style.display = 'none';
    imgbox.style.display = 'none';

}
//red image 
upload.onchange = function(){
    downloaod.style.display = 'block';
    reset.style.display = 'block';
    imgbox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }


}
/*saturate.addEventListener("input",function(){
    img.style.filter =`saturate(${saturate.value}%)`
})
contrast.addEventListener("input",function(){
    img.style.filter =`contrast(${contrast.value}%)`
})*/
// تحديد العنصر بواسطة الرمز الصحيح (قد يكون الرمز مختلفاً)
let filters = document.querySelectorAll("ul li input");

filters.forEach(input => {
    input.addEventListener('input', function () {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value}%)
            blur(${blur.value}px)
            hue-rotate(${huerotate.value}deg)
        `;
    });
});





