
# ☎️ hotline

A hotline to sites you need quickly.

This tool eliminates the "chain of clicks" you make to get to a website's search-bar and directly takes you to the link you're looking for.

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
sudo snap install hotline
```

## Files

```
dist/*                          transpiled typescript output
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

## Build

```sh
zsh build.zsh

snap connect hotline:hotline-files
hotline github/me hotline
```

## Tests

None yet

## Performance

Not Tested

## Changelog

## License

Copyright:
  The MIT License

  Copyright (c) 2020 Róisín Grannell

  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software, and to permit
  persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies
  or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
  OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.
