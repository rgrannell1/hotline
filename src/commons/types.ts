
// -- todo actually use these.
export interface CodedError {
  readonly message: string,
  readonly stack: string,
  readonly code: string
}

export interface RawHotlineArgs {
  readonly '--export': boolean,
  readonly '--format': string | undefined,
  readonly '--version': boolean,
  readonly '--config': string | undefined,
  readonly '--show': boolean,
  readonly '<id>': string | undefined,
  readonly '<arg>': string[] | undefined
}

export interface HotlineArgs {
  readonly export: boolean,
  readonly config: string | undefined,
  readonly format: ExportFormat,
  readonly id: string | undefined,
  readonly show: boolean,
  readonly args: string[] | undefined
}

export interface HotlinkData {
  readonly url: string,
  readonly id: string
}

export interface HotlineConfigEntry {
  readonly id: string,
  readonly url: string
}

export interface Config {
  readonly path: string,
  readonly entries: HotlineConfigEntry[]
}

export enum ExportFormat {
  Chrome
}
