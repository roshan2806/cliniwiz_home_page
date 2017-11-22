// site.js
(function () {
    var $sidebar = $("#sidebar");
    $("#sidebarToggle").on("click", function () {
        $sidebar.toggleClass("hidden");
    });
})();