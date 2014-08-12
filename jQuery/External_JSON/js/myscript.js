$(document).ready(function() {

$.getJSON('data3.json' , function(data){
var output3 = "";
for (var i = 0; i <= data.links.length; i++){
	for (key in data.links[i]){
		if(data.links[i].hasOwnProperty(key)){
		 output3 += '<li>' +
		 '<a href = "' + data.links[i][key] + '">' 
		 + key + '</a>' + '</li>'
		}//
	}//for each object
}//for each array element

var list3 = document.getElementById('here3');
list3.innerHTML = output3;

//to refresh the list comment this out and see what happens 
//as the content is loading dynamically the list has to be updated using the following:

$( "#here3" ).listview("refresh")

});//get json
});//doc ready

