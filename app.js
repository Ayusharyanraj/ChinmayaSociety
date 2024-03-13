let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carDom = document.getElementById('.car');
let listItemDom = document.getElementById('.car .list');
let tembnailDom = document.getElementById('.tembnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.car .list .item');
    let tembnail = document.querySelectorAll('.car .tembnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        tembnailDom.appendChild(itemtembnail[0]);
        carDom.classList.add('next');
    } else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        tembnailDom.prepend(tembnail[positionLastItem]);
        carDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carDom.classList.remove('next');
        carDom.classList.remove('prev');
    },timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    },timeAutoNext);

}