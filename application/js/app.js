$("tr").on('click',function(){
	// console.log($(this).parents().hasClass('.thead-default'))
	if ($(this).parent('thead').prop('nodeName') == 'THEAD'){

	} else {
		$("tr.action").remove();
		$("tr.table-edit").removeClass("table-edit");
		$(this).addClass("table-edit");
		$("<tr class='action'><td colspan='30'><button class='btn'>Delete</button></td></tr>").insertAfter(this);	
	}
}) 


$('.table').on("click",".btn", function(){
  $("tr.action").remove();
  $("tr.table-edit").removeClass("table-edit");
})