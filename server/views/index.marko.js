// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/package$1.0.0/server/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_styleAttr = marko_helpers.sa,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><meta charset=\"UTF-8\"><title>Poblacion Places</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"css/style.css\"><link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,900\" rel=\"stylesheet\"><link href=\"https://fonts.googleapis.com/css?family=Corben:700\" rel=\"stylesheet\"><link rel=\"shortcut icon\" type=\"image/png\" href=\"/images/favicon.png\"></head><body>");

  component_globals_tag({}, out);

  out.w("<main><header></header><div id=\"div-landing\"><div class=\"flex center\">");

  var for__14 = 0;

  marko_forEach(input.places, function(place) {
    var keyscope__15 = "[" + ((for__14++) + "]");

    out.w("<div class=\"parent-card\"><a" +
      marko_attr("href", "/places/" + place.id) +
      "><div class=\"card\"" +
      marko_styleAttr(("background-image:url(" + place.imageloc) + ")") +
      "></div><div class=\"divhead\"><a href=\"/loco\"><h4>" +
      marko_escapeXml(place.name) +
      "</h4></a><h5>" +
      marko_escapeXml(place.address) +
      "</h5></div></a></div>");
  });

  out.w("</div></div></main><footer></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/package$1.0.0/server/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
