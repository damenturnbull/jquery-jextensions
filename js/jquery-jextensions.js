// jQuery jextensions
jQuery.fn.extend({

	// Print current jQuery object to console
	print: function() {
		if(window.console !== 'undefined') {
			console.log(this);
		}
		return this;
	}
});