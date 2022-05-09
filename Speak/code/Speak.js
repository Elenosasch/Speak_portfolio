$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function () {
	$('.tabs-block__slider').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		easing: 'ease',
		responsive: [{
			breakpoint: 1140,
			settings: {
				slidesToShow: 4,
			}
		}, {
			breakpoint: 991.98,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});

const tabsBtn = document.querySelectorAll(".tabs-block__nav-btn");
const tabsItems = document.querySelectorAll(".tabs-block__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.tabs-block__nav-btn:nth-child(1)').click();

$(document).ready(function () {
	$('.tabs__content').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
	});
});

$(document).ready(function () {
	$('.reviews-slider').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		easing: 'ease',
		responsive: [{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});
