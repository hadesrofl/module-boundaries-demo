This is a simple demo of how to use module boundaries with eslint.
Those boundaries helps us to define our architectural style and to keep internal behaviour of modules hidden from
consumers.
It also sets up rules and restricts who is allowed to consume it.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## eslintrc.json

Inside the eslint config file, `boundaries/elements` define our scopes and modules.
Those are references in the rules section of `boundaries/element-types` and tell which modules they are allowed to use.
To see this happening, after running `npm install` go over to `bestiary.tsx` inside `features/statblock/pages` and
remove the comment for `iAmAConst`.

`no-restricted-imports` is set up to only allow imports from the root level of a feature module.
We set up a `index.ts` barrel file to restrict public exports from a feature module.
Only those are allowed to import and help to differentiate between internal implementations and expose functionality.


