console.log("your index.js file is loaded correctly!");

$( ".card" ).hover(//triger when mouse hover
    function() {
      $( this ).animate({
        marginTop: "-=1%",
      }, 200);
      
      //triger when mouse leav
      function(){
        $(this).animate({
            marginTop: "0%"
        }, 200)
      }
    }
  );