function hideInfo(){
    $("#activity").hide();
    $("#type").hide();
    $("#participants").hide();
    $("#price").hide();
}

function loadInfo(data){
    $("#activity").hide();
    $("#activity").text(data['activity']);
    $("#activity").fadeIn();
     $("#type").hide();
    $("#type").text(data['type']);
    $("#type").fadeIn();
    $("#participants").hide();
    $("#participants").text(data['participants']);
    $("#participants").fadeIn();
    $("#price").hide();
    $("#price").text(data['price']);
    $("#price").fadeIn(); 

}