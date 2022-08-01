var ul = document.getElementById("information");		

ul.onclick = function(event) {				
  var li = event.target;				
  alert(li.innerHTML);					
} 