
export class InvalidInput extends Error {
  public code: string
  constructor (message:string) {
    super(message)
    this.name = 'InvalidInput'
    this.code = 'HL_001'
  }
}

export class MissingPattern extends Error {
  public code: string
  constructor (message:string) {
    super(message)
    this.name = 'MissingPattern'
    this.code = 'HL_002'
  }
}

export class MissingConfigError extends Error {
  public code: string
  constructor (message:string) {
    super(message)
    this.name = 'MissingConfigError'
    this.code = 'HL_003'
  }
}

export class InvalidConfigError extends Error {
  public code: string
  constructor (message:string) {
    super(message)
    this.name = 'InvalidConfigError'
    this.code = 'HL_004'
  }
}
