function colorCount(){
    window.countNum = 0;
    document.getElementById("main-flex").innerHTML = "";
    addColor(6);
}

function addColor(a){
    if(a > window.countNum){
        document.getElementById("main-flex").innerHTML += '<svg id="container-1" class="color-container" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="192" height="192" rx="32" fill="#f00" stroke="#ddd" stroke-width="1"/></svg>';
        window.countNum += 1;
        addColor(6);
    }
    updateColors(a);
}

function updateColors(a){
    
    color_1_r = hexToRgb(document.getElementById("colorPicker-1").value).r;
    color_1_g = hexToRgb(document.getElementById("colorPicker-1").value).g;
    color_1_b = hexToRgb(document.getElementById("colorPicker-1").value).b;

    color_2_r = hexToRgb(document.getElementById("colorPicker-2").value).r;
    color_2_g = hexToRgb(document.getElementById("colorPicker-2").value).g;
    color_2_b = hexToRgb(document.getElementById("colorPicker-2").value).b;

    var x = document.getElementsByClassName("color-container");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].getElementsByTagName("rect")[0].style.fill = "rgb("+ ((color_1_r / (a+(i+1-a))) + (color_2_r / (a-i))) +","+ ((color_1_g / (a+(i+1-a))) + (color_2_g / (a-i))) +","+ ((color_1_b / (a+(i+1-a))) + (color_2_b / (a-i))) +")";
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }