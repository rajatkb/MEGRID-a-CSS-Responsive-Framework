window.addEventListener('load',function(){
	setRightColor();
	navbarSlideIn();
});

function setRightColor(){
	
	
}

function navbarSlideIn(){
	var frame=document.querySelector('.frame')
	var button = document.querySelector('.navbutton');
	var menu= document.querySelector('nav ul.nav-right , nav ul.nav-left');
	button.addEventListener('click' , function(event){
		
		toggleStates(frame, 'animateSlideOut' , 'returnOut');
		toggleStates(menu , 'animateSlideIn' ,'returnIn')
		if(button.style.color == "black")
		{button.style.color="";}
		else{
			button.style.color="black";
		}
		
		if(document.body.style.overflow == "hidden"){
			document.body.style.overflow="";
		}
		else{
			document.body.style.overflow="hidden";
		}
		
		
	});
	menu.addEventListener('click' , function(event){
		if(event.target.type == 'text')
			{
				event.stopPropagation();
				return;
			}
		toggleStates(frame, 'animateSlideOut' , 'returnOut');
		toggleStates(menu , 'animateSlideIn' ,'returnIn')
		if(button.style.color == "black")
		{button.style.color="";}
		else{
			button.style.color="black";
		}
		document.body.style.overflow="";
		event.stopPropagation();
	});
	
}

function classPresent(obj , className){
	return String(obj.classList).indexOf(className)> 0;
}

function toggleStates(obj , state1 , state2)
{
	if(classPresent(obj , state1))
		{
			obj.classList.remove(state1);
			obj.classList.add(state2);
		}
	else{
		obj.classList.remove(state2);
		obj.classList.add(state1);
	}
}