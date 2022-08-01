
{/* <ol id="details">
<li>Molope</li>
            <li>Kamogelo Koketso Katlego</li>
            <li>RSA</li>
            <li>0102100841083</li>
            <li>10 February 2001</li>
            <li>RSA</li>
            <li>Female</li>
            <li>Citizen</li>
</ol> */}

onclick = function(event) {		
  var information = event.target.innerHTML;
  var selection = document.getElementById("selection");			
  selection.innerHTML = information;	
}  
