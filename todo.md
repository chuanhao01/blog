# General info

The page path:
- /
  - To browse the blog
  - Main landing page to see what blogs there are
  - Might move to home page at a future date
- /post/post-name
  - What a post is
- /api/post
  - Just an API endpoint to call stuff

# Proper Planning

## Basic Features
- Datetime Feature
- Simple Preview of post
  - Title, Description, Published time, Last Edited time, Categories, Author
  - Preview of the post content
- Simple view of post markdown
  - Just some CSS
  - Leave to advanced feature
- Infinite Scrolling of the posts
- Proper Datetime Handling (through luxon)
  - All data should be in UTC format
  - Only when viewing on the posts etc, should it show timezone and what their local time is

## Advanced Features
- Better Design
- Mobile View
- Markdown plugins
  - Table of contents
  - Estimated time to read
  - Better code viewer/editor

Needs to be further Tested
- Pagination
- Filter, Sort and Search (Client or Server Side)
  - Include/Exclude categories
  - Published Time
  - Last Edited Times
  - Search in Title, Description and Header(Preview of the entire article)
- Optional Frontmatter
  - Not sure what I would use that for
- Like and Comment system
- More sorting options
  - Sort by likes and post views
- SEO
- Could possibly integrate chatgpt into the blog's articles content

# Features
- 3 different modes for a blog post
  - Hidden
  - Draft
  - Published

# Bugs

## MDSvex types
Find a way to get proper typing for the module import of `.mdx`/`.md`/`.
