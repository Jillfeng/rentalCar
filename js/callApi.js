function callApi(numberOfResults, searchTerm){
    return `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numberOfResults}&solrTerm=${searchTerm}`
}

export default function getData(numberOfResults, searchTerm){
    return fetch(callApi(numberOfResults, searchTerm))
        .then(function(response) {
            return response.json();
        });
}