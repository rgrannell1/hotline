
# hotline

A hotline to sites you need quickly.

This tool eliminates the "chain of click" you make to get to a website's search-bar and directly takes you to the link you're looking for.

## Usage

Create a `.hotline` file

```
- id: github/me
  url: https://github.com/yourname/$0
```

run

```sh
hl github/me your-repo
```

and the page will open in your default browser.

## Build

## Installation

On Linux distributions that support Snap packages, run:

```sh
sudo snap install kale
```

## Files

```
out/*        transpiled typescript output
src/
  app/
    find-pattern.ts             find a pattern based on a user's input
    hotline.ts                  the core application code
    load-config.ts              load user's configuration
    open-browser.ts             open the user's browser with a final url
    perform-substitutions.ts    substitute provided arguments into the matched url
  cli/
    call-app.ts                 calls underlying app code
    hotline.ts                  the top-level CLI definition
  commons/
    constants.ts                app-wide constants
    handle-errors.ts            output app errors tidily
    types.ts                    type definitions
  external.d.ts                 declaration file for modules without @types modules
snapcraft.yaml                  snapcraft configuration
tsconfig.json                   typescript configuration
```

## Tests

None yet

## Performance

Not Tested

## Changelog

## License
