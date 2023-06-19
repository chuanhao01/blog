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

# Planning
- Need a way to search through the posts
- Need a way to query for specific posts
  - If I am linking to previus post I have written before
- Infinite scrolling
- Pagination on the api
- Add in proper datetime (luxon lib)
  - UTC included in the markdown metadata
    - Should be used to base all of the "post" time
  - Also include a local time in brackets besides if different
- Find a way to render markdown
- Find a way to include custom componenets

- Optional frontmatter also?
  - Not sure how to get the structure in TS and into the code
  - Can probably set hard code in a ts file
  - Will fill in default values for missing props

# Features
- 3 different modes for a blog post
  - Hidden
  - Draft
  - Published

# Bugs

## MDSvex types
Find a way to get proper typing for the module import of `.mdx`/`.md`/`.
