function myFunction() {
	alert(document.getElementById("fundMe").checked);
	
	// Check browser support
	if ( typeof (Storage) !== "undefined") {
		// Store
		localStorage.setItem("mortgageOperation", document.getElementById("fundMe").checked?"FundMe":"FundOther");
	} else {
		alert("Sorry, your browser does not support Web Storage...");
	}
	window.location.href="mortgageAction.html";
}