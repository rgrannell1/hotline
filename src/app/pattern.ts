
import { nanoid } from 'nanoid'
import Strings from '../commons/strings.js'

import {
  InvalidInput
} from '../commons/errors.js'

export default class Pattern {
  id:string
  url:string

  constructor (id:string, url:string) {
    this.id = id
    this.url = url
  }
  /**
   * return the arity (number of free variables) in the hotline URL pattern
   */
  arity () {
    let count = 0
    let message = this.url

    // -- there is no reason to ever have this many variables...
    const maxVariables = 32

    for (let ith = maxVariables; ith >= 0; --ith) {
      let target = '$' + ith

      if (this.url.includes(target)) {
        count++
        message = message.replace(target, 'placeholder.')
      }
    }

    return count
  }
  /**
   * expand a hotline pattern with provided arguments
   *
   * @param args the query arguments to expand
   *
   * @returns string a URL
   */
  expand (args?:string[]) {
    const count = this.arity()

    if (!args && count === 0) {
      return this.url
    }

    if (args?.length !== count) {
      throw new InvalidInput(`the selected pattern requires ${count} arguments but you provided ${args?.length || 0}`)
    }

    const subs:{ [key:string]: string  } = { }

    for (let ith = 0; ith < count; ++ith) {
      subs['$' + ith] = encodeURIComponent(args[ith])
    }

    return Strings.replaceMany(this.url, subs)
  }
  googleUrl () {
    if (this.arity() > 1) {
      throw new Error('arity too high') // TODO
    }

    return this.url.replace('$0', '%s')
  }
}
