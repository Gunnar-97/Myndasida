var SearchBar = (function($) {
var search_data = function( request, response ) {
    $.ajax({
        url: "/search.json",
        dataType: "json",
        type: "GET",
        data: {q: request.term },
        success: function( data ) {
            response( $.map( data, function( item ) {
                return {
                    label: item.label,
                    id: item.id
                  };
               }));
           }
       });
    };

    $("#searchfield").autocomplete({
        source: search_data,
        minLength: 1
     });

  return {
      attach: attach_to_bar
  };

}) (jQuery);
