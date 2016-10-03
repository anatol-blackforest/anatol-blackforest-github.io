$(document).ready(function(){
	
	/* ---------- Circle Progess Bars ---------- */
	var divElement = $('div'); //log all div elements
	
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
		
	} else {

	    $(".orangeCircle").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 120,
	        'height': 120,
	        'fgColor': '#FA5833',
	        'dynamicDraw': true,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
			'skin':'tron'
	    });

		
	}
	
});

