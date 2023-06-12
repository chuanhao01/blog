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
  default: ComponentType/SvelteComponentDev, // component import (for it to work well and type well)
  // Based on https://github.com/sveltejs/language-tools/issues/486
  metadata: {} //Some metadata parsed from the frontmatter
}
```

## Bugs
### Not being able to import from outside /src
IDK, I can't seem to track it down or find anybody else having a problem with it
Seems like you cannot really import files from outside `/src` without it acting weird

Could be something to do with `vite.allow-fs` since its asking me that
But looking like a svelte problem as there was an error `/posts/post/... not found`.
