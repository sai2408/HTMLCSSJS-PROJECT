var x = [];
var y = [];

function addnew(){
	var element = document.getElementById("container");
	element.style.display = "grid";
	var newElement = document.createElement("div");
	newElement.textContent = "Item Name";
	document.getElementById("container").appendChild(newElement);
	var newElement = document.createElement("div");
	newElement.textContent = "Item Price";
	document.getElementById("container").appendChild(newElement);
	for (var i=0;i<x.length; i++){
		var newElement = document.createElement("div");
		newElement.textContent = x[i];
		document.getElementById("container").appendChild(newElement);
		var newElement = document.createElement("div");
		newElement.textContent = y[i];
		document.getElementById("container").appendChild(newElement);
	}
	var newElement = document.createElement("div");
	newElement.textContent = "Total";
	document.getElementById("container").appendChild(newElement);
	var newElement = document.createElement("div");
	newElement.textContent = addall();
	document.getElementById("container").appendChild(newElement);
}
function addall(){
	s = 0
	for (var i=0; i<x.length; i++){
		s = s + y[i];
	}
	return s;
}

function storevalue(name,price){
	x.push(name);
	y.push(price);
}