function colorCount(){
    window.countNum = 0;
    document.getElementById("main-flex").innerHTML = "";
    addColor(Number(document.getElementById("input-slider").value));
}

function addColor(a){
    if(a > window.countNum){
        document.getElementById("main-flex").innerHTML += '<svg id="container-1" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" fill="#f00"/></svg>';
        window.countNum += 1;
        addColor(Number(document.getElementById("input-slider").value));
    }
    updateColors(a);
}

function updateColors(a){
    console.log(document.getElementById("colorPicker-1").value);
}