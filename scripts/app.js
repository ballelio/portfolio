$(document).ready(function () {

    $(".js-menu-open").on("click", function(evt){
      var menu = $("#sidebar-wrapper");
      $(menu).addClass("open");

      return evt.target.tagName === "A";
    });

    $(".js-menu-close").on("click", function(evt){
      var sidebar = $("#sidebar-wrapper");
      $(sidebar).removeClass("open");

      return evt.target.tagName === "A";
    });
  });
