
/* --------------------------------------------------------
 JQUERY FUNCTION CALL
----------------------------------------------------------- */
(function ($) {
 "use strict";
	
	if($(".C-dataTable.fix--head").length){
		$('.C-dataTable.fix--head table').DataTable( {
	        scrollY:        '50vh',
	        scrollCollapse: true,
	        paging:         false,
	        searching: false,
    		ordering:  false,
    		info: false
    	} );
	}

	$('.C-optionCard').popover();
	
	
})(jQuery);
