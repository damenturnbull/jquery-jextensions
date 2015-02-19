// jQuery jextensions
jQuery.fn.extend({

	// Print current jQuery object to console
	print: function() {
		if(window.console !== undefined) {
			console.log(this);
		}
		return this;
	},

	// Highlight elements - make them glow a dodgy hardcoded green color!
	glow: function() {
		return this.css({
			'background-color' 	: '#e8ffc9',
			'box-shadow'		: '0px 0px 10px 3px rgba(43,199,20,1)'
		})
	},

	// Change selectors href from http to https
	tohttps: function() {
		return this.each(function(index, el) {
			var _href = $(el).attr('href');
			// Check existence in older browsers
			if (typeof _href !== typeof undefined && _href !== false) {
				var bits = _href.split("://");
				if(bits[0] == "http") {
					$(el).attr('href', 'https://' + bits[1]);
				}
			}
		});
	}
});