function calc(){
	
	var para = document.getElementById("para");
	
	var height = document.innerHeight;
	var width = document.innerWidth;
	var swidth = window.innerWidth;
	var sheight = window.innerHeight;
	
	para.innerHTML = "\n Height: " + height + "\n" + "Width: " + width + "\n"+
	"Screen Width: " + swidth + "\n"+"Screen Height: " + sheight + "\n"
	
}


window.addEventListener("resize",calc);