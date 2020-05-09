// $('body').prepend('<header class="searchbar wrapper"><input type="search" onkeyup="searchBar()" name="searchbar" placeholder="Search"></header>');

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'showImageNumberLabel': false,
  'disableScrolling': true,
});

$(document).ready(function(){
  $("#searchInput").on("input", function() {
    let value = $(this).val().toLowerCase();

    $('a').each(function(i) {
      let $imgCaption = $(this).attr("data-title");
      $(this).toggle($imgCaption.indexOf(value) > -1)
    });

  });
});
