console.log("your index.js file is loaded correctly!");

$( "li" ).hover(
    function() {
      $( this ).append( $( "text-decoration=underline" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );