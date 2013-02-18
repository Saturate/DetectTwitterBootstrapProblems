/*
 *  Project: Detect Twitter Bootstrap Problems
 *  Description:
 *  Author: Allan Kimmer Jensen
 *  License:
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

	// undefined is used here as the undefined global variable in ECMAScript 3 is
	// mutable (ie. it can be changed by someone else). undefined isn't really being
	// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
	// can no longer be modified.

	// window and document are passed through as local variable rather than global
	// as this (slightly) quickens the resolution process and can be more efficiently
	// minified (especially when both are regularly referenced in your plugin).

	// Create the defaults once
	var pluginName = "dtwp";
	var defaults = {
		tw: {
			spans: ['span1', 'span2', 'span3', 'span4', 'span5', 'span6', 'span7', 'span8', 'span9', 'span10', 'span11', 'span12'] // All the spans in TW
		}
	};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.element = element;
		// jQuery has an extend method which merges the contents of two or
		// more objects, storing the result in the first object. The first object
		// is generally empty as we don't want to alter the default options for
		// future instances of the plugin
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			// Place initialization logic here
			// You already have access to the DOM element the
			// and options via the instance, e.g. this.element
			// and this.options
			// you can add more functions like the one below and
			// call them like so: this.yourOtherFunction(this.element, this.options).
			console.log('Detecting Twitter Bootstrap Problems...');

			// Run all detection cases
			$.each(this.cases, function () {
				this.call();
			});
		},
		cases: {
			multripleSpans: function () {
				console.log('Running multripleSpans...');

				$('[class*="span"]', Plugin.element).each(function () {
					var classes = $(this).attr('class').split(" ");
					
					// If there are more than one class we will check them
					if(classes.length > 1) {
						var matches = 0;
						
						$.each(classes, function () {
							if (jQuery.inArray( this, defaults.tw.spans )) {
								matches++;
							}
						});

						if (matches > 1) {
							console.warn('There are %s span classes on (%o).', matches, $(this).get(0));
						}
					}
				});
			}
		}
	};

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);