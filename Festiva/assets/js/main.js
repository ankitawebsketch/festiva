// ===============================
// FESTIVA TEXT GENERATOR SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function(){

const textInput = document.getElementById("textInput");
const customText = document.getElementById("customText");
const fontSize = document.getElementById("fontSize");
const fontColor = document.getElementById("fontColor");

// Safety check (so other pages don't break)
if(textInput && customText){

    // Text change
    textInput.addEventListener("input", function(){
        customText.innerText = this.value;
    });

}

// Font size change
if(fontSize && customText){
    fontSize.addEventListener("input", function(){
        customText.style.fontSize = this.value + "px";
    });
}

// Font color change
if(fontColor && customText){
    fontColor.addEventListener("input", function(){
        customText.style.color = this.value;
    });
}

});

function downloadImage(){

const captureArea = document.getElementById("captureArea");

if(!captureArea) return;

html2canvas(captureArea).then(canvas => {
    const link = document.createElement("a");
    link.download = "festiva-diwali-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

}