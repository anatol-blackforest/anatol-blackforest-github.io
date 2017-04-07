window.onload = function(){
	var placeholder = document.getElementById("placeholder");
	var search = document.getElementById("search");
	var wear = document.getElementsByClassName("wear")[0];
	placeholder.onclick = function(){
		this.style.display = "none";
		if(search.value.length == 0)
		search.focus()
	}
	search.onblur = function(){
		if(search.value.length == 0)
		placeholder.style.display = "inline"
	}
	/* wear.onmouseover = function(e){
		if(e.target.classList.contains("corzina")){
			var tooltip = document.createElement("div");
			tooltip.className = "tooltip";
			tooltip.textContent = "add to card"
			e.target.appendChild(tooltip);
		}
	} */
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).on('ready', function() {
	$(".regular").slick({
		dots: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 3,
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 2,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	$(".regular2").slick({
		dots: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 990,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
		
	});
	
});