// jQuery jextensions
jQuery.fn.extend({

	// Print current jQuery object to console
	print: function() {
		if(window.console !== 'undefined') {
			console.log(this);
		}
		return this;
	},

	// Highlight elements - make them glow
	glow: function() {
		return this.css({
			'background-color' 	: '#e8ffc9',
			'box-shadow'		: '0px 0px 10px 3px rgba(43,199,20,1)'
		})
	}
});