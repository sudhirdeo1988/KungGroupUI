
/* --------------------------------------------------------
 JQUERY FUNCTION CALL
----------------------------------------------------------- */
(function ($) {
 "use strict";
	
	// -------- Data Table
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

	// -------- Popover
	if($(".C-optionCard").length){
		$('.C-optionCard').popover();
	}
	
	
})(jQuery);
