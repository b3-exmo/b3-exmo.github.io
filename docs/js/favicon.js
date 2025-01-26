// parse url domain
function getDomain(url) {
  return url.match(/:\/\/(.[^/]+)/)[1]
}

// fetch favicon of destination
  // send url to icon repository
  // place icon left of hyperlink
  // but only if it's external (not localhost or local domain)
$("article.md-typeset a[href^='http']")
.not(
  "article.md-typeset a[href^='http://localhost']",
  "article.md-typeset a[href^='https://b3-exmo.github.io']"
).each(function () {
  $(this).css({
    background:
      "url(https://icons.duckduckgo.com/ip9/" +
      getDomain(this.href) +
      ".ico) left center no-repeat",
    "background-size": "16px",
    "padding-left": "20px"
  })
})