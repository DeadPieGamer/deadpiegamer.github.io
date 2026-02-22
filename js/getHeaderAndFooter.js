$("#header").load("/assets/decorations/topNavbar.xml", highlightActivePage);
$("#header").addClass("my-5");
$("#footer").load("/assets/decorations/footer.xml");

// alert($(`.onpage-${$(document).attr("title")}`));

function highlightActivePage() {
  // Source - https://stackoverflow.com/a/35649085
  // Posted by joepio, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-02-22, License - CC BY-SA 4.0
  $(`.onpage-${document.querySelector('meta[name="navigation"]').content}`).addClass("active");
}
