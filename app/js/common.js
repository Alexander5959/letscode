$(function() {

	var topBtn = document.getElementById("top-btn");
	window.onscroll=function () {
		if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        	topBtn.style.display = "block";
    	} else {
        	topBtn.style.display = "none";
    	}
    	setTimeout(function () {
    		topBtn.style.display = "none";
    	}, 3000);
	}
	topBtn.onclick = function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

});

