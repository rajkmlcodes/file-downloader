const inputBox = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener(click, e => {
    e.preventDefault();
    fetchFile(inputBox.value);
});

function fetchFile(url){
    fetch(url).then(res => Blob()).then(file => {
        lt
    })
}