$("#click-me").on("click", function(){
  let age = parseInt($("#age").val())
  let max = parseInt($("#max-age").val())
  let drink = $("#item").val()
  let num = $("#num-per-day").val()

  let total = (max - age) * num * 365

  $("#solution").html(total)
  $("#drink").html(drink)
})
