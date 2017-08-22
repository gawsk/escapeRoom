function appendNumber(val) {
	document.getElementById('d').value+=val;
}

function clearItAll() {
	document.getElementById('d').value='';
}

function submitItAll() {
	if (document.getElementById('d').value == "1234") {
		show('part2', 'part1');
		document.getElementById('part3').style.display='none';
		clearItAll();
	} else if (document.getElementById('d').value == "HELPID") {
		//show('part3', 'part2');
		document.getElementById('d').value='YOU DID IT CONGRATS!!!!!!!!!';
		document.getElementById('part3').style.display='block';
	}
	
}

function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}