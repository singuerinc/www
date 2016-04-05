(function(posts) {

	'use strict';

	// preload images based on document dimensions
	// add some animation effects

	var App = function() {

		var style = this.getComputedStyle(document.querySelector('html')),
			retina = window.devicePixelRatio > 1,
			mobile = (parseInt(style.getPropertyValue("width"))) < 768,

			numTotal = posts.length,
			numLoaded = 0;


		for (var i = 0; i < numTotal; i++) {

			var img, filename;

			img = new Image();
			img.onload = (function(e) {
				numLoaded++;
				if (numLoaded === numTotal) {
					this.ready();
				}
			}).bind(this);

			if (mobile && !retina) {
				filename = posts[i].image + '-md_small.jpg';
			} else {
				filename = posts[i].image + '_small.jpg';
			}

			img.src = '/img/home/' + filename;
		}
	};

	App.prototype.ready = function() {

		var preloader = document.querySelector('.loading').classList.add('hide');

		for (var i = 0; i < posts.length; i++) {

			var pId = posts[i].id,
				li = document.querySelector('li#image--' + pId),
				imgCont = li.querySelector('.post-image');

			setTimeout((function(id, lItm, itm) {
				//itm.classList.add(id);
				lItm.classList.remove('hide');
				lItm.classList.add('animated');
				lItm.classList.add('fadeInUp');
			}).bind(this, pId, li, imgCont), (200 * i) + 500);
		}

	};

	App.prototype.getComputedStyle = function(elem) {
		if (elem.ownerDocument.defaultView.opener) {
			return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
		}
		return window.getComputedStyle(elem, null);
	};

	new App();

})(posts);
