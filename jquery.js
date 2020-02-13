$(document).ready(function() {
    const articles = $('div.article');
    const div = $('div.delete'); // >> 5 spans

    for ( let i = 0; i < articles.length; i++ ) {
        $(div[i]).click(function() {
            $(articles[i]).animate({
                width: [ "toggle", "swing" ],
                height: [ "toggle", "swing" ],
                opacity: "toggle"
              }, 5000, "linear", function() {
                $( this ).after( "<p style='text-align: center'>The newsfeed has been totally destroyed!!</div>" );
              });
        });
    }
});