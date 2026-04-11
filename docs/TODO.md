---
comments: true
---
# 🗒️ TODO
## Functional

- [ ] [[Changes#Enumeration of Changes|Book of Mormon Edition Changes]]
- [ ] Readability
	- [ ] Ellipses correction
	- [x] Indentation
	- [x] Centering images
	- [ ] CSS for quote citations
- [x] Static Navigation (w/ emoji)
- [x] Estimated time to read
	- [ ] Word count?
	- [ ] Maybe a little button or slider to adjust the reader's WPM speed
- [x] Icon indicating outgoing links
	- [x] JQuery to fetch destination `favicon`
- [ ] Current Year
	- [ ] It's 2025, but it won't *always* be 2025. Rather than make these static values, I need to find some kind of `getDate()` or `now()`. Once in a while, I compare durations between dates; ideally, I'd find some way to render those comparisons dynamically
	- [x] [[Russell-M-Nelson|President Nelson]] has passed away. The notes I have on his teachings and sayings are written as if he were alive and well, so I ought to adjust verbiage accordingly.

&nbsp;

### Em Dashes
One big item that I'm going to need to tackle *eventually* is my use of *em dashes*. They're not inherently bad or wrong, but my understanding is that they're a telltale sign of AI-generate content. I don't have a whole lot of experience using AI for text generation, but my limited experience is that yes, LLM's sure do like using em dashes more than biological humans in meatspace do. ==To date, I haven't used any AI on this site's content==. I don't expect that I will, either.

If you were to look through the [commit history](https://github.com/b3-exmo/b3-exmo.github.io/commits/main/) for these pages of notes, you'd find how many times I use [HTML entities](https://www.freeformatter.com/html-entities.html) for unusual characters. That's because I can't be arsed to remember which unicode combination resolves to the character I'm imagining, so typing in `&mdash;` is easier. I also make [liberal use](https://github.com/search?q=repo%3Ab3-exmo%2Fb3-exmo.github.io+%22%26nbsp%3B%22&type=code) of `&nbsp;` for whitespace and line breaks. It makes the unrendered text harder to read, but it's meant to be consumed after rendering, so that's a non-issue (to me)

So at some point, I'll need to track down each and every em dash used to re-evaluate, because that's what *robots* use. *I guess*. It's on my to-do list.

&nbsp;

Update: as of late August 2025, I've removed most (but not all) `&mdash;` instances. A few stuck around because I think they fit. Next time I summon up some patience, I'll sort through the "actual" em-dashes that are not represented by an HTML entity.