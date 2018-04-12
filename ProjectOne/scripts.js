

// $("#nav-1").click(function(){
// 	// update page for button one
// 	console.log("button one was pressed");
// 	$(location).attr('href',"./blog/index.html");
// });

// $("#button-two").click(function(){
// 	// update page for button one
// 	console.log("button two was pressed");
// 	$(location).attr('href',"./project1/index.html");
// });

// $("#button-three").click(function(){
// 	// update page for button one
// 	console.log("button three was pressed");
// 	$(location).attr('href',"./project2/index.html");
// });



$("#nav-1").click(function(){
	// update page for button three
	console.log("nav-1 was pressed");
	$(".block-2-cnt").hide();
	$("#block-2-cnt1").show();
});

$("#nav-2").click(function(){
	// update page for button three
	console.log("nav-1 was pressed");
	$(".block-2-cnt").hide();
	$("#block-2-cnt2").show();
});

$("#nav-3").click(function(){
	// update page for button three
	console.log("nav-1 was pressed");
	$(".block-2-cnt").hide();
	$("#block-2-cnt3").show();
});

$("#nav-4").click(function(){
	// update page for button three
	console.log("nav-1 was pressed");
	$(".block-2-cnt").hide();
	$("#block-2-cnt4").show();
});



// This scrolling part was taken from an online tutorial. 
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$('html, body').stop().animate({
	'scrollTop': $target.offset().top
}, 900, 'swing');



