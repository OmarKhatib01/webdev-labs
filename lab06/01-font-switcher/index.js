const makeBigger = () => {
   changeFontSize(document.querySelector("div.content"), 1);
   changeFontSize(document.querySelector("h1"), 1);

};

const makeSmaller = () => {
   changeFontSize(document.querySelector("div.content"), -1);
   changeFontSize(document.querySelector("h1"), -1);
};

const changeFontSize = (elem, change) => {
   currSize = parseFloat(window.getComputedStyle(elem, null).getPropertyValue('font-size'));
   elem.style.fontSize = (currSize + change) + 'px';
}



document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
