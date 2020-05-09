$('body').prepend(`
  <header class="searchbar wrapper">
    <input type="search" id="searchInput" name="searchbar" placeholder="Search">
  </header>
`); // Disable searchbar in case js is not available

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'showImageNumberLabel': false,
  'disableScrolling': true,
});

$(document).ready(function(){
  $("#searchInput").on("input", function() {
    let value = $(this).val().toLowerCase();

    $('.image').each(function() { // Goes through each image to get the description
      let $imgCaption = $(this).attr("data-title");
      $(this).toggle($imgCaption.indexOf(value) > -1);
    });

  });
});
