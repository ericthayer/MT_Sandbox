$(document).ready(function() {
	// Flash Player z-index fix
  window.onload = function () {
    var frames = document.getElementsByTagName("iframe");
    for (var i = 0; i < frames.length; i++) {
      frames[i].src += "?wmode=transparent";
    }
  }
  // Mobile Nav
  var navigation = responsiveNav(".nav-collapse", {
    animate: true,                    // Boolean: Use CSS3 transitions, true or false
    transition: 500,                  // Integer: Speed of the transition, in milliseconds
    label: "Menu",                    // String: Label for the navigation toggle
    insert: "after",                  // String: Insert the toggle before or after the navigation
    customToggle: "",                 // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative",              // String: Position of the opened nav, relative or static
    navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
    jsClass: "js-nav",                    // String: 'JS enabled' class which is added to <html> element
    init: function(){},               // Function: Init callback
    open: function(){},               // Function: Open callback
    close: function(){}               // Function: Close callback
  });
  // Slider
  $("#owl-demo").owlCarousel({
	  //autoPlay : true,
	  items : 4,
	  lazyLoad : true,
    navigation : true,
    slideSpeed : 500,
    paginationSpeed : 400,
    singleItem:true, 
  });
  $("#owl-demo-two").owlCarousel({
	  //autoPlay : true,
	  items : 4,
	  lazyLoad : true,
    navigation : true,
    slideSpeed : 500,
    paginationSpeed : 400,
    singleItem:true, 
  });
  // Search Value Clear
  $('.clearMeFocus').val('search');
    //For any clearMeFocus textbox
    $('.clearMeFocus').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if (this.value === default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if (this.value === '') {
            this.value = default_value;
        }
    });
  });  
});