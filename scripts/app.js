$(document).ready(function () {
    var $menu = $("#sidebar-wrapper");

    $(".js-menu-open").on("click", function(evt){
      $menu.addClass("open");

      return evt.target.tagName === "A";
    });

    $(".js-menu-close").on("click", function(evt){
      $menu.removeClass("open");

      return evt.target.tagName === "A";
    });
  });
