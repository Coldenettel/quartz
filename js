$(document).ready(function () {
    // Your Giphy API key
    const apiKey = 'YOUR_GIPHY_API_KEY';
  
    // Event listener for the form submission
    $('form').submit(async function (event) {
      event.preventDefault();
  
      // Get the user's search term
      const searchTerm = $('#search').val();
  
      // Make a request to Giphy API
      const response = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`);
  
      // Get the URL of the GIF
      const gifUrl = response.data.data.image_url;
  
      // Append the GIF to the page
      $('#gif-area').append(`<div class="col-md-4 mb-4"><img src="${gifUrl}" class="img-fluid" alt="GIF"></div>`);
    });
  
    // Event listener for removing all images
    $('#remove').click(function () {
      $('#gif-area').empty();
    });
  });
