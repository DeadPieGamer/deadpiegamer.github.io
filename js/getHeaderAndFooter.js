$("#header").load("/assets/decorations/topNavbar.xml", highlightActivePage);
$("#header").addClass("my-5");
$("#footer").load("/assets/decorations/footer.xml");

// alert($(`.onpage-${$(document).attr("title")}`));

function highlightActivePage() {
  $(`.onpage-${$(document).attr("title")}`).addClass("active");
}
