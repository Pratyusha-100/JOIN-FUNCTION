function get_Paragraph1(){
    var inputs=[];
    for(var i = 1 ; i <= 6 ; i++){
        inputs.push(document.getElementById("para1_imput_box" + i).value);
    }
    inputs.join(". ");
    document.getElementById("show_Paragraph1").innerHTML = inputs.join(". ");
}
function get_Paragraph2(){
    var inputs=[];
    for(var i = 1 ; i <= 6 ; i++){
        inputs.push(document.getElementById("para2_imput_box" + i).value);
    }
    inputs.join(". ");
    document.getElementById("show_Paragraph2").innerHTML = inputs.join(". ");
}