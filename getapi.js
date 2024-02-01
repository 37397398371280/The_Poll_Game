/**
 * getapi.js
 * Version: 1.0
 * Author: Colten Sus
 * Description: A simple JavaScript library for fetching data from an API.
 */

// Define the GetAPI object
var GetAPI = {
  // Function to fetch data from an API endpoint
  fetchData: function(url, callback) {
    // Make a GET request to the specified URL
    fetch(url)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then(data => {
        // Call the callback function with the retrieved data
        callback(null, data);
      })
      .catch(error => {
        // Call the callback function with the error message
        callback(error, null);
      });
  }
};

// Export the GetAPI object for use in other modules
module.exports = GetAPI;
