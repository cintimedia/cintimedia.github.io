/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
	$('.ailto-obfuscato').each(function(){
		var e = "rob";
		var a = "@";
		var d = "cintimedia";
		var c = ".com";
		var h = 'mailto:' + e + a + d + c;
		$(this).parent('a').attr('href', h);
	});	
});

$(function() {
	$("#skills .skills-tiles .skills-section").isotope({
	  itemSelector : 'span',
	  layoutMode: 'fitRows',
	  transformsEnabled: false,
	  itemClass: "iso-outer-item",
	  containerClass: "iso-outer-container",
	  resizeable: false
	  });

	  $("#skills .skills-tiles").isotope({
		  transformsEnabled: false,
		  itemSelector : '.skills-section',
		  layoutMode: 'masonry',
		  resizeable: false
	  });
});

var timeline_config = {
    width:              '100%',
    height:             '550',
    source:             'https://docs.google.com/spreadsheet/pub?key=0AlGcobZjsNU4dEJ2OGh2TnNYT05OaGJXSG9OdUF1M3c&output=html',
    embed_id:           'timeline-embed',               //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
    start_at_slide:     '5',                            //OPTIONAL START AT SPECIFIC SLIDE
    font:               'PTSerif-PTSans'             	//OPTIONAL FONT
}
			