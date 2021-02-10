(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['sidebar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidebar js-sidebar\">\r\n  <div class=\"sidebar__title\">\r\n    <h1>Test Sidebar (Theme Secondary)</h1>\r\n    <div class=\"sidebar__icon sidebar__icon--hide js-sidebar-hide\"><i class=\"fas fa-minus\"></i></div>\r\n    <div class=\"sidebar__icon sidebar__icon--show js-sidebar-show\"><i class=\"fas fa-plus\"></i></div>\r\n  </div>\r\n</div>";
},"useData":true});
})();