	///////1
	document.getElementById('coordinats').onmousemove = function(e) {
	  var x = e.offsetX==undefined?e.layerX:e.offsetX;
	  var y = e.offsetY==undefined?e.layerY:e.offsetY;
	 $("#pcoordinats").text(x+":"+y);
	}
	///////2
	document.getElementById('divimg').ondblclick = function(e) {
		$('#divimg').css('background-image', 'url(http://s1.iconbird.com/ico/0512/Pleasant/file1337790523.png)');
	}
	////////3
	var father =document.getElementById('fatherdivs');
	
	window.onload=function(){
		for (var i =0; i <300; i++) {
			var d=document.createElement('div');
			d.style.width='30px';
			d.style.height='30px';
			d.style.background='gray';
			d.className="divs";
			d.id="divs";
			father.appendChild(d);
		}

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
	$(".trigger div").click(function(e) {
		  var class_ = $(this).attr('class');
		  if(class_ == 'switch1')
		  {
		  	$(this).removeClass('switch1');
		  	$(this).addClass('switch2');
		  	console.log("1");
		  }
		  else if(class_ == 'switch2')
		  {
		  	$(this).removeClass('switch2');
		  	$(this).addClass('switch3');
		  	console.log("2");
		  }
		  else if(class_ == 'switch3')
		  {
		  	$(this).removeClass('switch3');
		  	$(this).addClass('switch1');
		  	console.log("0");
		  }
	});