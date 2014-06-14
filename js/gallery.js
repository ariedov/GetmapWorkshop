window.onload = function() {
	$("#sculpture.art_elem a").click(function(ev) {
		$("#gallery").fadeIn(1000);
		return false;
	});

	$("#gallery").click(function(ev) {
		$("#gallery").hide();	
		return false;
	});

	$(".album a img").click(function(ev) {
		var bigImage = $("#image_container img");
		var imgSrc = $(this).attr("src");	
		bigImage.fadeOut(400, function() {
			bigImage.attr("src", imgSrc);
			bigImage.fadeIn();
			return false;
		});
		return false;
	});
}
