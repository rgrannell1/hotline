import { nanoid } from 'nanoid';
import { InvalidInput } from '../commons/errors.js';
const countSubstitutions = (pattern) => {
    let count = 0;
    let message = pattern;
    // -- there is no reason to ever have this many variables...
    const maxVariables = 32;
    for (let ith = maxVariables; ith >= 0; --ith) {
        let target = '$' + ith;
        if (pattern.includes(target)) {
            count++;
            message = message.replace(target, 'placeholder.');
        }
    }
    return count;
};
const performSubstitutions = (pattern, args) => {
    const count = countSubstitutions(pattern);
    if (!args.args && count === 0) {
        return pattern;
    }
    if (args.args?.length !== count) {
        throw new InvalidInput(`the selected pattern requires ${count} arguments but you provided ${args.args?.length || 0}`);
    }
    let final = pattern;
    let pairs = {};
    for (let ith = args.args.length - 1; ith >= 0; --ith) {
        let sub = nanoid();
        final = final.replace('$' + ith, sub);
        pairs[sub] = args.args[ith];
    }
    for (const [key, val] of Object.entries(pairs)) {
        final = final.replace(key, encodeURIComponent(val));
    }
    return final;
};
export default performSubstitutions;
