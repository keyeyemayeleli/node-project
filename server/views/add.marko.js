// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/package$1.0.0/server/views/add.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>" +
    marko_escapeXml(input.title) +
    "</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"><script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script><link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><form class=\"form\" action=\"/addplace\" method=\"POST\" enctype=\"multipart/form-data\"><div class=\"form-group\"><label>Name of Place</label><input type=\"text\" name=\"name\" class=\"form-control\"></div><div class=\"form-group\"><label>Address</label><input type=\"text\" name=\"address\" class=\"form-control\"></div><div class=\"form-group\"><label>Address</label><input type=\"text\" name=\"description\" class=\"form-control\"></div><div class=\"form-group\"><label>Add image</label><input type=\"file\" name=\"file\"></div><div class=\"form-group\"><button type=\"submit\">Submit</button></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/package$1.0.0/server/views/add.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
