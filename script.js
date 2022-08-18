function showPage() {
  let sel = document.getElementById("subjects");

  let option = sel.options[sel.selectedIndex].value;

  window.open("/themes/" + option + ".html");
}
