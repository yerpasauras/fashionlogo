$(document).ready(function(){

var taxpaid = [];
var newPercent = [];

// Taxes Paid
$("#taxesPaidinput").on("keypress", function(enter){
    if(enter.keyCode == 13){
        var taxespaidinput = $('input[name="taxesPaid"]').val();             
        if(isNaN(taxespaidinput) || taxespaidinput == ""){
            $("#taxesPaid").effect("shake");
        }
    else{
        taxpaid.push(taxespaidinput);
        $("#taxPercent").append(newPercent[0]);
        $("#taxesPaidinput").val(""); 
        $("#taxesPaidinput").hide();
    		$("#taxesPaid, #taxPercent, #taxContributions").toggle();
        newPercent[0] = parseInt($("#taxPercent").text());
         $("#taxPercent2").slideToggle();
    }
}
});

$("#begin").on("click", function(){
        var taxespaidinput = $('input[name="taxesPaid"]').val();             
        if(isNaN(taxespaidinput) || taxespaidinput == ""){
            $("#taxesPaid").effect("shake");
        }
    else{
        taxpaid.push(taxespaidinput);
        $("#taxPercent").append(newPercent[0]);
        $("#taxesPaidinput").val(""); 
        $("#taxesPaidinput").hide();
    		$("#taxesPaid, #taxPercent, #taxContributions").toggle();
        newPercent[0] = parseInt($("#taxPercent").text());
        $("#begin").hide();
        $("#taxPercent2").slideToggle();
    }
});


// Categories 
$("#addpensions").on("click", function(){
    var pensionpercent = $('input[name="pensions"]').val();
    if(pensionpercent > newPercent[0] || pensionpercent == "" || isNaN(pensionpercent)|| pensionpercent == " "){
    $("#pensions").effect("shake"); 
    $("#pensioninput").val("");    
    }
    else{    
    $("#pensionPercent").append(pensionpercent);
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]-parseInt(pensionpercent);
    $("#taxPercent").append(newPercent[0]);
    $("#pensioninput").val(""); 
    $("#pensioninput, #addpensions").hide();
    $("#subpensions, .afterPercent").show();
    $("#pensions h1").toggle();
    $("#nextarrow").fadeIn();
    }
});

$("#subpensions").on("click", function(){
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]+parseInt($("#pensionPercent").text());
    $("#taxPercent").append(newPercent[0]);
    $("#pensioninput, #addpensions").show();
    $("#pensionPercent").show();
    $("#pensionPercent").empty();
    $("#subpensions, .afterPercent").hide();
    $("#pensions h1").toggle();
});

$("#addhealthcare").on("click", function(){
    var healthcarepercent = $('input[name="healthcare"]').val();
    if(healthcarepercent > newPercent[0] || healthcarepercent == "" || isNaN(healthcarepercent)|| healthcarepercent == " "){
    $("#healthcare").effect("shake"); 
    $("#healthcareinput").val("");    
    }
    else{    
    $("#healthcarePercent").append(healthcarepercent);
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]-parseInt(healthcarepercent);
    $("#taxPercent").append(newPercent[0]);
    $("#healthcareinput").val(""); 
    $("#healthcareinput, #addhealthcare").hide();
    $("#subhealthcare, .afterPercent").show();
    $("#healthcare h1").toggle();
    }
});

$("#subhealthcare").on("click", function(){
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]+parseInt($("#healthcarePercent").text());
    $("#taxPercent").append(newPercent[0]);
    $("#healthcareinput, #addhealthcare").show();
    $("#healthcarePercent").show();
    $("#healthcarePercent").empty();
    $("#subhealthcare, .afterPercent").hide();
     $("#healthcare h1").toggle();
});

$("#addeducation").on("click", function(){
    var educationpercent = $('input[name="education"]').val();
    if(educationpercent > newPercent[0] || educationpercent == "" || isNaN(educationpercent)|| educationpercent == " "){
    $("#education").effect("shake"); 
    $("#educationinput").val("");    
    }
    else{    
    $("#educationPercent").append(educationpercent);
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]-parseInt(educationpercent);
    $("#taxPercent").append(newPercent[0]);
    $("#educationinput").val(""); 
    $("#educationinput, #addeducation").hide();
    $("#subeducation, .afterPercent").show();
    $("#education h1").toggle();
    }
});

$("#subeducation").on("click", function(){
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]+parseInt($("#educationPercent").text());
    $("#taxPercent").append(newPercent[0]);
    $("#educationinput, #addeducation").show();
    $("#educationPercent").show();
    $("#educationPercent").empty();
    $("#subeducation, .afterPercent").hide();
     $("#education h1").toggle();
});

$("#adddefense").on("click", function(){
    var defensepercent = $('input[name="defense"]').val();
    if(defensepercent > newPercent[0] || defensepercent == "" || isNaN(defensepercent)|| defensepercent == " "){
    $("#defense").effect("shake"); 
    $("#defenseinput").val("");    
    }
    else{    
    $("#defensePercent").append(defensepercent);
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]-parseInt(defensepercent);
    $("#taxPercent").append(newPercent[0]);
    $("#defenseinput").val(""); 
    $("#defenseinput, #adddefense").hide();
    $("#subdefense, .afterPercent").show();
    $("#defense h1").toggle();
    }
});

$("#subdefense").on("click", function(){
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]+parseInt($("#defensePercent").text());
    $("#taxPercent").append(newPercent[0]);
    $("#defenseinput, #adddefense").show();
    $("#defensePercent").show();
    $("#defensePercent").empty();
    $("#subdefense, .afterPercent").hide();
     $("#defense h1").toggle();
});

$("#addwelfare").on("click", function(){
    var welfarepercent = $('input[name="welfare"]').val();
    if(welfarepercent > newPercent[0] || welfarepercent == "" || isNaN(welfarepercent)|| welfarepercent == " "){
    $("#welfare").effect("shake"); 
    $("#welfareinput").val("");    
    }
    else{    
    $("#welfarePercent").append(welfarepercent);
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]-parseInt(welfarepercent);
    $("#taxPercent").append(newPercent[0]);
    $("#welfareinput").val(""); 
    $("#welfareinput, #addwelfare").hide();
    $("#subwelfare, .afterPercent").show();
    $("#welfare h1").toggle();
    }
});

$("#subwelfare").on("click", function(){
    $("#taxPercent").empty();
    newPercent[0] = newPercent[0]+parseInt($("#welfarePercent").text());
    $("#taxPercent").append(newPercent[0]);
    $("#welfareinput, #addwelfare").show();
    $("#welfarePercent").show();
    $("#welfarePercent").empty();
    $("#subwelfare, .afterPercent").hide();
     $("#welfare h1").toggle();
});


// Arrows
$("#nextarrow").on("click", function(){
var next = $(".slide:visible").hide().next(".slide");
$(next).fadeIn();
if($(".slide:last").is(":visible")){
$("#nextarrow").fadeOut();
}
$("#prevarrow").fadeIn();
});

$("#prevarrow").on("click", function(){
var prev = $(".slide:visible").hide().prev(".slide");
if(prev.length < 1){
prev = $(".slide:first");
}
$(prev).fadeIn();
if($(".slide:first").is(":visible")){
$("#prevarrow").fadeOut();
}
$("#nextarrow").fadeIn();
});

});
