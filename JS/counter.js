let increaseBtn = document.querySelectorAll("#increase")[0],
    decreaseBtn = document.querySelectorAll("#decrease")[0],
    displayCount = document.querySelectorAll("#count")[0],
    clickerCount = 1;


increaseBtn.addEventListener("click",function(){
    if (clickerCount >= 99) {
        clickerCount = 100;
    } else {
        clickerCount+=1;
    }
    displayCount.innerHTML = clickerCount + ' шт.';
});

decreaseBtn.addEventListener("click",function(){
    if (clickerCount <= 2) {
        clickerCount = 1;
    } else {
        clickerCount-=1;
    }
    displayCount.innerHTML = clickerCount  + ' шт.';
});