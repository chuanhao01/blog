# Some information

## +server.ts vs +page.ts

The `+server.ts` files if for the return of API like data
So anything where the data would need to change based on query params etc
Whereas `+page.ts` is just to request for data needed to render the webpage

## MDSvex integration
Since not much documentation has been made surrounding thie library, I thought I would write down some notes.

### Imports of `.md` file after `MDSvex` preprocessing
So after adding the preprocessor, the editor might not know what is going on

But on the runtime side, any imports of a `.md`(/whatever extension you decide to use) will be treated as a svelte component. This means the import acts as a normal default import of a svelte component.

Just that the import also helps to parse the metadata found in the frontmatter into a `metadata` prop

I.e. the final objects looks like this:
```ts
{
  default: a, // component import
  metadata: {} //Some metadata parsed from the frontmatter
}
```
