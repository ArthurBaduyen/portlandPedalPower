$("tr").click(function(){
  $("tr.action").remove();
  $("tr.table-edit").removeClass("table-edit");
  $(this).addClass("table-edit");
  $("<tr class='action'><td colspan='30'><button class='btn'>Delete</button></td></tr>").insertAfter(this); 
}) 


$(document).on("click",".btn", function(){
  console.log("button click")
  $("tr.action").remove();
  $("tr.table-edit").removeClass("table-edit");  
})