(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['accordion'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"accordion__item\">\r\n    <div class=\"accordion__header js-accordion-header\">\r\n      <h1 class=\"accordion__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":35},"end":{"line":5,"column":44}}}) : helper)))
    + "</h1>\r\n      <span class=\"accordion__icon js-acordion-icon\">\r\n        <i class=\"fas fa-plus\"></i>\r\n      </span>\r\n      <span class=\"accordion__icon js-acordion-icon display-none\">\r\n        <i class=\"fas fa-minus\"></i>\r\n      </span>\r\n    </div>\r\n    <div class=\"accordion__content js-accordion-content\">\r\n      <p class=\"accordion__paragraph js-accordion-paragraph\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":16}}}) : helper)))
    + "\r\n      </p>\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"accordion "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"theme") || (depth0 != null ? lookupProperty(depth0,"theme") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"theme","hash":{},"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":35}}}) : helper)))
    + " faq-page-wrapper__accordion\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"accordionData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
})();