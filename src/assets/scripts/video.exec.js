var $i = 0;
$(".video-bloc-1").each(function () {


	$(this).find("video")[0].pause();
	$(this).addClass("cube");

	var descToggle = ".desc-" + $i;
	//console.log(descToggle);
	/*DEFINE ANIMATIONS*/


	/*REALISATIONS CLICK TO SHOW PROJECT DESC*/
	$(this).on("click", function (e) {
		//console.log(descToggle);
		e.preventDefault();
		$(descToggle).css({
			display: "block"
		});


	});
	$i++;
});






$(".vid-carte-visite").on("mouseover", function (event) {
	var vid = $(this).find("video")[0];
	vid.play();
});

$(".video-bloc-1").on("mouseover", function (event) {
	$(this).find("video")[0].play();
	//console.log("hover pause" + $(this));
}).on("mouseout", function (event) {
	var el = $(this).find("video")[0];
	el.pause();
	//console.log("hover play" + $(this));

});



function toAnime(animeElement) {
	console.log(animeElement.children);
	var animeToggleBut = anime({
		targets: animeElement.children,
		translateZ: {
			value: [-60, 0],
			duration: 430,
			easing: "easeOutCubic",
		},
		translateX: {
			value: [-130, 0],
			duration: 380,
			easing: "easeInSine"
		},
		translateY: {
			value: [100, 0],
			duration: 400,
			easing: "easeOutCubic"
		},
		rotateY: {
			value: ["70deg", 0],
			duration: 400,
		},
		opacity: {
			value: [0, 1],
			duration: 380,
			easing: "easeInQuart"
		},
		elasticity: 0,
		delay: function (el, i) {
			return i * 70;
		},
		loop: false,
		autoplay: false,
	});

}

$('.game').click(function (e) {
	e.preventDefault();
	console.log($(this).data("state"));
	if ($(this).data("state") == 0) {
		$('.game-wrap').css({
			display: 'flex'
		});
		$('.site-wrap').css({
			display: 'none'
		});
	} 
	$('.site').data("state", 0);
});

$('.site').click(function (e) {
	e.preventDefault();
	if ($(this).data("state") == 0) {
		$('.site-wrap').css({
			display: 'flex'
		});
		$('.game-wrap').css({
			display: 'none'
		});
		$('.game').data("state", 0);
	}
	
});


// var video = document.getElementsByTagName('video');
// setTimeout(function(){
// 	video.preload = "auto";
// },loadTiming);
	