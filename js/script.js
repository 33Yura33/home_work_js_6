	///////1
	document.getElementById('coordinats').onmousemove = function(e) {
	  var x = e.offsetX === undefined ? e.layerX : e.offsetX;
	  var y = e.offsetY === undefined ? e.layerY : e.offsetY;
	  $("#pcoordinats").text(x+":"+y);
	}
	///////2
	document.getElementById('divimg').ondblclick = function(e) {
		$('#divimg').css('background-image', 'url(http://s1.iconbird.com/ico/0512/Pleasant/file1337790523.png)');
	}
	////////3


	window.onload=function(){

		var father = document.createElement('div');
		father.id = "fatherdivs";

		var divs = [];

		for (var i =0; i <300; i++) {

			var d=document.createElement('div');
			d.style.width='30px';
			d.style.height='30px';
			d.style.background='gray';
			d.className="divs";
			d.id="divs";

			father.appendChild(d);

		}

		document.getElementById("divimg").parentNode.insertBefore(father, document.getElementById("divimg").nextSibling);

	}

	$('body').on('click', '.divs', function(){
		$(this).css("border-radius", "15px");
	});

	//////4
	$('body').on('click', '.setimg', function(){
			var put = $(this).attr('src');
			$('.divfourth').css('background-image','url('+put+')');
			$('.divfourth').css('background-size','contain');
	});

	//////5
	$('.divfifth').click(function(){
		var p = $(".divfifth");
		var offset = p.offset();
		 $(this).offset({top:offset.top+100});
	});
	//6

	var state = 0;

	$(".trigger div").click(function(e) {

		state = (state == 2) ? 0 : ++state;

		$(this).css({ marginLeft: state * 35 });

	});