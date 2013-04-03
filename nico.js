exports = module.exports = {
    "source": "content",
    "output": "_site",
    "theme": "_theme",
    "permalink": "{{directory}}/{{filename}}",
    "writers": [
        "nico.PageWriter",
        "nico.PostWriter",
        "nico.FileWriter",
        "nico.StaticWriter"
    ]
}

exports.filters = {
  fixlink: function(html) {
    return html.replace(/(href="[^"]+)\.md(">)/ig, "$1$2");
  }
}
