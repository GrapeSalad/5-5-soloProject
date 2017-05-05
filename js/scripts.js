//------------------------------------- BUSINESS LOGIC
var soloResult = function(soloInput) {
  debugger;
  var soloInputArray = [];
  var i = 0;
  for(i; i <= soloInput; i++){
    // soloInputArray.push(i);
    if (((soloInput % 15) === 0) && (soloInput !== 3 || soloInput !== 5)){
      soloInputArray.push("ping-pong");
    }
    else if((soloInput % 5) === 0) {
      soloInputArray.push("pong");
    }
    else if((soloInput % 3) === 0){
      soloInputArray.push("ping");
    }
    else {
      soloInputArray.push(i);
    }
  }
  return soloInputArray;
};


//------------------------------------- USER INTERFACE LOGIC
$(function(){
  $("#soloForm").submit(function(event){
    event.preventDefault();
    var soloInput = parseInt($("input#soloInput").val());
    $("#output").append(soloResult(soloInput));
  })
})
