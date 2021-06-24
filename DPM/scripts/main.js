var loc1;
var loc2;
var input1;
var input2;
var input3;

function geloc1(){
	navigator.geolocation.getCurrentPosition(function(position) {
    loc1 = position.coords.latitude;
    document.getElementById('input1').value = loc1;
})
}

function geloc2(){
navigator.geolocation.getCurrentPosition(function(position) {
  loc2 = position.coords.latitude;
  document.getElementById('input2').value = loc2;

	var locat = loc1 - loc2;
	document.getElementById('input3').value = locat
})
}
