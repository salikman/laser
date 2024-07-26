/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/base-helpers';
import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
// import Tabs from './modules/tabs';
import Accordion from './modules/accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

new Accordion('.accordion', {
	shouldOpenAll: false, // true
	defaultOpen: [], // [0,1]
	collapsedClass: 'open',
});

/**
 * Lang
 * */
$('.header__lang .lang-current').on('click', function (e) {
	var $parent = $(this).parent('.header__lang');

	$('.header__lang.open').not($parent).removeClass('open');

	$parent.toggleClass('open');
});

$(document).on('click scroll', function (e) {
	var $menu = $('.header__lang');

	if ((!$menu.is(e.target) && $menu.has(e.target).length === 0)) {
		$menu.removeClass('open');
	}
});
/**
 * End Lang
 * */
/**
 * Mobile dropdown
 * */
function handleDropdown() {
	if ($(window).width() <= 991) {
			$('.has-dropdown a i').on('click', function(e) {
					e.preventDefault();
					$(this).parent().parent().toggleClass('open-drop');
			});

			$(document).on('click scroll', function(e) {
					var $menu = $('.menu__item.has-dropdown');

					if ((!$menu.is(e.target) && $menu.has(e.target).length === 0)) {
							$menu.removeClass('open-drop');
					}
			});
	} else {
			$('.has-dropdown a i').off('click');
			$(document).off('click scroll');
	}
}

$(document).ready(function() {
	handleDropdown();
	$(window).resize(handleDropdown);
});

/**
 * End Mobile dropdown
 * */
/**
 * Swiper
 * */
const swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});
/**
 * End Swiper
 * */