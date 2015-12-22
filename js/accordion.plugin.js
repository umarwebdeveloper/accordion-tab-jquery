/*!
 * https://github.com/umarwebdeveloper/accordion-tab-jquery
 * Author: @umarwebdeveloper
 * Licensed under the MIT license
 */
 
(function ( $ ) {
 
    $.fn.accordionTab = function( options ) {
 
        var settings = $.extend({
            speed: 500,
        }, options );
 
        return this.each(function(){
			var obj = $(this);
			var question = $("dt", obj);
			var answer = $("dd", obj);
			
			obj.addClass('accor_container');
			question.addClass('accor_question');
			answer.addClass('accor_answer');
			answer.css("display","none");
			
			question.click(function(e) {
                if(false == $(this).next(answer).is(':visible')) {
					answer.slideUp(settings.speed);
					question.removeClass('accor_expanded');
				}
				$(this).next(answer).slideToggle(settings.speed);
				$(this).toggleClass("accor_expanded");

            });
        });
 
    };
 
}( jQuery ));