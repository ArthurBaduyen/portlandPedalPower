$("tr").click(function(){
  // $("tr.action").remove();
  $("tr.table-edit").removeClass("table-edit");
  $(this).addClass("table-edit");
  // $("<tr class='action'><td colspan='3'><button class='btn'>Delete</button><button class='btn'>Cancel</button><button class='btn'>Save</button></td></tr>").insertAfter(this); 
}) 
