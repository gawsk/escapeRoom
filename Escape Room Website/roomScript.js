function appendNumber(val) {
	document.getElementById('d').value+=val;
}

function clearItAll() {
	document.getElementById('d').value='';
}

function submitItAll() {
	if (document.getElementById('d').value == "1234") {
		document.getElementById('d').value = "YESYESYESYES";
	} else {
		clearItAll();
	}
}