window.onload = function () {
  var search = document.querySelector("button");
  var result = document.querySelector("#result"); 
  var query = document.querySelector("input");

  search.addEventListener('click', function (event) {
    event.preventDefault();

    var phpurl = "superheroes.php?query=" + query.value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          result.innerHTML = response; 
        } else {
          result.textContent = "Error: There is an issue with this request. Please try again.";
        }
      }
    };
    httpRequest.open('GET', phpurl, true);
    httpRequest.send();
  });
};

