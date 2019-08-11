/*!
 * Search as you type with Toggle
 */
 
 
 		 $("#searchBox").on("keyup", function() {
			
			$(".gallery a.image-link").filter(function() {
			const value = $("#searchBox").val().toLowerCase();	
			const imgTitle = $(this).data('title').toLowerCase();
			  $(this).toggle(imgTitle.indexOf(value) > -1)
			});
			
		  });