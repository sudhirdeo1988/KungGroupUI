
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
    		ordering:  true,
    		info: false,
    		"order": [[ 1, "desc" ]],
    		"columnDefs": [{
				"targets": 0,
				"orderable": false
			}]
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

	// -------- Table Checkbutton
	$('body').delegate('.checkBtn','click',function(){
		var thisCheck = $(this); 
		if(thisCheck.hasClass('st-checked')){
			thisCheck.removeClass('st-checked');
		}else{
			thisCheck.addClass('st-checked');
		}
	});


	// -------- Filter
	$('body').delegate('.btnFilter','click',function(){
		var thisCheck = $(this).parent('.btnSetting'); 
		if(thisCheck.hasClass('st-open')){
			thisCheck.removeClass('st-open');
		}else{
			thisCheck.addClass('st-open');
		}
	});
	$('body').delegate('.closeFilter','click',function(){
		$(this).parents('.btnSetting').removeClass('st-open');
	});

	// -------- Remove Filter Tags
	$('body').delegate('.filterTag > button','click',function(){
		var thisCheck = $(this).parent('.filterTag'); 
		thisCheck.remove();
	});


	// -------- Filter
	$('body').delegate('.btnSearch','click',function(){
		var thisCheck = $(this).parents('.tableSettings'); 
		if(thisCheck.hasClass('st-openSearch')){
			thisCheck.removeClass('st-openSearch');
		}else{
			thisCheck.addClass('st-openSearch');
		}
	});

	$('body').delegate('.hideSearch','click',function(){
		var thisCheck = $(this).parents('.tableSettings'); 
			thisCheck.removeClass('st-openSearch');
	});

	
	
})(jQuery);
