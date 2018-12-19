// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/package$1.0.0/server/views/comment.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><title>" +
    marko_escapeXml(input.title) +
    "</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"><script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script><script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script><link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><form class=\"form\" action=\"/comment\" method=\"POST\"><div class=\"form-group\"><label>Name</label><input type=\"text\" name=\"name\" class=\"form-control\"></div><div class=\"form-group\"><label>Rating</label><div class=\"row\"><div class=\"rating\"><input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\"><label for=\"star5\">5 stars</label><input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\"><label for=\"star4\">4 stars</label><input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\"><label for=\"star3\">3 stars</label><input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\"><label for=\"star2\">2 stars</label><input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\"><label for=\"star1\">1 star</label></div></div></div><div class=\"form-group\"><label>Comment</label><textarea name=\"comment\" class=\"form-control\"></textarea></div><div class=\"form-group\"><button type=\"submit\">Submit</button></div></form></div><div>");

  var for__36 = 0;

  marko_forEach(input.comments, function(comment) {
    var keyscope__37 = "[" + ((for__36++) + "]");

    out.w("<div><h2>" +
      marko_escapeXml(comment.name) +
      "'s review</h2>");

    var for__40 = 0;

    for (var i = 1; i <= comment.rating; i++) {
      var keyscope__41 = "[" + (((for__40++) + keyscope__37) + "]");

      out.w("<span>★</span>");
    }

    out.w("<p>" +
      marko_escapeXml(comment.comment) +
      "</p></div>");
  });

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "44");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/package$1.0.0/server/views/comment.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
