
// -- todo actually use these.
export interface CodedError {
  message: string,
  stack: string,
  code: string
}

export interface RawHotlineArgs {
  '--version': any,
  '--config': any,
  '--show': any,
  '<id>': any,
  '<arg>': any
}

export interface HotlineArgs {
  config: string | undefined
  id: string,
  show: boolean,
  args: string[] | undefined
}

export interface HotlinkData {
  url: string,
  id: string
}

export interface HotlineConfigEntry {
  id: string,
  url: string
}

export interface Config {
  path: string,
  entries: HotlineConfigEntry[]
}
