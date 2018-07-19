/*
 * Implement all your JavaScript in this file!
 */
var recent=null
var operator=null
var switcher=null;
var previous=null;

function model(button){
    var Model=$("#display").val();
  //  console.log(Model);
    $("#display").val(Model+button);
}

$(".cls").click(function(event){
    if(operator=="="){
            operator=null;
            recent=null;
        $("#display").val("");
  }
    if(!switcher){
        model($(this).attr("value"));
    } else{
        $("#display").val("");
        model($(this).attr("value"));
        switcher=false;
    }
});

$("#equalsButton").click(equals);
var equals=function(event){
    var Model=$("#display").val()
    if(Model==recent && switcher){
        return;
    }
    var operation;
    if (operator=="+"){
         operation=Number(recent)+Number(Model);
        $("#display").val(operation);
    } else if (operator=="*"){
         operation=Number(recent)*Number(Model);
        $("#display").val(operation);
    } else if (operator=="-"){
         operation=Number(recent)-Number(Model);
        $("#display").val(operation);
    } else if (operator=="/"){
         operation=Number(recent)/Number(Model);
        if(Model=="0"){
            $("#display").val("Inf");
            return;
        }
        $("#display").val(operation);
    }  else if (operator=="="){
        operator=previous;
        equals(event);
        return;
    } else{
        return;
    }
    previous=operator;
    operator="=";
    load();
 }

$("#clearButton").click(function(event){
    operator=null;
    recent=null;
    $("#display").val("");

})

function load(){
    
    var optimst= $("#display").val();
    //console.log(recent);
    //console.log(operator);
    //console.log(optimst);


    if(recent && operator && operator!="=" && optimst!=""){
        console.log("Hum");
        equals(event);
    }
    recent=$("#display").val();
    switcher=true;
}

$("#addButton").click(function(event){
    load()
    operator="+";
})
$("#subtractButton").click(function(event){
    load()
    operator="-";
})
$("#multiplyButton").click(function(event){
    load()
    operator="*";
})
$("#divideButton").click(function(event){
    load()
    operator="/";
})


