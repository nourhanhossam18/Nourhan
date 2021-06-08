var saveUserinput = prompt("hello! who are you? please introduce yourself");

console. log(saveUserinput);

document.getElementById("userlink").innerText = saveUserinput ;

//tooltip
/*tooltip*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })