
// -- todo actually use these.
export interface CodedError {
  message: string,
  stack: string,
  code: string
}

export interface RawHotlineArgs {
  '--version': any,
  '--config': any,
  '<id>': any,
  '<args>': any
}

export interface HotlineArgs {
  config: string | undefined
}

export interface HotlinkData {
  url: string,
  id: string
}
