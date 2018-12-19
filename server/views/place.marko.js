// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/package$1.0.0/server/views/place.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_styleAttr = marko_helpers.sa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>" +
    marko_escapeXml(input.place.name) +
    " - Poblacion Places</title><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\"><script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"../css/style.css\"><link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,900\" rel=\"stylesheet\"><link href=\"https://fonts.googleapis.com/css?family=Corben:700\" rel=\"stylesheet\"><link rel=\"shortcut icon\" type=\"image/png\" href=\"/images/favicon.png\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark myNavbar\"><a class=\"navbar-brand\" href=\"/\">Poblacion Places</a><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Explore</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">");

  var for__21 = 0;

  marko_forEach(input.places, function(p) {
    var keyscope__22 = "[" + ((for__21++) + "]");

    out.w("<a class=\"dropdown-item\"" +
      marko_attr("href", "/places/" + p.id) +
      ">" +
      marko_escapeXml(p.name) +
      "</a>");
  });

  out.w("</div></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/addplace\">Add Place</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Contact Us</a></li></ul></div></nav><div class=\"banner\"" +
    marko_styleAttr(("background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(.." + input.place.imageloc) + ")") +
    "><div class=\"banner-text\">" +
    marko_escapeXml(input.place.name) +
    "</div></div><div class=\"default-div resto-description\">" +
    marko_escapeXml(input.place.description) +
    "</div><div class=\"default-div\"><div class=\"container\"><form class=\"form\" action=\"/comment\" method=\"POST\"><div class=\"form-group\"><label>Name</label><input type=\"text\" name=\"name\" class=\"form-control\"></div><div class=\"form-group\"><label>Rating</label><div class=\"row\"><div class=\"rating\"><input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\"><label for=\"star5\">5 stars</label><input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\"><label for=\"star4\">4 stars</label><input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\"><label for=\"star3\">3 stars</label><input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\"><label for=\"star2\">2 stars</label><input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\"><label for=\"star1\">1 star</label></div></div></div><div class=\"form-group\"><label>Comment</label><textarea name=\"comment\" class=\"form-control\"></textarea></div><div class=\"form-group\"><button type=\"submit\">Submit</button></div></form></div><div>");

  var for__57 = 0;

  marko_forEach(input.comments, function(comment) {
    var keyscope__58 = "[" + ((for__57++) + "]");

    out.w("<div><h2>" +
      marko_escapeXml(comment.name) +
      "'s review</h2>");

    var for__61 = 0;

    for (var i = 1; i <= comment.rating; i++) {
      var keyscope__62 = "[" + (((for__61++) + keyscope__58) + "]");

      out.w("<span>★</span>");
    }

    out.w("<p>" +
      marko_escapeXml(comment.comment) +
      "</p></div>");
  });

  out.w("</div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "65");

  out.w("</body><footer></footer></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/package$1.0.0/server/views/place.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
