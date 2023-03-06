let firstChosenBlock;
let secondChosenBlock;
let thereIsOneOpenNow = 0;
let firstPickedDataset = 0;
let secondPickedDataset = 0;
let dontpicknow = false;
let rot=360;

const blocks = document.querySelectorAll(".block");
const container =document.getElementById("container");





for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function () {

        if (blocks[i].dataset.open === "open") {
            console.log("this was already open ");
            return;
        }
        if (dontpicknow == true) {
            console.log('too fast');
            return;
        }
        blocks[i].firstChild.style.transform = "translateY(12vw)";
        if (thereIsOneOpenNow == 0) {
            firstChosenBlock = blocks[i];
            firstChosenBlock.dataset.open = "open";
        } else {
            secondChosenBlock = blocks[i];
            secondChosenBlock.dataset.open = "open";
        }
        addToCompare();
    })
}


function addToCompare() {
    if (thereIsOneOpenNow == 0) {
        firstPickedDataset = firstChosenBlock.dataset.num;
        thereIsOneOpenNow++;
        console.log('first pick');
    } else {
        console.log('compare used');
        compare();

    }
}


function compare() {
    dontpicknow = true;
    secondPickedDataset = secondChosenBlock.dataset.num;
    if (firstPickedDataset === secondPickedDataset) {
        console.log('there is a match');
        thereIsOneOpenNow--;
        dontpicknow = false;
    } else {
        thereIsOneOpenNow--;
        console.log('no match');
        setTimeout(() => {
            firstChosenBlock.firstChild.style.transform = "translateY(0vh)";
            secondChosenBlock.firstChild.style.transform = "translateY(0vh)";
            firstChosenBlock.dataset.open = "closed";
            secondChosenBlock.dataset.open = "closed";
            dontpicknow = false;
        }, 1000);


    }

}
function mixing () {
    for (let i = 0; i < blocks.length; i++) {
        let position = Math.floor(Math.random() * 10);
        blocks[i].style.order = position;
    }
    dontpicknow = false;
};



function mixPositions() {
    dontpicknow = true;
    thereIsOneOpenNow=0;
    container.style= 'transform: rotateY('+ rot +'deg)';
    rot +=360;
    console.log('shuffle');
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].firstChild.style.transform = "translateY(0vh)";
        blocks[i].dataset.open = "closed";

    }
    setTimeout(mixing, 2000);
};



const shuffleButton = document.getElementById("btn");
shuffleButton.addEventListener("click", mixPositions);