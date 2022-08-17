function showPage() {
  var sel = document.getElementById("subjects");

  var option = sel.options[sel.selectedIndex].value;

  window.open("/themes/" + option + ".html");
}
