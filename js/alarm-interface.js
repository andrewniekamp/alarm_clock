$(document).ready(function(){
  var currentTime = moment();
  var alarm = undefined;
  var isSet = false;

  setInterval(function(){
    currentTime = moment().format("hh:mm");
    $('#time').text(currentTime);
    if (currentTime === alarm && isSet === true) {
      alert("Your time is up.");
      isSet = false;
    }
  }, 1000);

  $('#alarm-clock-form').submit(function(event) {
    event.preventDefault();
    isSet = true;
    alarm = $("#set-alarm").val();
  });


});
