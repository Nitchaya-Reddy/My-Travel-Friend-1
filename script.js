function searchWebsite(query) {
  // Create an empty array to store the results
  var results = [];
  // Get all the links in the document
  var links = document.getElementsByTagName("a");
  // Loop through each link
  for (var i = 0; i < links.length; i++) {
    // Get the text content and the href attribute of the link
    var text = links[i].textContent.toLowerCase();
    var href = links[i].href.toLowerCase();
    // Check if the query is a substring of the text or the href
    if (text.includes(query) || href.includes(query)) {
      // Push the link to the results array
      results.push(links[i]);
    }
  }
  // Return the results array
  return results;
}

// Example usage: search for "about" in the website and log the results
var query = "about";
var results = searchWebsite(query);
console.log(results);
