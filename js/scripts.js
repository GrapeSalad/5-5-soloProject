//------------------------------------- BUSINESS LOGIC
var soloInputArray = function(soloInput) {
  var placeholderArray = [];
  for(var i = 1; i <= soloInput; i ++){
    placeholderArray.push(" " + i);
  }
  var resultArray = placeholderArray.map(function(i){
    if(((i % 15) === 0) && (i !== 3 || i !== 5)){
      return " ping-pong";
    }
    else if((i % 5) === 0) {
      return " pong";
    }
    else if ((i % 3) === 0){
      return " ping";
    }
    else {
      return i;
    }
  });
  return resultArray;
};



//------------------------------------- USER INTERFACE LOGIC
$(function(){
  $("#soloForm").submit(function(event){
    event.preventDefault();
    $("#output").children().remove();
    $("ul#output").append("<li>" + soloInputArray(parseInt($("input#soloInput").val())) + "</li>");
  })
})
