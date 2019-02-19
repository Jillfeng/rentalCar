
function callEndpoint(){
  var searchTerm = document.getElementById("location").value.length > 1 ? document.getElementById("location").value : null;
  var dropdown = document.getElementById('dropdown');
  dropdown.length = 0;

  var defaultOption = document.createElement('option');

  
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url = 'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=';

  const request = new XMLHttpRequest();
  request.open('GET', url+searchTerm, true);

  request.onload = function() {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      dropdown.innerHTML = "";
      let option;
      for (let i = 0; i < data.length & i < 7; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].abbreviation;
        dropdown.appendChild(option);
      }
    } else {
      console.error('No results found')
    }   
  };

  request.send();
};
