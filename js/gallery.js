$(document).ready(function() {

	var bigImage = $("#image_container img");
	var images = [];
	var currentIndex = 0;

	$(".art_elem a").click(function(ev) {
		var id = "#g" + $(this).parent("div").attr("id");
		images = $(id + ".album img");
		var image = images[currentIndex];
		if (image === undefined) {
			return false;
		}
		images.show();
		bigImage.attr("src", $(image).attr("data-full"));

		images.click(function(ev) {
			currentIndex = $(this).index();	
			var imgSrc = $(this).attr("data-full");	
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", "");
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
			return false;
		});

		$("#gallery").fadeIn(1000);
		return false;
	});

	$("#gallery").click(function(ev) {
		currentIndex = 0;
		bigImage.attr("src", "");
		images.hide();
		$("#gallery").hide();	
		return false;
	});


	bigImage.click(function(ev) {
		currentIndex = (currentIndex + 1) % images.length;
		var currentImg = images[currentIndex];
		if (currentImg != undefined) {
			var imgSrc = $(currentImg).attr("data-full");
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", "");
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
		}
		return false;
	});
});
