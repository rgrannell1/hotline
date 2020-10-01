import { nanoid } from 'nanoid';
export default class Strings {
    /**
     * Replace multiple patterns within a string
     *
     * @param str the template string to be substituted
     * @param subs an object of original:replacement pairs
     *
     * @returns a fully substituted string
     */
    static replaceMany(str, subs) {
        let final = str;
        let sub = nanoid();
        let pairs = {};
        for (const [key, val] of Object.entries(subs)) {
            let sub = nanoid();
            final = final.replace(key, sub);
            pairs[sub] = val;
        }
        for (const [key, val] of Object.entries(pairs)) {
            final = final.replace(key, val);
        }
        return final;
    }
}
