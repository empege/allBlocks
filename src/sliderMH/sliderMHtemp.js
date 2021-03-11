(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['slidermh'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a draggable=\"false\" class=\"slider__slide js-slide\" target=\"_blanc\" href="
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":7,"column":77},"end":{"line":7,"column":84}}}) : helper)))
    + ">\n      <img draggable=\"false\" class=\"slider__image\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":62}}}) : helper)))
    + " alt=\"slide-image\">\n      <div class=\"slider__content\">\n        <h3 class=\"slider__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":43}}}) : helper)))
    + "</h3>\n        <p class=\"slider__description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":11,"column":39},"end":{"line":11,"column":47}}}) : helper)))
    + "</p>\n        <div class=\"slider__action-btn\">\n          <span class=\"read-more\">Read More</span>\n        </div>\n      </div>\n    </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a draggable=\"false\" target=\"_blanc\" href="
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":19,"column":46},"end":{"line":19,"column":53}}}) : helper)))
    + " class=\"slider__slide js-slide\">\n      <img draggable=\"false\" src="
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":20,"column":33},"end":{"line":20,"column":40}}}) : helper)))
    + " alt=\"slide-image\" class=\"slider__image\">\n      <div class=\"slider__content\">\n        <h3 class=\"slider__title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":34},"end":{"line":22,"column":43}}}) : helper)))
    + "</h3>\n        <p class=\"slider__description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":23,"column":39},"end":{"line":23,"column":47}}}) : helper)))
    + "</p>\n        <div class=\"slider__action-btn\">\n          <span class=\"read-more\">Read More</span>\n        </div>\n      </div>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"slider js-slider\">\n  <button class=\"slider__arrow slider__arrow--left js-arrow-left\n    \"> <img src=\"../sliderMH/arrowleft.png\" alt=\"arrow-left\" class=\"js-slide-arrow\" /> </button>\n  <button class=\"slider__arrow slider__arrow--right js-arrow-right\"> <img src=\"../sliderMH/arrowright.png\" alt=\"arrow-right\" class=\"js-slide-arrow\" /> </button>\n  <div class=\"slider__inner js-slider-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n</section>";
},"useData":true});
})();