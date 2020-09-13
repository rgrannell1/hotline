export class InvalidInput extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidInput';
        this.code = 'HL_001';
    }
}
export class MissingPattern extends Error {
    constructor(message) {
        super(message);
        this.name = 'MissingPattern';
        this.code = 'HL_002';
    }
}
export class MissingConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MissingConfigError';
        this.code = 'HL_003';
    }
}
