//------------------------------------- BUSINESS LOGIC
var soloInputArray = function(soloInput) {
  var testArray = [];
  for(var i = 1; i <= soloInput; i ++){
    testArray.push(i);
  }
  var resultArray = testArray.map(function(i){
    
    if(((i % 15) === 0) && (i !== 3 || i !== 5)){
      return "ping-pong";
    }
    else if((i % 5) === 0) {
      return "pong";
    }
    else if ((i % 3) === 0){
      return "ping";
    }
    else {
      return i;
    }
  });
  console.log(resultArray);
  return resultArray;
};



//------------------------------------- USER INTERFACE LOGIC
$(function(){
  $("#soloForm").submit(function(event){
    event.preventDefault();
    var soloInput = parseInt($("input#soloInput").val());
    $("ul#output").append("<li>" + soloInputArray(soloInput) + "</li>");
  })
})
