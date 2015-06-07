$(document).ready(function() {

	var bigImage = $("#image_container img");
	var imageCaption = $("#image_caption p");
	var images = [];
	var currentIndex = 0;

	$("#image_caption").click(function() {
		return false;
	});

	$(".art_elem a").click(function(ev) {
		var id = "#g" + $(this).parent("div").attr("id");
		images = $(id + ".album img");
		var image = images[currentIndex];
		if (image === undefined) {
			return false;
		}
		images.show();
		bigImage.attr("src", $(image).attr("data-full"));
		imageCaption.text($(image).attr("data-caption"));

		images.click(function(ev) {
			currentIndex = $(this).index();	
			var imgSrc = $(this).attr("data-full");	
			bigImage.fadeOut(400, function() {
				bigImage.attr('src','data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAA‌​LAAAAAABAAEAAAICRAEAOw%3D%3D');
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
		bigImage.attr('src','data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAA‌​LAAAAAABAAEAAAICRAEAOw%3D%3D');
		images.hide();
		$("#gallery").hide();	
		return false;
	});


	bigImage.click(function(ev) {
		currentIndex = (currentIndex + 1) % images.length;
		var currentImg = images[currentIndex];
		if (currentImg != undefined) {
			var imgSrc = $(currentImg).attr("data-full");
			var imgCaption = $(currentImg).attr("data-caption");
			bigImage.fadeOut(400, function() {
				bigImage.attr('src','data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAA‌​LAAAAAABAAEAAAICRAEAOw%3D%3D');
				bigImage.attr("src", imgSrc);
				imageCaption.text(imgCaption);
				bigImage.fadeIn();
				return false;
			});
		}
		return false;
	});
});
