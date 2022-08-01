var ul = document.getElementById("information");	

ul.onclick = function(event) {		
  var information = event.target;
  var selection = document.getElementById("selection");
  switch (information.id) {
    case "surname":
      selection.innerHTML = "Molope";
  }
  switch (information.id) {
    case "name":
      selection.innerHTML = "Kamogelo Koketso Katlego";
  }

  switch (information.id) {
    case "nation":
      selection.innerHTML = "RSA";
  }

  switch (information.id) {
    case "id":
      selection.innerHTML = "0102100841083";
  }

  switch (information.id) {
    case "dob":
      selection.innerHTML = "10 February 2001";
  }

  switch (information.id) {
    case "cob":
      selection.innerHTML = "RSA";
  }
 
  switch (information.id) {
    case "sex":
      selection.innerHTML = "Female";
  }

  switch (information.id) {
    case "stat":
      selection.innerHTML = "Citizen";
  }
}  
