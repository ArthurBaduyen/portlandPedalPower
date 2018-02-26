$("tr").on('click',function(){
	// console.log($(this).parents().hasClass('.thead-default'))
	if ($(this).parent('thead').is('thead')){

	} else {
		$("tr.action").remove();
		$("tr.table-edit").removeClass("table-edit");
		$(this).addClass("table-edit");
		$("<tr class='action'><td colspan='30'><button class='btn btnDelete'>Delete</button> <button class='btn btnCancel'>Cancel</button></td></tr>").insertAfter(this);	
	}
}) 


$('.table').on("click",".btnCancel", function(){
	$("tr.action").remove();
	$("tr.table-edit").removeClass("table-edit");
})

$('.table').on("click",".btnDelete", function(){
	$(this).parents('tr').prev('tr').remove()
  	$("tr.action").remove();
  	$("tr.table-edit").removeClass("table-edit");
})