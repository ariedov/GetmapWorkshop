$(document).ready(function() {
	var $graphics = $(".ggraphics").colorbox({rel: "ggraphics"});
	$("#graphics a").click(function(e) {
		e.preventDefault();
		$graphics.eq(0).click();
	});

	var $molding = $(".gmolding").colorbox({rel: "gmolding"});
	$("#molding a").click(function(e) {
		e.preventDefault();
		$molding.eq(0).click();
	});

	var $painting = $(".gpainting").colorbox({rel: "gpainting"});
	$("#painting a").click(function(e) {
		e.preventDefault();
		$painting.eq(0).click();
	});

	var $design = $(".gdesign").colorbox({rel: "gdesign"});
	$("#design a").click(function(e) {
		e.preventDefault();
		$design.eq(0).click();
	});

	var $art = $(".gart").colorbox({rel: "gart"});
	$("#art a").click(function(e) {
		e.preventDefault();
		$art.eq(0).click();
	});

	$sculpture = $(".gsculpture").colorbox({rel: "gsculpture"});
	$("#sculpture a").click(function(e) {
		e.preventDefault();
		$sculpture.eq(0).click();
	});

	$wpaint = $(".gwpaint").colorbox({rel: "gwpaint"});
	$("#wpaint a").click(function(e) {
		e.preventDefault();
		$wpaint.eq(0).click();
	});
});
