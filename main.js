const arrowRight = document.querySelector(".gallary__icon-r");
const arrowLeft = document.querySelector(".gallary__icon-l");
const sliderItem = document.querySelectorAll(".gallary__container-item");
const slImg = ["sl1.jpg","sl2.jpg","sl3.jpg","sl4.jpg","sl5.jpg","sl6.jpg","sl7.jpg","sl8.jpg","sl9.jpg"];
const wayToSlImg = "./assets/img/sliderImg/";
const headLogo = document.querySelector(".header__logo-img");
let i = 0;

//Make Slider
sliderItem[i+1].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+1]}" alt="1">`;
sliderItem[i+2].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+2]}" alt="1">`;
sliderItem[i].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i]}" alt="1">`;


let scrRight = () => {
    if (i<slImg.length-1) {
    i++;
    } else {
        i = 0;
    }
    sliderItem[0].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i]}" alt="1">`;
    sliderItem[1].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+1]}" alt="1">`;
    sliderItem[2].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+2]}" alt="1">`;
}

let scrLeft = () => {
    if (i>0) {
    i--;
    } else {
        i = slImg.length-1;
    }
    sliderItem[0].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i]}" alt="1">`;
    sliderItem[1].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+1]}" alt="1">`;
    sliderItem[2].innerHTML = `<img class= "gallary-img" src="${wayToSlImg}${slImg[i+2]}" alt="1">`;
}

arrowRight.addEventListener("click", scrRight);
arrowLeft.addEventListener("click", scrLeft);

//Button UP
console.log(document.body.scrollHeight);

const HeadAnimLogo = () => {
    }

HeadAnimLogo();






