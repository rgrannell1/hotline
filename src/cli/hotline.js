#!/usr/bin/env node

const neodoc = require('neodoc')

const handleErrors = require('../commons/handle-errors')

const constants = require('../commons/constants')

const docs = `
Name:
  hotline — open links faster.
Usage:
  hotline [-c <fpath> | --config <fpath>] <id> <arg>...
  hotline [-c <fpath> | --config <fpath>] <id>
  hotline (-h | --help | --version)

Description:
  hotline is a command-line tool that opens "parameterised" links.

Options:
  -c <fpath>, --config <fpath>     A config file
  -h, --help                       Display this documentation.
  --version                        Display the package version.

Arguments:
  <id> the id of the hotline to use
  <args>... substitutions to pass to the hotline

Stdin:
  Accepts JSON on stdin

Config:

Examples:
  hotline gh/me hotline

Authors:
  ${constants.packageJson.author}

Version:
  v${constants.packageJson.version}

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

`

const callApp = require('../cli/call-app')

const args = neodoc.run(docs)

callApp(args).catch(handleErrors)