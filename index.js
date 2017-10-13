document.addEventListener('mouseup',up);

function up(){
	
	removeEventListener('mousemove',move);
	removeEventListener('mouseup',up);
	
}
