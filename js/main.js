
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
	if($("button.C-optionCard").length){
		$('button.C-optionCard').popover({
			placement : 'bottom',
        	trigger : 'hover'
		});
	}

	// -------- Popover
	if($(".C-formGroup.st-alert").length){
		$('.C-formGroup.st-alert .txtBox').popover({
			placement : 'auto',
        	trigger : 'hover'
		});
	}
	
	
})(jQuery);
